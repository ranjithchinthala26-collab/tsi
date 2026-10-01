import React from 'react';
import { motion } from 'framer-motion';
import { Home, Shield, UtensilsCrossed, HeartPulse, Mountain, Moon, CheckCircle2 } from 'lucide-react';

export const BoardingLife: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const highlights = [
    {
      icon: <Home className="w-6 h-6 text-tulas-crimson" />,
      title: "Separate AC Hostels for Boys & Girls",
      desc: "Thoughtfully designed, spacious rooms with ergonomic study bays, central temperature control, and 1:12 Housemaster pastoral care.",
      tag: "Pastoral Care",
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-tulas-gold" />,
      title: "Farm-to-Table Nutrition",
      desc: "Wholesome, 100% vegetarian meals planned by child nutritionists. Fresh dairy, seasonal greens, and multi-cuisine themed dinners.",
      tag: "Nutritious Dining",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
      title: "24/7 Multi-Specialty Infirmary",
      desc: "Resident medical officers, ICU-equipped ambulance, routine health and dental screenings, and tie-ups with Dehradun super-specialty hospitals.",
      tag: "Medical Safety",
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Gated 24/7 Campus Security",
      desc: "Biometric perimeter checkpoints, comprehensive CCTV coverage, strict visitor verification, and female security guards in girls' hostels.",
      tag: "Zero Compromise",
    },
    {
      icon: <Mountain className="w-6 h-6 text-tulas-teal-dark dark:text-tulas-teal" />,
      title: "Himalayan Weekend Excursions",
      desc: "Supervised weekend outdoor treks to Mussoorie, rafting camps in Rishikesh, astronomical stargazing, and nature journaling.",
      tag: "Adventure & Life Skills",
    },
    {
      icon: <Moon className="w-6 h-6 text-indigo-500" />,
      title: "Restorative Digital Detox",
      desc: "Regulated screen time ensures sound sleep, deep face-to-face peer bonding, evening reading hours, and authentic lifelong friendships.",
      tag: "Digital Balance",
    },
  ];

  return (
    <section id="boarding" className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-tulas-teal/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tulas-crimson/10 border border-tulas-crimson/30 text-tulas-crimson dark:text-tulas-gold text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home Away From Home</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Boarding Life at <span className="text-tulas-crimson dark:text-tulas-gold">TIS Dehradun</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Boarding at TIS isn’t merely about staying in a hostel—it’s an empowering community experience where children learn self-reliance, empathy, and enduring camaraderie under loving pastoral care.
          </motion.p>
        </div>

        {/* 6 Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-1.5 text-xs font-semibold text-tulas-crimson dark:text-tulas-gold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Safety & Quality Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pastoral Quote Banner */}
        <div className="mt-14 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
              Have concerns about your child’s transition to boarding life?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Our Senior Housemasters and Admissions Counselors are available to speak with you personally, answer questions on hostel routines, room allocations, and special dietary needs.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="flex-shrink-0 px-6 py-3.5 rounded-full bg-tulas-crimson hover:bg-tulas-crimson-dark text-white font-bold text-xs sm:text-sm tracking-wide shadow-glow-crimson transition-all"
          >
            Speak to a Senior Housemaster
          </button>
        </div>

      </div>
    </section>
  );
};
