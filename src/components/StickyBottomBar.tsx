import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const StickyBottomBar: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <a
        href={`tel:${SCHOOL_INFO.phone}`}
        className="flex-1 py-3 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 text-tulas-crimson" />
        <span>Call Admissions</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-tulas-crimson to-tulas-crimson-dark text-white font-bold text-xs flex items-center justify-center gap-2 shadow-glow-crimson transition-all active:scale-95"
      >
        <FileText className="w-4 h-4 text-tulas-gold-light" />
        <span>Enquire Now</span>
      </button>
    </div>
  );
};
