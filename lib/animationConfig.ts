export const animationConfig = {
  duration: { hover: 0.28, reveal: 0.78, scene: 1.15 },
  ease: { reveal: 'power3.out', scene: 'power4.out' },
  desktopQuery: '(min-width: 901px) and (pointer: fine)',
  reducedMotionQuery: '(prefers-reduced-motion: reduce)',
} as const;
