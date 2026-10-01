import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Target, ArrowRight } from 'lucide-react';
import { SPORTS_DATA } from '../data/schoolData';

export const SportsShowcase: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Olympic', 'Outdoor', 'Indoor', 'Equestrian & Combat'];

  const filteredSports = selectedCategory === 'All'
    ? SPORTS_DATA
    : SPORTS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="sports" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-tulas-crimson/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Original TIS Copy */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tulas-crimson/10 border border-tulas-crimson/30 text-tulas-crimson dark:text-tulas-gold text-xs font-bold tracking-wider uppercase mb-4"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Sports Excellence Academy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Sports? At TIS, It’s Not Just a Facility.{' '}
            <span className="text-tulas-crimson dark:text-tulas-gold">It’s the Foundation!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <strong className="text-slate-900 dark:text-white">16+ sports disciplines</strong> curated to build character, resilience, physical grit, and team spirit. Guided by Arjuna Awardees and Olympic mentors.
          </motion.p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-tulas-crimson text-white shadow-glow-crimson scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat} {cat === 'All' ? `(${SPORTS_DATA.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Sports Grid with Staggered Framer Motion Reveal */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSports.map((sport, idx) => (
              <motion.div
                layout
                key={sport.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass-card rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                data-cursor-text={sport.name.toUpperCase()}
              >
                {/* Sport Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                    {sport.category}
                  </span>

                  {/* Achievement Micro-Badge */}
                  {sport.achievement && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-tulas-gold text-[11px] font-bold">
                      <Medal className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{sport.achievement}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-tulas-crimson dark:group-hover:text-tulas-gold transition-colors">
                      {sport.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {sport.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-medium truncate mr-2">{sport.facility}</span>
                    <Trophy className="w-3.5 h-3.5 text-tulas-gold flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-tulas-crimson via-tulas-crimson-dark to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
              Sports Scholarships Available
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Are you a State or National level student athlete?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl mt-1">
              TIS offers specialized training regimens, boarding facilities, and merit-based sports scholarships for promising young athletes.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-tulas-gold hover:bg-tulas-gold-light text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>Apply for Sports Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
