import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      data-cursor-text="THEME"
      className={`relative inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 ${
        isDark
          ? 'bg-slate-800/80 border-amber-400/40 text-amber-300 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]'
          : 'bg-white/90 border-slate-200 text-slate-700 hover:border-tulas-crimson hover:text-tulas-crimson shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Animated Moon */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-4 h-4 text-amber-300 fill-amber-300/20" />
        </motion.div>

        {/* Animated Sun */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20" />
        </motion.div>
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-medium tracking-wide">
          {isDark ? 'Night' : 'Day'}
        </span>
      )}
    </motion.button>
  );
};
