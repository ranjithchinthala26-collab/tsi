import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Trophy, Users, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onOpenVirtualTour }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[550px] bg-gradient-to-tr from-tulas-crimson/15 via-tulas-gold/15 to-tulas-teal/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-tulas-crimson/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-tulas-teal/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Badge: Affiliation & Gurukul Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tulas-crimson/10 dark:bg-tulas-crimson/20 border border-tulas-crimson/25 text-tulas-crimson dark:text-tulas-gold-light text-xs font-bold tracking-wide uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-tulas-gold animate-spin" style={{ animationDuration: '8s' }} />
              <span>The Modern Gurukul • Dehradun</span>
              <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-tulas-crimson" />
              <span className="hidden sm:inline text-slate-700 dark:text-slate-300 font-semibold normal-case">CBSE Co-Ed Boarding</span>
            </motion.div>

            {/* Main Headline with Reviewed Copy and Animated Underline Doodle */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4"
            >
              Where curiosity <br className="hidden sm:inline" />
              <span className="relative inline-block text-tulas-crimson dark:text-tulas-gold">
                becomes possibility.
                {/* Hand-drawn Underline Doodle SVG */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-tulas-gold overflow-visible"
                  viewBox="0 0 268 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C50 3 115 7 155 3C195 -1 265 6 265 6C170 8 128 11 85 13C170 14 260 9 260 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="scribble-path"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Official TIS Motto Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-6 shadow-sm"
            >
              <span className="text-slate-400 font-medium">School Motto:</span>
              <span className="text-tulas-crimson font-serif italic text-sm sm:text-base">LET’S DO it</span>
              <span className="text-tulas-gold font-extrabold">WITH TULAS</span>
            </motion.div>

            {/* Sub-headline: Retaining Authentic TIS Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              Established under the aegis of <strong className="text-slate-900 dark:text-white">Rishabh Educational Trust</strong>, TIS blends ancient Gurukul values with world-class academics, 
              <span className="text-tulas-crimson dark:text-tulas-gold font-semibold"> 16+ Olympic sports</span>, and a 
              <span className="text-tulas-teal-dark dark:text-tulas-teal font-semibold"> 22-acre pollution-free sanctuary</span> to bring out the limitless potential in every child.
            </motion.p>

            {/* High-Converting CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOpenEnquiry}
                data-cursor-text="APPLY"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-tulas-crimson via-tulas-crimson-dark to-tulas-crimson shadow-glow-crimson hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Apply for Admissions 2025-26</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVirtualTour}
                data-cursor-text="TOUR"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Play className="w-4 h-4 text-tulas-crimson dark:text-tulas-gold fill-current" />
                <span>Explore 360° Virtual Campus</span>
              </button>
            </motion.div>

            {/* Trust Markers & Quick Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-xs font-semibold text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-tulas-gold" />
                <span>#1 Co-Ed Boarding School (Education Today)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-tulas-teal-dark dark:text-tulas-teal" />
                <span>6:1 Student-Teacher Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>24/7 Gated & Infirmary Care</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Visual Showcase & Floating Feature Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Central Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-slate-800/80 group"
              data-cursor-text="CAMPUS"
            >
              <img
                src="/images/campus.jpg"
                alt="Tula's International School Dehradun Campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-tulas-gold text-slate-900 font-extrabold text-[11px] tracking-wider uppercase mb-2">
                  Dehradun, Uttarakhand
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl leading-tight text-white mb-1">
                  22-Acre Serene Foothill Campus
                </h3>
                <p className="text-xs text-white/80">
                  Where academic rigour meets the tranquility of nature.
                </p>
              </div>
            </motion.div>

            {/* Floating Orbit Card 1: Olympic Sports (Archery) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 left-2 sm:-top-6 sm:-left-6 md:-left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20 animate-float-slow"
              data-cursor-text="SPORTS"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-tulas-crimson/10 flex-shrink-0">
                <img
                  src="/images/sports.jpg"
                  alt="Archery at TIS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pr-2">
                <p className="text-[11px] font-bold text-tulas-crimson dark:text-tulas-gold uppercase tracking-wider">
                  Olympic Facility
                </p>
                <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                  16+ Sports Disciplines
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  World Champion Coaches
                </p>
              </div>
            </motion.div>

            {/* Floating Orbit Card 2: 6:1 Ratio & Care */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 md:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20"
              style={{ animation: 'float 7s ease-in-out infinite reverse' }}
              data-cursor-text="CARE"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-tulas-teal-light/30 flex-shrink-0 border border-tulas-teal/20">
                <img
                  src="/images/student-female.png"
                  alt="TIS Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pr-2">
                <p className="text-[11px] font-bold text-tulas-teal-dark dark:text-tulas-teal uppercase tracking-wider">
                  6:1 Mentorship
                </p>
                <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                  Personal Care
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Every child known & nurtured
                </p>
              </div>
            </motion.div>

            {/* Floating Badge 3: 24x7 Medical Infirmary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex absolute top-1/2 -right-4 xl:-right-8 transform -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-800 items-center gap-2.5 z-20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                24/7 Multi-Specialty Hospital Care
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
