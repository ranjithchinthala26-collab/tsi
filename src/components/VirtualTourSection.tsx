import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, X, Compass, ChevronRight, Check } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/schoolData';

interface VirtualTourSectionProps {
  onOpenEnquiry: () => void;
}

export const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeFacility = CAMPUS_FACILITIES[selectedFacilityIndex];

  return (
    <section id="campus" className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#070B13]/50 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-tulas-teal/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tulas-teal/10 border border-tulas-teal/30 text-tulas-teal-dark dark:text-tulas-teal text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Campus Explorer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Immerse in the <span className="text-tulas-crimson dark:text-tulas-gold">22-Acre Sanctuary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Tucked beneath the mist of the Shivalik hills in Dehradun, our campus provides an unpolluted haven where students study, play, and thrive in pure mountain air.
          </motion.p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CAMPUS_FACILITIES.map((facility, idx) => (
            <button
              key={facility.id}
              onClick={() => setSelectedFacilityIndex(idx)}
              className={`flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedFacilityIndex === idx
                  ? 'bg-tulas-crimson text-white shadow-glow-crimson scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {facility.title}
            </button>
          ))}
        </div>

        {/* Main Interactive Showcase Card */}
        <motion.div
          key={activeFacility.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Rich Interactive Media Display */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] overflow-hidden group">
            <img
              src={activeFacility.image}
              alt={activeFacility.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Hotspot Floating Stat Pill */}
            <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activeFacility.stats}</span>
            </div>

            {/* Fullscreen Expand Trigger */}
            <button
              onClick={() => setLightboxOpen(true)}
              data-cursor-text="ZOOM"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all transform hover:scale-110"
              aria-label="View photo in fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Bottom Caption on Media */}
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="text-xs uppercase tracking-widest text-tulas-gold font-bold">
                TIS Dehradun Campus Feature
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                {activeFacility.title}
              </h3>
            </div>
          </div>

          {/* Right Column: In-depth Explanatory Information */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white/95 dark:bg-slate-900/95">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-tulas-crimson/10 dark:bg-tulas-gold/10 text-tulas-crimson dark:text-tulas-gold text-xs font-bold uppercase tracking-wider mb-3">
                {activeFacility.subtitle}
              </div>

              <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
                {activeFacility.title}
              </h4>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {activeFacility.description}
              </p>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeFacility.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA within card */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-tulas-crimson to-tulas-crimson-dark text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Guided Campus Visit</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-full text-slate-700 dark:text-slate-300 hover:text-tulas-crimson dark:hover:text-tulas-gold text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-tulas-crimson" />
                <span>Get Directions (GPS)</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-tulas-gold transition-colors"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>

              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white text-sm font-semibold mt-4 text-center">
                {activeFacility.title} • {activeFacility.subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
