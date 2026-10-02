import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Silky smooth spring physics (low mass, high stiffness, optimal damping for zero lag)
  const springConfig = { damping: 30, stiffness: 380, mass: 0.25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is desktop (>768px) and has a fine mouse pointer
    const checkIsDesktop = () => {
      const isPointerFine = window.matchMedia('(pointer: fine)').matches;
      const isWideScreen = window.innerWidth > 768;
      setIsFinePointer(isPointerFine && isWideScreen);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handlePointerChange = () => checkIsDesktop();
    mediaQuery.addEventListener('change', handlePointerChange);

    if (!mediaQuery.matches || window.innerWidth <= 768) {
      return () => {
        window.removeEventListener('resize', checkIsDesktop);
        mediaQuery.removeEventListener('change', handlePointerChange);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, .clickable-hover');
      setIsHovering(Boolean(isClickable));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div className="custom-cursor hidden md:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Spring Follower Ring - Minimalist & Elegant */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 44 : 26,
          height: isHovering ? 44 : 26,
          borderColor: isHovering ? 'rgba(185, 1, 36, 0.75)' : 'rgba(192, 157, 89, 0.6)',
          backgroundColor: isHovering ? 'rgba(185, 1, 36, 0.08)' : 'transparent',
          borderWidth: isHovering ? '1.5px' : '1px',
          scale: isHovering ? 1.05 : 1,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 400, mass: 0.3 }}
      />

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none will-change-transform shadow-sm"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 5 : 5,
          height: isHovering ? 5 : 5,
          backgroundColor: isHovering ? '#b90124' : '#c09d59',
          opacity: isHovering ? 0.9 : 0.8,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
