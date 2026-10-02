import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Sparkles, ExternalLink, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      e.preventDefault();

      if (targetId === 'sports') {
        window.dispatchEvent(new CustomEvent('tis-navigate-sports'));
        const sportsEl = document.getElementById('sports');
        if (sportsEl) {
          sportsEl.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', href);
        return;
      }

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  const navColumns = [
    {
      title: "Explore TIS",
      links: [
        { label: "About The Gurukul", href: "#about" },
        { label: "CBSE Academics", href: "#academics" },
        { label: "16+ Sports Arena", href: "#sports" },
        { label: "360° Virtual Campus", href: "#campus" },
        { label: "Residential Hostels", href: "#boarding" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { label: "Admission Criteria 2027", href: "#contact" },
        { label: "Junior School (Class IV-V)", href: "#academics" },
        { label: "Middle School (Class VI-VIII)", href: "#academics" },
        { label: "Secondary (Class IX-X)", href: "#academics" },
        { label: "Senior Secondary (Class XI-XII)", href: "#academics" },
      ],
    },
    {
      title: "Governance & Policies",
      links: [
        { label: "CBSE Mandatory Disclosure", href: "https://tis.edu.in/mandatory-disclosure", external: true },
        { label: "Child Welfare & Safety Policy", href: "#" },
        { label: "Health & Nutrition Standards", href: "#boarding" },
        { label: "Anti-Bullying & Pastoral Code", href: "#boarding" },
        { label: "Fee Schedule & Scholarship", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-tulas-gold/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tulas-crimson/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Banner */}
        <div className="pb-16 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="p-1.5 sm:p-2 rounded-2xl bg-white shadow-sm border border-white/20 flex items-center justify-center flex-shrink-0">
              <img
                src="/images/tis-logo.png"
                alt="Tula's International School Crest"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-tulas-gold">
                The Modern Gurukul • Established 2012
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                Tula's International School, Dehradun
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                CBSE-affiliated co-ed residential school under the aegis of Rishabh Educational Trust. Imparting education through seamless opportunities.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex sm:justify-end">
            <button
              onClick={onOpenEnquiry}
              data-cursor-text="APPLY"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-tulas-crimson via-tulas-crimson-dark to-tulas-crimson hover:scale-105 transition-all text-white font-bold text-sm tracking-wide shadow-glow-crimson flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-tulas-gold-light" />
              <span>Admissions Open 2027</span>
            </button>
          </div>
        </div>

        {/* 4 Column Navigation Grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Campus Headquarters
            </h4>
            <div className="text-xs text-slate-400 space-y-3 leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tulas-crimson flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tulas-gold flex-shrink-0" />
                <span>Admissions Helpline: <a href={`tel:${SCHOOL_INFO.phone}`} className="text-white hover:underline">{SCHOOL_INFO.phone}</a></span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tulas-teal flex-shrink-0" />
                <span>Landline Desk: <a href="tel:0135-2699444" className="text-white hover:underline">0135-2699444</a> / 666</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Email: <a href={`mailto:${SCHOOL_INFO.email}`} className="text-white hover:underline">{SCHOOL_INFO.email}</a></span>
              </p>
            </div>
          </div>

          {/* Links Columns */}
          {navColumns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleFooterLinkClick(e, link.href)}
                      className="hover:text-tulas-gold transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      {link.external && <ExternalLink className="w-3 h-3 text-slate-500" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright © {CURRENT_YEAR} Tula's International School, Dehradun. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-tulas-crimson fill-current" /> for Modern Excellence
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-tulas-gold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
