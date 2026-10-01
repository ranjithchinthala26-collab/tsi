import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracker for active nav state
      const sections = ['about', 'academics', 'sports', 'campus', 'boarding', 'mentors', 'reviews', 'faqs'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About TIS', href: '#about', id: 'about' },
    { label: 'Academics', href: '#academics', id: 'academics' },
    { label: '16+ Sports', href: '#sports', id: 'sports' },
    { label: '360° Campus', href: '#campus', id: 'campus' },
    { label: 'Boarding Life', href: '#boarding', id: 'boarding' },
    { label: 'Mentors', href: '#mentors', id: 'mentors' },
    { label: 'Testimonials', href: '#reviews', id: 'reviews' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Admissions Announcement Bar */}
      <div className={`w-full bg-gradient-to-r from-tulas-crimson via-tulas-crimson-dark to-tulas-crimson text-white text-xs py-2 px-4 transition-all duration-300 ${
        isScrolled ? '-mt-10 opacity-0 pointer-events-none' : 'mt-0 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-tulas-gold-light animate-pulse" />
              Admissions Open 2025-26
            </span>
            <span className="hidden md:inline text-white/90">
              CBSE Co-Ed Boarding School (Class IV to XII) | Dehradun
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 font-medium hover:text-tulas-gold-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-tulas-gold-light" />
              <span className="hidden sm:inline">Admissions Helpline:</span>
              <span className="font-semibold">{SCHOOL_INFO.phone}</span>
            </a>

            <a
              href="#campus"
              className="hidden lg:flex items-center gap-1 text-white/90 hover:text-white underline underline-offset-2 transition-colors"
            >
              Virtual Tour
            </a>

            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-0.5 rounded bg-tulas-gold hover:bg-tulas-gold-light text-slate-900 font-bold transition-all transform hover:scale-105 shadow-sm text-[11px]"
            >
              Quick Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-slate-200/50 dark:border-slate-800/80 shadow-md py-3'
          : 'bg-white/80 dark:bg-[#090D16]/80 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Title */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            data-cursor-text="HOME"
          >
            <div className="relative">
              <img
                src={SCHOOL_INFO.logo}
                alt="Tula's International School Crest"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                TULA'S
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-tulas-crimson dark:text-tulas-gold uppercase leading-tight mt-0.5">
                International School
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-400 font-medium tracking-normal hidden sm:inline">
                The Modern Gurukul • Dehradun
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  data-cursor-text={link.label.toUpperCase()}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-tulas-crimson dark:text-tulas-gold bg-tulas-crimson/5 dark:bg-tulas-gold/10'
                      : 'text-slate-700 dark:text-slate-300 hover:text-tulas-crimson dark:hover:text-tulas-gold hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-3 right-3 h-[2px] bg-tulas-crimson dark:bg-tulas-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Apply CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenEnquiry}
              data-cursor-text="APPLY"
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide text-white bg-gradient-to-r from-tulas-crimson via-tulas-crimson-dark to-tulas-crimson shadow-glow-crimson hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Shimmer sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all pointer-events-none" />
              <span>Apply for 2025-26</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white/95 dark:bg-[#090D16]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-tulas-crimson dark:text-tulas-gold opacity-60" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-tulas-crimson" />
                  <span>Call Admissions: {SCHOOL_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 rounded-xl bg-tulas-crimson text-white font-bold text-sm text-center shadow-lg shadow-tulas-crimson/30"
                >
                  Apply Now • Admissions 2025-26
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
