import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Medal } from 'lucide-react';
import { MENTORS_DATA } from '../data/schoolData';

export const CelebrityMentors: React.FC = () => {
  return (
    <section id="mentors" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-tulas-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tulas-crimson/10 border border-tulas-crimson/30 text-tulas-crimson dark:text-tulas-gold text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Hall of Inspiration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Influential Personalities <span className="text-tulas-crimson dark:text-tulas-gold">On Campus</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            At Tulas, our students don’t just watch heroes from afar—they interact, learn, and train directly with Olympic champions, national icons, and visionary leaders.
          </motion.p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENTORS_DATA.map((mentor, idx) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
              data-cursor-text="MENTOR"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-tulas-gold text-slate-950 font-extrabold text-[10px] tracking-wide uppercase mb-1.5">
                    {mentor.role}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1">
                    {mentor.title}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <Medal className="w-4 h-4 text-tulas-crimson dark:text-tulas-gold flex-shrink-0 mt-0.5" />
                  <span>{mentor.achievement}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-tulas-crimson dark:text-tulas-gold">TIS Masterclass Series</span>
                  <Award className="w-3.5 h-3.5 text-tulas-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
