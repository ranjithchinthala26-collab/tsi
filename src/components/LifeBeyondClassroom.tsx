import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Palette,
  Users,
  Home,
  Sparkles,
  ArrowRight,
  Medal,
  CheckCircle2,
  X,
  Target,
  Music,
  HeartHandshake
} from 'lucide-react';
import { SPORTS_DATA } from '../data/schoolData';
import type { SportItem } from '../types';

interface LifeBeyondClassroomProps {
  onOpenEnquiry: () => void;
}

type PillarKey = 'sports' | 'arts' | 'clubs' | 'boarding';

export const LifeBeyondClassroom: React.FC<LifeBeyondClassroomProps> = ({ onOpenEnquiry }) => {
  const [activePillar, setActivePillar] = useState<PillarKey>('sports');
  const [selectedSportCategory, setSelectedSportCategory] = useState<string>('All');
  const [selectedSportModal, setSelectedSportModal] = useState<SportItem | null>(null);

  // The 16 TIS sports for the marquee
  const marqueeSports = [
    'CRICKET',
    'FOOTBALL',
    'ARCHERY',
    'TENNIS',
    'SWIMMING',
    'BASKETBALL',
    'BADMINTON',
    'HORSE RIDING',
    'SHOOTING',
    'SQUASH',
    'TAEKWONDO',
    'CYCLING',
    'HOCKEY',
    'TABLE TENNIS',
    'VOLLEYBALL',
    'BILLIARDS',
  ];

  const sportCategories = ['All', 'Olympic', 'Outdoor', 'Indoor', 'Equestrian & Combat'];

  const filteredSports =
    selectedSportCategory === 'All'
      ? SPORTS_DATA
      : SPORTS_DATA.filter((s) => s.category === selectedSportCategory);

  const pillars = [
    {
      key: 'sports' as PillarKey,
      title: 'SPORTS',
      tagline: '16+ Disciplines',
      subtext: 'Olympic-Standard Fields & Mentors',
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-amber-500 to-rose-600',
      activeBorder: 'border-tulas-crimson',
      badge: 'Championship Legacy',
    },
    {
      key: 'arts' as PillarKey,
      title: 'ARTS & CULTURE',
      tagline: 'Music • Art • Drama',
      subtext: 'Trinity Syllabus & Amphitheatre',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600',
      activeBorder: 'border-purple-600',
      badge: 'Creative Expression',
    },
    {
      key: 'clubs' as PillarKey,
      title: 'CLUBS',
      tagline: 'Leadership • Innovation • Community',
      subtext: 'Robotics, MUN & Astronomy',
      icon: <Users className="w-5 h-5" />,
      color: 'from-teal-500 to-emerald-600',
      activeBorder: 'border-teal-600',
      badge: 'Student-Led Societies',
    },
    {
      key: 'boarding' as PillarKey,
      title: 'BOARDING LIFE',
      tagline: 'Community • Independence • Growth',
      subtext: 'Modern Gurukul Pastoral Care',
      icon: <Home className="w-5 h-5" />,
      color: 'from-blue-600 to-indigo-700',
      activeBorder: 'border-indigo-600',
      badge: 'Home Away From Home',
    },
  ];

  // The 4 Gurukul Houses for Boarding Pillar
  const houses = [
    {
      name: 'Rishabh House',
      symbol: 'The Lion',
      motto: 'Valour & Fortitude',
      color: 'from-rose-600 to-tulas-crimson',
      desc: 'Named after the founder trust, instilling fearlessness, integrity, and relentless courage.',
    },
    {
      name: 'Drona House',
      symbol: 'The Archer',
      motto: 'Focus & Mastery',
      color: 'from-amber-500 to-tulas-gold',
      desc: 'Embodying Guru Dronacharya’s single-minded archery focus, athletic grit, and tactical skill.',
    },
    {
      name: 'Aryabhatta House',
      symbol: 'The Orbit',
      motto: 'Intellect & Discovery',
      color: 'from-teal-500 to-tulas-teal-dark',
      desc: 'Celebrating India’s legendary astronomer and mathematician with deep inquiry and innovation.',
    },
    {
      name: 'Vishwamitra House',
      symbol: 'The Sage',
      motto: 'Wisdom & Leadership',
      color: 'from-indigo-600 to-blue-800',
      desc: 'Representing profound vision, selfless brotherhood, and principled community leadership.',
    },
  ];

  return (
    <section id="life-at-tis" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-[#070B13]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-tulas-crimson/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-tulas-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tulas-crimson/10 border border-tulas-crimson/25 text-tulas-crimson dark:text-tulas-gold text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Co-Curricular & Campus Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Life Beyond the <span className="text-tulas-crimson dark:text-tulas-gold">Classroom</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Education at TIS extends far past conventional classrooms. Nestled in the Shivalik foothills of Dehradun, our 22-acre modern Gurukul empowers every student to discover their passions across Olympic sports, fine arts, innovation clubs, and nurturing residential boarding.
          </motion.p>
        </div>

        {/* 1. Animated Horizontal Continuous Sports Marquee */}
        <div className="mb-14 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 dark:border-slate-700/60 shadow-xl py-3.5 relative">
          {/* Subtle gradient edges to create infinite fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6 text-white text-xs sm:text-sm font-black tracking-widest uppercase">
            {/* First Set */}
            {marqueeSports.map((sport, index) => (
              <div key={`sport-1-${index}`} className="flex items-center gap-6 whitespace-nowrap">
                <span className="text-white hover:text-tulas-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tulas-crimson inline-block" />
                  {sport}
                </span>
                <span className="text-tulas-gold/60 select-none">•</span>
              </div>
            ))}
            {/* Duplicate Set for Seamless Continuous Loop */}
            {marqueeSports.map((sport, index) => (
              <div key={`sport-2-${index}`} className="flex items-center gap-6 whitespace-nowrap">
                <span className="text-white hover:text-tulas-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tulas-crimson inline-block" />
                  {sport}
                </span>
                <span className="text-tulas-gold/60 select-none">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. The 4 Main Pillars Switcher Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {pillars.map((pillar) => {
            const isSelected = activePillar === pillar.key;
            return (
              <button
                key={pillar.key}
                onClick={() => setActivePillar(pillar.key)}
                className={`text-left rounded-3xl p-6 transition-all duration-300 relative overflow-hidden group border ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800/90 shadow-xl border-tulas-crimson dark:border-tulas-gold scale-[1.02] ring-2 ring-tulas-crimson/20'
                    : 'bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/70 border-slate-200/80 dark:border-slate-800 shadow-sm'
                }`}
              >
                {/* Accent Top Border Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.color} ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  } transition-opacity duration-300`}
                />

                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br ' + pillar.color + ' text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-tulas-crimson group-hover:text-white'
                    }`}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isSelected
                        ? 'bg-tulas-crimson/10 text-tulas-crimson dark:bg-tulas-gold/15 dark:text-tulas-gold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                
                <p className="text-xs sm:text-sm font-semibold text-tulas-crimson dark:text-tulas-gold mt-1">
                  {pillar.tagline}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {pillar.subtext}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-tulas-crimson dark:group-hover:text-tulas-gold">
                  <span>Explore Pillar</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* 3. Deep Dive Dynamic Showcase based on Active Pillar */}
        <AnimatePresence mode="wait">
          {activePillar === 'sports' && (
            <motion.div
              key="pillar-sports"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Category Filter Pills */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-tulas-crimson dark:text-tulas-gold">
                    16 Official Sports Disciplines
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Filter by Arena & Category
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {sportCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedSportCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedSportCategory === cat
                          ? 'bg-tulas-crimson text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {cat} {cat === 'All' ? `(${SPORTS_DATA.length})` : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sports Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSports.map((sport) => (
                  <div
                    key={sport.id}
                    onClick={() => setSelectedSportModal(sport)}
                    className="group glass-card rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                      <img
                        src={sport.image}
                        alt={sport.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                        {sport.category}
                      </span>

                      {sport.achievement && (
                        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-tulas-gold text-[11px] font-bold">
                          <Medal className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{sport.achievement}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-tulas-crimson dark:group-hover:text-tulas-gold transition-colors">
                          {sport.name}
                        </h4>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                          {sport.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="font-medium truncate mr-2">{sport.facility}</span>
                        <Target className="w-3.5 h-3.5 text-tulas-crimson dark:text-tulas-gold flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sports Trial & Scholarship Callout */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-tulas-crimson via-tulas-crimson-dark to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
                    Sports Scholarships & Elite Training
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Are you a District, State, or National Student Athlete?
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 max-w-xl mt-1">
                    TIS offers customized tournament schedules, academic support, boarding accommodations, and merit-based sports scholarships for promising young athletes.
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
            </motion.div>
          )}

          {activePillar === 'arts' && (
            <motion.div
              key="pillar-arts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                    <Music className="w-3.5 h-3.5" />
                    <span>Trinity College London Curriculum</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                    Where Soul Finds Voice: Music, Dance, Pottery & Theatre
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    At Tula’s, every child explores their artistic voice. Whether mastering classical ragas, playing piano for international Trinity examinations, shaping clay on the potter's wheel, or performing Shakespeare under open skies in our amphitheatre.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        Performing Arts Wing
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Sound-insulated rehearsal studios for Indian Classical & Western rock ensemble.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        Fine Art & Pottery Kiln
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Professional pottery wheels, canvas easels, sculpting tools, and annual gallery exhibition.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        500-Seat Amphitheatre
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Under-the-stars open air theatre for drama fests, poetry recitals, and musical concerts.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        Classical & Folk Dance
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Kathak, Bharatnatyam, Contemporary, and Garhwali folk dance under veteran gurus.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenEnquiry}
                    className="px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Inquire About Arts Scholarship</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg group">
                      <img
                        src="/tis-assets/pot.6f7c2ee3.webp"
                        alt="Pottery Studio"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl text-center">
                      <span className="text-xs font-bold text-purple-800 dark:text-purple-300">Pottery & Clay Studio</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg group">
                      <img
                        src="/tis-assets/dance.88843edb.webp"
                        alt="Dance Academy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl text-center">
                      <span className="text-xs font-bold text-purple-800 dark:text-purple-300">Classical Dance Academy</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activePillar === 'clubs' && (
            <motion.div
              key="pillar-clubs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="rounded-3xl overflow-hidden aspect-[16/10] shadow-2xl relative group">
                    <img
                      src="/tis-assets/madeForFuture.e96fe7c1.png"
                      alt="TIS Innovation Lab"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-3 py-1 rounded-full bg-teal-500/80 text-white text-[10px] font-bold uppercase tracking-wider">
                        Future Ready Lab
                      </span>
                      <h4 className="text-lg font-bold mt-1">Robotics, AI & STEM Innovation</h4>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5" />
                    <span>Democratic Student Leadership</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                    Clubs & Societies: Where Future Leaders Take Charge
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Student leadership is lived every single day. From organising the flagship TIS International Model United Nations to coding autonomous drones, running the school news bulletin, and leading environmental clean-ups in the Doon valley.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        Model United Nations (MUN)
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Developing international diplomacy, parliamentary debate, and geopolitical crisis resolution.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        Robotics & AI Guild
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        3D printing, Arduino microcontrollers, autonomous rovers, and Python machine learning.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        Astronomy & Stargazing
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Equipped with high-aperture telescopes for Himalayan astrophotography and planetary tracking.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        Rotary Interact Outreach
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Village literacy programs, tree plantation drives, and compassionate community service.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenEnquiry}
                    className="px-6 py-3 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Explore Leadership Programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activePillar === 'boarding' && (
            <motion.div
              key="pillar-boarding"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-10"
            >
              {/* Boarding Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>Pastoral Care & Self-Reliance</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                    Boarding Life: Community • Independence • Growth
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    At TIS, boarding is an empowering rite of passage. Guided by compassionate House Parents, students build lifelong friendships, self-discipline, and independent leadership while surrounded by pristine Shivalik mountain air.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <span className="text-2xl font-black text-tulas-crimson dark:text-tulas-gold">1 : 12</span>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">House Parent Ratio</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Intimate emotional & pastoral mentoring</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <span className="text-2xl font-black text-tulas-crimson dark:text-tulas-gold">100%</span>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Nutritious Pure Veg Dining</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Dietitian-curated wholesome multi-cuisine</p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenEnquiry}
                    className="px-6 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Schedule Boarding Campus Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group">
                    <img
                      src="/tis-assets/image3.b8273b93.png"
                      alt="TIS Boarding Facility"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group">
                    <img
                      src="/tis-assets/medical.e87071fe.png"
                      alt="24/7 Infirmary"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* The Gurukul Four Houses Feature */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-tulas-crimson dark:text-tulas-gold">
                      Pastoral House System
                    </span>
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      The Four Gurukul Houses
                    </h4>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Inter-house athletics, debates, and lifelong brotherhood
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {houses.map((house, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 hover:shadow-lg transition-all"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${house.color} text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm`}>
                        {house.name[0]}
                      </div>

                      <h5 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {house.name}
                      </h5>

                      <span className="text-[11px] font-bold uppercase tracking-wider block mt-0.5 text-tulas-crimson dark:text-tulas-gold">
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
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Sport Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedSportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedSportModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-slate-950">
                <img
                  src={selectedSportModal.image}
                  alt={selectedSportModal.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedSportModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full bg-tulas-crimson text-white text-xs font-bold uppercase tracking-wider">
                    {selectedSportModal.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl mt-2">
                    {selectedSportModal.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedSportModal.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Facility & Specifications
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-1 block">
                      {selectedSportModal.facility}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-tulas-gold/10 dark:bg-tulas-gold/15 border border-tulas-gold/30">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tulas-gold-dark dark:text-tulas-gold block">
                      Key Accolade
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-1 block">
                      {selectedSportModal.achievement || 'State & National Championship Representation'}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedSportModal(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSportModal(null);
                      onOpenEnquiry();
                    }}
                    className="px-6 py-2.5 rounded-full bg-tulas-crimson hover:bg-tulas-crimson-dark text-white text-xs font-bold transition-all shadow-md"
                  >
                    Inquire About {selectedSportModal.name}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
