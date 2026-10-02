import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Cpu, Palette, Crown, CheckCircle2, ArrowRight } from 'lucide-react';
import { LIFE_AT_TIS_DATA } from '../data/schoolData';
import type { LifeActivityItem } from '../types';

interface LifeAtTISProps {
  onOpenEnquiry: () => void;
}

export const LifeAtTIS: React.FC<LifeAtTISProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<LifeActivityItem['category']>('Sports');

  const categories: { label: LifeActivityItem['category']; icon: React.ReactNode }[] = [
    { label: 'Sports', icon: <Trophy className="w-4 h-4" /> },
    { label: 'Clubs & STEM', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Arts & Culture', icon: <Palette className="w-4 h-4" /> },
    { label: 'Leadership', icon: <Crown className="w-4 h-4" /> },
  ];

  const filteredItems = LIFE_AT_TIS_DATA.filter((item) => item.category === selectedCategory);

  const houses = [
    {
      name: 'Rishabh House',
      symbol: 'The Lion',
      motto: 'Valour & Fortitude',
      color: 'from-rose-600 to-tulas-crimson',
      textColor: 'text-rose-600 dark:text-rose-400',
      desc: 'Named after the founder trust, instilling fearlessness, integrity, and relentless courage.',
    },
    {
      name: 'Drona House',
      symbol: 'The Archer',
      motto: 'Focus & Mastery',
      color: 'from-amber-500 to-tulas-gold',
      textColor: 'text-amber-500 dark:text-tulas-gold',
      desc: 'Embodying Guru Dronacharya’s single-minded archery focus, athletic grit, and tactical skill.',
    },
    {
      name: 'Aryabhatta House',
      symbol: 'The Orbit',
      motto: 'Intellect & Discovery',
      color: 'from-teal-500 to-tulas-teal-dark',
      textColor: 'text-teal-600 dark:text-tulas-teal',
      desc: 'Celebrating India’s legendary astronomer and mathematician with deep inquiry and innovation.',
    },
    {
      name: 'Vishwamitra House',
      symbol: 'The Sage',
      motto: 'Wisdom & Leadership',
      color: 'from-indigo-600 to-blue-800',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      desc: 'Representing profound vision, selfless brotherhood, and principled community leadership.',
    },
  ];

  return (
    <section id="life-at-tis" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/60 dark:bg-[#070B13]/60">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-tulas-gold/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-tulas-crimson/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tulas-gold/15 border border-tulas-gold/30 text-tulas-gold-dark dark:text-tulas-gold text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Holistic Campus Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Life at TIS: <span className="text-tulas-crimson dark:text-tulas-gold">Beyond Boundaries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            School at TIS is not merely a curriculum—it is an exhilarating journey of self-discovery spanning championship sports, high-tech labs, soul-stirring arts, and democratic student governance.
          </motion.p>

          {/* Life at TIS Visual Showcase Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 group aspect-[16/7] max-h-72 w-full"
            data-cursor-text="STUDENTS"
          >
            <img
              src="/images/students.jpg"
              alt="Tula's International School Students, Activities & Campus Camaraderie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5 sm:p-7 text-left">
              <div>
                <span className="px-3 py-1 rounded-full bg-tulas-crimson text-white font-extrabold text-[10px] sm:text-xs tracking-wider uppercase mb-1.5 inline-block">
                  Student Life & Activities
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  Lifelong Friendships, Sportsmanship & Balanced Living
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Interactive Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-tulas-crimson text-white shadow-glow-crimson scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Activity Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Photo Display */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Highlight Badge */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-tulas-gold text-[10px] font-bold">
                        {item.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tulas-crimson dark:text-tulas-gold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 group-hover:text-tulas-crimson dark:group-hover:text-tulas-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-tulas-crimson hover:text-white dark:hover:bg-tulas-crimson dark:hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire About {item.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* The Gurukul Four Houses Feature */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tulas-crimson dark:text-tulas-gold">
                Pastoral House System
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
                The Four Gurukul Houses
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                Every boarder at TIS is welcomed into a House family, creating lifelong bonds, healthy inter-house athletic rivalries, and leadership opportunities.
              </p>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="flex-shrink-0 px-6 py-3 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-tulas-crimson text-white text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              Learn About Boarding Houses
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, hIdx) => (
              <div
                key={hIdx}
                className="p-5 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 hover:shadow-lg transition-all"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${house.color} text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm`}>
                  {house.name[0]}
                </div>

                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  {house.name}
                </h4>

                <span className={`text-[11px] font-bold uppercase tracking-wider block mt-0.5 ${house.textColor}`}>
                  {house.motto}
                </span>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {house.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Emblem: {house.symbol}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
