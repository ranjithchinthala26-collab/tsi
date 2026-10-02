import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, PhoneCall, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { EnquiryForm } from './EnquiryForm';

export const EnquirySection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-tulas-crimson/10 via-tulas-gold/10 to-tulas-teal/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-2xl grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Direct Contact & Location info */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-tulas-teal-subtle/30 to-tulas-teal-light/20 dark:from-slate-900 dark:to-slate-800/90 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800/80">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-1 sm:p-1.5 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center">
                  <img
                    src="/images/tis-logo.png"
                    alt="Tula's International School Crest"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white leading-tight">
                    Contact Us.
                  </h3>
                  <p className="text-xs text-tulas-crimson dark:text-tulas-gold font-semibold">
                    Admissions Office • Dehradun
                  </p>
                </div>
              </div>

              {/* Admissions Campus Image Card */}
              <div className="mb-6 rounded-2xl overflow-hidden aspect-[16/9] w-full relative shadow-md group border border-slate-200/80 dark:border-slate-700/80" data-cursor-text="VISIT">
                <img
                  src="/images/campus.jpg"
                  alt="Tula's International School Campus Grounds & Admissions Centre"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white/95">
                    Campus Visits & Counselor Interactions: Mon - Sat
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                We invite prospective parents and students to visit our campus, meet our faculty and housemasters, and experience life at The Modern Gurukul firsthand.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all shadow-sm group"
                >
                  <div className="p-2.5 rounded-xl bg-tulas-crimson/10 text-tulas-crimson flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Admissions Helpline
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-tulas-crimson dark:text-tulas-gold">
                      {SCHOOL_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all shadow-sm group"
                >
                  <div className="p-2.5 rounded-xl bg-tulas-gold/10 text-tulas-gold-dark dark:text-tulas-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Official Inquiries
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      {SCHOOL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={SCHOOL_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all shadow-sm group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Campus Address
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-normal block">
                      {SCHOOL_INFO.address}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white shadow-sm">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 flex-shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Reception Landlines
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {SCHOOL_INFO.landline}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-tulas-gold" />
                <span>Office: Mon - Sat (8 AM - 6 PM)</span>
              </span>
              <span className="text-emerald-500 font-semibold">Admissions Desk Open</span>
            </div>
          </div>

          {/* Right Column: High-Converting Admission Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-white/95 dark:bg-slate-900/95 flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-tulas-crimson/10 text-tulas-crimson dark:text-tulas-gold text-xs font-bold uppercase tracking-wider mb-2">
                Fast-Track Admissions 2027
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Enquire Now!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Fill out the quick form below to request a prospectus, fee schedule, or book an interaction session.
              </p>
            </div>

            <EnquiryForm />
          </div>

        </motion.div>

      </div>
    </section>
  );
};
