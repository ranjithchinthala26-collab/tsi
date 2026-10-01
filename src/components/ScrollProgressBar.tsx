import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top Fixed Gradient Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] z-[9999] origin-left bg-gradient-to-r from-tulas-crimson via-tulas-gold to-tulas-teal shadow-[0_0_12px_rgba(185,1,36,0.6)]"
        style={{ scaleX }}
      />

      {/* Floating Reading Percentage Pill (appears after scrolling 2%) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: percent > 2 && percent < 99 ? 1 : 0,
          y: percent > 2 && percent < 99 ? 0 : -10,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-3 right-4 z-[9998] hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/90 dark:bg-[#0B1329]/90 backdrop-blur-md border border-tulas-gold/30 text-tulas-crimson dark:text-tulas-gold shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-tulas-crimson animate-pulse" />
        <span>{percent}% Read</span>
      </motion.div>
    </>
  );
};
