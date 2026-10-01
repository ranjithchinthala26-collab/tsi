import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TreePine, Trophy, Award, HeartPulse, Sparkles } from 'lucide-react';
import { KEY_STATS } from '../data/schoolData';

const Counter: React.FC<{ target: number; duration?: number; prefix?: string; suffix?: string }> = ({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalSteps = 40;
    const stepTime = Math.max(20, Math.floor(duration / totalSteps));
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-tulas-crimson dark:text-tulas-gold tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
};

export const StatsRibbon: React.FC = () => {
  const statIcons = [
    <TreePine className="w-6 h-6 text-emerald-500" />,
    <Trophy className="w-6 h-6 text-tulas-gold" />,
    <Award className="w-6 h-6 text-tulas-teal-dark dark:text-tulas-teal" />,
    <HeartPulse className="w-6 h-6 text-rose-500" />,
    <Sparkles className="w-6 h-6 text-amber-500" />,
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10 mb-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
          {KEY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center px-3 ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}
            >
              <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 mb-3 shadow-inner">
                {statIcons[idx]}
              </div>

              <div className="flex items-baseline justify-center">
                <Counter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              <h4 className="mt-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {stat.label}
              </h4>

              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
