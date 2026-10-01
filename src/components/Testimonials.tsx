import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/schoolData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#070B13]/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-tulas-crimson/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>450+ Verified Parent Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Voices of Trust from <span className="text-tulas-crimson dark:text-tulas-gold">TIS Families</span>
          </motion.h2>

          {/* Google Review Badge Counter */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">4.8 / 5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span>Based on Google Reviews</span>
          </div>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-tulas-crimson/10 dark:text-tulas-gold/10 -z-0" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Parent Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-tulas-gold shadow-md bg-slate-100">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1 rounded-full bg-emerald-500 text-white shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Testimonial Quote & Info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-3">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="font-serif italic text-base sm:text-xl text-slate-800 dark:text-slate-100 leading-relaxed mb-6">
                    “{current.quote}”
                  </p>

                  <div>
                    <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {current.author}
                    </h4>
                    <p className="text-xs font-semibold text-tulas-crimson dark:text-tulas-gold">
                      {current.relation} • {current.studentClass}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-tulas-crimson dark:bg-tulas-gold'
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
