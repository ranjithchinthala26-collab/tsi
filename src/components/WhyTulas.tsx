import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Flame, Heart, Globe, CheckCircle2, XCircle, ArrowRight, Compass } from 'lucide-react';

export const WhyTulas: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'comparison'>('pillars');

  const pillars = [
    {
      id: 'mind',
      title: 'Mind: Academic Rigour',
      subtitle: 'Cognitive Mastery & Critical Thought',
      icon: <Brain className="w-6 h-6 text-tulas-crimson" />,
      color: 'from-rose-500/10 to-tulas-crimson/20',
      border: 'hover:border-tulas-crimson',
      points: [
        'Strict 6:1 student-to-teacher mentorship ratio',
        'State-of-the-art Robotics, AI, Physics & Biotech laboratories',
        'Integrated competitive coaching for JEE, NEET, CLAT & CUET',
        '100% CBSE Board pass rate with distinctions year-after-year',
      ],
      quote: '“We feel supported in what we do and nudged further to do more.”',
    },
    {
      id: 'body',
      title: 'Body: Olympic Athleticism',
      subtitle: 'Sports as the Core Foundation',
      icon: <Flame className="w-6 h-6 text-tulas-gold" />,
      color: 'from-amber-500/10 to-tulas-gold/20',
      border: 'hover:border-tulas-gold',
      points: [
        '16+ Olympic and modern sports disciplines on campus',
        'World-class sporting facilities with certified trainers',
        'Equestrian arena, 10m electronic shooting range, half-Olympic pool',
        'Daily morning yoga, surya namaskar, and aerobic conditioning',
      ],
      quote: '“Sports is not just a facility at TIS—it’s the cornerstone of character.”',
    },
    {
      id: 'soul',
      title: 'Soul: The Gurukul Values',
      subtitle: 'Character, Empathy & Mindfulness',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      color: 'from-pink-500/10 to-rose-500/20',
      border: 'hover:border-rose-400',
      points: [
        'Ancient Indian ethos blended with modern forward-thinking mindset',
        'Pastoral boarding care with dedicated Housemasters & House Mothers',
        'Pure vegetarian and organic, balanced paediatric nutrition',
        'Cultural arts: Kathak, Indian Classical Music, Pottery, and Theatre',
      ],
      quote: '“When you choose a school that chooses you, it becomes a place to belong.”',
    },
    {
      id: 'global',
      title: 'Global: Future Leadership',
      subtitle: 'Shaping Conscientious Global Citizens',
      icon: <Globe className="w-6 h-6 text-tulas-teal-dark dark:text-tulas-teal" />,
      color: 'from-teal-500/10 to-tulas-teal/20',
      border: 'hover:border-tulas-teal',
      points: [
        'Global Model United Nations (MUN) and international delegations',
        'Foreign language fluency: French, German, and Sanskrit',
        'Alumni admissions in Oxford, Trinity, Manchester, and Ivy League',
        'Environmental stewardship & community outreach in Doon Valley',
      ],
      quote: '“At Tulas, learning feels like an adventure where students shape their futures.”',
    },
  ];

  const comparisonData = [
    {
      aspect: 'Student Attention',
      traditional: 'Crowded 40:1 classroom ratio; quiet students get overlooked.',
      tulas: 'Bespoke 6:1 student-to-teacher ratio; every child receives individual mentorship.',
    },
    {
      aspect: 'Sports & Wellness',
      traditional: '1 weekly physical education period on a concrete playground.',
      tulas: 'Daily 2-hour training in 16+ Olympic sports with certified national champions.',
    },
    {
      aspect: 'Living Environment',
      traditional: 'Exhausting daily traffic commute in congested, polluted cities.',
      tulas: '22-acre lush green pollution-free Himalayan foothill sanctuary in Dehradun.',
    },
    {
      aspect: 'Pastoral Care & Values',
      traditional: 'Purely transactional exam-focused cramming without moral grounding.',
      tulas: 'Modern Gurukul system fostering empathy, self-discipline, and 24/7 boarding care.',
    },
    {
      aspect: 'Health & Nutrition',
      traditional: 'Unregulated tiffins and junk canteen snacks.',
      tulas: 'Nutritionist-curated wholesome diet, pure dairy, plus 24/7 on-campus infirmary.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-tulas-crimson/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-tulas-gold/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tulas-gold/10 border border-tulas-gold/30 text-tulas-gold-dark dark:text-tulas-gold text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>The Modern Gurukul Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 dark:text-white"
          >
            Why Choose <span className="text-tulas-crimson dark:text-tulas-gold">Tula's International?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Established in 2012 by <strong>Rishabh Educational Trust</strong>, TIS was envisioned to bridge ancient wisdom with modern global excellence. We believe in providing <em>seamless opportunities</em> for every child to excel in mind, body, and character.
          </motion.p>

          {/* About TIS Visual Showcase Banner (Framed with object-top so faces are fully visible) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 group aspect-[16/9] sm:aspect-[21/10] max-h-[440px] w-full"
            data-cursor-text="AWARDS"
          >
            <img
              src="/images/about.jpg"
              alt="Tula's International School Ranked #1 Residential School Award"
              className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-tulas-gold text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-md">
                The Modern Gurukul • Dehradun
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white font-bold text-xs tracking-wide">
                Ranked #1 Boarding School in Uttarakhand • Golden Star Award
              </span>
            </div>
          </motion.div>

          {/* Tab Switcher: Pillars vs Comparison */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'pillars'
                  ? 'bg-white dark:bg-slate-900 text-tulas-crimson dark:text-tulas-gold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Four Pillars of Excellence
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'comparison'
                  ? 'bg-white dark:bg-slate-900 text-tulas-crimson dark:text-tulas-gold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              TIS vs Traditional Schooling
            </button>
          </div>
        </div>

        {/* Tab 1: Four Pillars Cards with Staggered Reveals */}
        {activeTab === 'pillars' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`glass-card rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 hover:shadow-2xl ${pillar.border} group`}
                data-cursor-text="PILLAR"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${pillar.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-tulas-crimson dark:text-tulas-gold mb-5">
                  {pillar.subtitle}
                </p>

                <ul className="space-y-3 mb-6">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 italic text-xs text-slate-500 dark:text-slate-400">
                  {pillar.quote}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Tab 2: Comparison Table Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="p-6 sm:p-8 bg-gradient-to-r from-tulas-crimson/10 via-tulas-gold/10 to-transparent border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                How TIS Redefines Residential Education
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                A comparison between conventional day schooling and the transformative Tulas boarding experience.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <th className="p-4 sm:p-6 font-bold text-slate-900 dark:text-white w-1/4">Educational Aspect</th>
                    <th className="p-4 sm:p-6 font-bold text-slate-500 dark:text-slate-400 w-3/8">Traditional Day Schooling</th>
                    <th className="p-4 sm:p-6 font-bold text-tulas-crimson dark:text-tulas-gold w-3/8 bg-tulas-crimson/5 dark:bg-tulas-gold/5">
                      TIS The Modern Gurukul
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {comparisonData.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-slate-800 dark:text-slate-200 align-top">
                        {row.aspect}
                      </td>
                      <td className="p-4 sm:p-6 text-slate-600 dark:text-slate-400 align-top">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-6 text-slate-800 dark:text-slate-100 font-medium bg-tulas-crimson/5 dark:bg-tulas-gold/5 align-top">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{row.tulas}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                Ready to provide your child with an unfair advantage in life?
              </span>
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-2.5 rounded-full bg-tulas-crimson hover:bg-tulas-crimson-dark text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
              >
                <span>Schedule a Campus Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
