import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Clock, BookOpen, Sparkles, CheckCircle2, ChevronRight, Flame } from 'lucide-react';
import { GRADE_CURRICULUM_DATA, GURUKUL_DAILY_ROUTINE } from '../data/schoolData';

export const CurriculumGradeExplorer: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [selectedGradeIdx, setSelectedGradeIdx] = useState(2); // Default to Class IX-X Secondary
  const [viewMode, setViewMode] = useState<'grades' | 'routine'>('grades');

  const activeGrade = GRADE_CURRICULUM_DATA[selectedGradeIdx];

  return (
    <section id="academics" className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#070B13]/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-tulas-crimson/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tulas-gold/10 border border-tulas-gold/30 text-tulas-gold-dark dark:text-tulas-gold text-xs font-bold tracking-wider uppercase mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigour & Daily Life</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Tailored Pathways from <span className="text-tulas-crimson dark:text-tulas-gold">Class IV to XII</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Explore our CBSE academic framework and discover the disciplined, balanced rhythm of a day in the life of a TIS boarder.
          </motion.p>

          {/* Toggle between Grade Explorer and Daily Routine */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-md">
            <button
              onClick={() => setViewMode('grades')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'grades'
                  ? 'bg-white dark:bg-slate-900 text-tulas-crimson dark:text-tulas-gold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Curriculum by Grade
            </button>
            <button
              onClick={() => setViewMode('routine')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'routine'
                  ? 'bg-white dark:bg-slate-900 text-tulas-crimson dark:text-tulas-gold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              A Day in Gurukul (Timetable)
            </button>
          </div>
        </div>

        {/* View Mode 1: Curriculum by Grade */}
        {viewMode === 'grades' ? (
          <div>
            {/* Grade Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {GRADE_CURRICULUM_DATA.map((grade, idx) => (
                <button
                  key={grade.gradeRange}
                  onClick={() => setSelectedGradeIdx(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                    selectedGradeIdx === idx
                      ? 'bg-white dark:bg-slate-800 border-tulas-crimson dark:border-tulas-gold shadow-lg shadow-tulas-crimson/10'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                    selectedGradeIdx === idx ? 'text-tulas-crimson dark:text-tulas-gold' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {grade.gradeRange}
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white block mt-1">
                    {grade.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Grade Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGrade.gradeRange}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-8">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-tulas-crimson/10 dark:bg-tulas-crimson/20 text-tulas-crimson dark:text-tulas-gold text-xs font-bold uppercase tracking-wider">
                      {activeGrade.gradeRange}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2">
                      {activeGrade.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                      {activeGrade.description}
                    </p>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex-shrink-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Routine Highlight
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-tulas-crimson dark:text-tulas-gold block mt-0.5">
                      {activeGrade.routineHighlight}
                    </span>
                  </div>
                </div>

                {/* Academic Laboratory & Learning Space Showcase (Uncropped, Full Face & Hands-on Science) */}
                <div
                  className="mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-slate-700/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 relative group"
                  data-cursor-text="LABS"
                >
                  {/* Left: STEM Curriculum Detail */}
                  <div className="lg:col-span-7 space-y-3.5 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tulas-gold/20 border border-tulas-gold/40 text-tulas-gold text-xs font-bold tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>State-of-the-Art STEM Laboratories</span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                      Physics, Chemistry, Biology & AI Robotics Centers
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Hands-on scientific discovery where textbook theory transforms into empirical understanding. Students work with university-grade optical benches, digital microscopes, 3D prototyping, and dedicated research workstations.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-[11px] font-semibold">
                        🔬 Optical Physics & Laser Bench
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-[11px] font-semibold">
                        🧪 1:1 Individual Lab Apparatus
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-[11px] font-semibold">
                        🤖 AI & Robotics Prototyping
                      </span>
                    </div>
                  </div>

                  {/* Right: The Student in Laboratory with Full Face & Equipment */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950/50 p-2">
                      <img
                        src="/images/academics.jpg"
                        alt="Tula's International School Academic Laboratory & Smart Classrooms"
                        className="w-full h-full object-contain sm:object-cover object-[center_top] rounded-xl transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-center">
                        <p className="text-white text-xs font-bold">Experiential Optics & STEM Lab</p>
                        <p className="text-tulas-gold text-[10px] font-semibold">Guided by Senior Research Faculty</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Column 1: Academic Curriculum */}
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <BookOpen className="w-4 h-4 text-tulas-crimson" />
                      <span>Curriculum Subjects</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {activeGrade.curriculum.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Pastoral & Learning Features */}
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-tulas-gold" />
                      <span>Pastoral & Boarding Care</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {activeGrade.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-tulas-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Sports & Co-Curricular Focus */}
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <Flame className="w-4 h-4 text-rose-500" />
                      <span>Athletics & Personality</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {activeGrade.sportsFocus.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Seats strictly capped for individual teacher mentorship (6:1 ratio).
                  </span>
                  <button
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-tulas-crimson dark:text-tulas-gold hover:underline"
                  >
                    <span>Check Seat Availability for {activeGrade.gradeRange}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* View Mode 2: Gurukul Daily Routine Timeline */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  A Day in the Modern Gurukul
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Every minute is structured for discipline, academic depth, and athletic mastery.
                </p>
              </div>
              <Clock className="w-8 h-8 text-tulas-gold opacity-80 hidden sm:block" />
            </div>

            <div className="space-y-4">
              {GURUKUL_DAILY_ROUTINE.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-tulas-gold transition-colors"
                >
                  <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <span className="w-24 sm:w-28 text-xs sm:text-sm font-mono font-bold text-tulas-crimson dark:text-tulas-gold flex-shrink-0">
                      {item.time}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-300 sm:max-w-md sm:text-right">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
