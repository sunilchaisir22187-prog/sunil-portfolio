'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const links = [
  { href: '#about', label: 'The person' },
  { href: '#archive', label: 'Selected work' },
  { href: '#contact', label: 'Let’s talk' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'story' | 'work'>('story');
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 801px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus(); }
    };
    const closeOutside = (event: PointerEvent) => {
      if (open && !header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  return (
    <header ref={header} className="header">
      <div className="headerInner">
        <a href="#prologue" className="navText" aria-label="The Human Variable, back to the beginning">The Human Variable</a>
        <nav className="modeSwitch" aria-label="Choose how to explore">
          <a href="#origin" data-active={mode === 'story'} onClick={() => { setMode('story'); setOpen(false); }}>Story mode</a>
          <a href="#archive" data-active={mode === 'work'} onClick={() => { setMode('work'); setOpen(false); }}>Work mode</a>
        </nav>
        <nav className="primaryNav" aria-label="Main navigation">
          {links.filter((link) => link.href !== '#archive').map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <button ref={button} className="menuButton" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav id="mobile-navigation" className="mobileNav" aria-label="Mobile navigation" initial={reduce ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : -8 }} transition={{ duration: 0.2 }}>
            <a href="#origin" onClick={() => setOpen(false)}>The story</a>
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
