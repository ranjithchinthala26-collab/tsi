import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Globe2 } from 'lucide-react';

export const AwardsAccreditations: React.FC = () => {
  const rankings = [
    {
      rank: "#1",
      location: "In Dehradun",
      source: "Education Today",
      title: "Co-Educational Boarding School",
      badge: "Ranked No. 1",
    },
    {
      rank: "#1",
      location: "In Uttarakhand",
      source: "Education Today",
      title: "Holistic Residential Education",
      badge: "State Topper",
    },
    {
      rank: "#1",
      location: "In North India",
      source: "Outlook India",
      title: "Modern Boarding Infrastructure",
      badge: "Best Infrastructure",
    },
    {
      rank: "Top 5",
      location: "In India",
      source: "Education World",
      title: "All-India Co-Ed Residential Ranking",
      badge: "National Elite",
    },
  ];

  const globalPartners = [
    { name: "Trinity College Dublin", country: "Ireland / UK" },
    { name: "INSEEC School of Business", country: "France / Monaco" },
    { name: "IAYP (Duke of Edinburgh)", country: "United Kingdom" },
    { name: "Universidad de Salamanca", country: "Spain" },
    { name: "Universität Bern", country: "Switzerland" },
    { name: "Lions Club Youth Exchange", country: "Global" },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-tulas-crimson/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tulas-gold/20 border border-tulas-gold/40 text-tulas-gold text-xs font-bold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honours & Accreditations</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Nationally Recognized.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tulas-gold via-amber-200 to-tulas-gold">
              Globally Connected.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Consistently decorated by top independent education surveys, while sending graduates to esteemed universities around the globe.
          </p>
        </div>

        {/* 4 Ranking Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {rankings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-tulas-gold/50 transition-all duration-300 hover:scale-105 group backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-tulas-gold/20 text-tulas-gold text-[10px] font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
                <Award className="w-5 h-5 text-tulas-gold group-hover:rotate-12 transition-transform" />
              </div>

              <span className="font-display font-black text-4xl sm:text-5xl text-white block mb-1">
                {item.rank}
              </span>

              <h4 className="font-display font-bold text-lg text-tulas-gold">
                {item.location}
              </h4>

              <p className="text-xs text-slate-300 mt-2 font-medium">
                {item.title}
              </p>

              <span className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 block">
                Evaluated by {item.source}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Global University Alumni Network Strip */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-tulas-gold text-xs font-bold uppercase tracking-wider mb-1">
                <Globe2 className="w-4 h-4" />
                <span>Global University Pathways</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Where Our Alumni Study Next
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              TIS alumni earn admission to premier colleges worldwide, supported by our in-house international placement counselors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {globalPartners.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-tulas-gold/30 text-center transition-all"
              >
                <span className="font-display font-bold text-xs sm:text-sm text-white block">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {p.country}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
