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

const renderStatIcon = (id: string) => {
  switch (id) {
    case 'campus':
      return <TreePine className="w-6 h-6 text-emerald-500" />;
    case 'sports':
      return <Trophy className="w-6 h-6 text-tulas-gold" />;
    case 'ratio':
      return <Sparkles className="w-6 h-6 text-amber-500" />;
    case 'medical':
      return <HeartPulse className="w-6 h-6 text-rose-500" />;
    case 'ranking':
      return <Award className="w-6 h-6 text-tulas-teal-dark dark:text-tulas-teal" />;
    default:
      return <Sparkles className="w-6 h-6 text-amber-500" />;
  }
};

export const StatsRibbon: React.FC = () => {
  return (
    <section className="relative -mt-6 sm:-mt-10 mb-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {KEY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-tulas-gold/40 transition-all ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 shadow-sm mb-2.5 sm:mb-3">
                {renderStatIcon(stat.id)}
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
