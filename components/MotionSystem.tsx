'use client';

import { useRef, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsapSetup';
import { animationConfig } from '../lib/animationConfig';

/** One page owns its timelines; all content remains readable before hydration. */
export default function MotionSystem({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!root.current) return;
    const scope = root.current;
    const mm = gsap.matchMedia();
    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--page-progress', String(distance > 0 ? window.scrollY / distance : 0));
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();

    mm.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: animationConfig.desktopQuery }, (context) => {
      const { motion, desktop } = context.conditions!;
      if (!motion) return;

      const heroElements = scope.querySelectorAll('[data-hero-reveal]');
      gsap.timeline({ defaults: { ease: animationConfig.ease.scene } })
        .from(heroElements, { y: 34, duration: animationConfig.duration.scene, stagger: 0.07, clearProps: 'transform' });

      const revealElements = scope.querySelectorAll<HTMLElement>('[data-reveal], [data-journey-stop]');
      revealElements.forEach((element) => {
        gsap.from(element, {
          y: element.hasAttribute('data-journey-stop') ? 28 : 38,
          opacity: 0,
          duration: animationConfig.duration.reveal,
          ease: animationConfig.ease.reveal,
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: element, start: 'top 91%', once: true },
        });
      });

      let lenis: Lenis | undefined;
      let ticker: ((time: number) => void) | undefined;
      let previousScrollBehavior: string | undefined;
      if (desktop) {
        scope.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => {
          gsap.fromTo(element, { yPercent: -3 }, {
            yPercent: 3, ease: 'none',
            scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
          });
        });
        // Native CSS smoothing must not compete with Lenis on hash navigation.
        previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        lenis = new Lenis({ autoRaf: false, anchors: true, duration: 1.05, smoothWheel: true, syncTouch: false });
        lenis.on('scroll', ScrollTrigger.update);
        ticker = (seconds: number) => lenis?.raf(seconds * 1000);
        gsap.ticker.add(ticker);
      }

      const refresh = () => ScrollTrigger.refresh();
      const images = Array.from(scope.querySelectorAll('img')).filter((image) => !image.complete);
      images.forEach((image) => image.addEventListener('load', refresh, { once: true }));
      let alive = true;
      document.fonts.ready.then(() => { if (alive) refresh(); });
      return () => {
        alive = false;
        images.forEach((image) => image.removeEventListener('load', refresh));
        if (ticker) gsap.ticker.remove(ticker);
        lenis?.off('scroll', ScrollTrigger.update);
        lenis?.destroy();
        if (previousScrollBehavior !== undefined) document.documentElement.style.scrollBehavior = previousScrollBehavior;
      };
    }, scope);

    return () => {
      mm.revert();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      document.documentElement.style.removeProperty('--page-progress');
    };
  }, { scope: root });

  return <div ref={root} className="motionRoot">{children}</div>;
}
