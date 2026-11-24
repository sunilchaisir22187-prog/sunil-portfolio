'use client';

import dynamic from 'next/dynamic';
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { animationConfig } from '../lib/animationConfig';

const OrbScene = dynamic(() => import('./OrbScene'), { ssr: false, loading: () => null });

class OrbBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}

/** A decorative identity metaphor, with a permanent lightweight fallback. */
export default function ChromeOrb({ className = '' }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [eligible, setEligible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);
  const handleFailure = useCallback(() => { setFailed(true); setReady(false); }, []);

  useEffect(() => {
    const desktop = window.matchMedia(animationConfig.desktopQuery);
    const reduce = window.matchMedia(animationConfig.reducedMotionQuery);
    let timer: ReturnType<typeof setTimeout>;
    const check = () => {
      clearTimeout(timer);
      if (!desktop.matches || reduce.matches) { setEligible(false); return; }
      timer = setTimeout(() => setEligible(true), 350);
    };
    const visibility = () => setTabVisible(!document.hidden);
    check(); visibility();
    desktop.addEventListener('change', check);
    reduce.addEventListener('change', check);
    document.addEventListener('visibilitychange', visibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '80px' });
    if (root.current) observer.observe(root.current);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      desktop.removeEventListener('change', check);
      reduce.removeEventListener('change', check);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  return (
    <div ref={root} className={`chromeOrb ${className}`} aria-hidden="true" data-ready={ready && eligible && !failed}>
      <span className="chromeOrbFallback" />
      {eligible && !failed && <OrbBoundary onFailure={handleFailure}><OrbScene active={visible && tabVisible} onReady={handleReady} onFailure={handleFailure} /></OrbBoundary>}
    </div>
  );
}
