import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import { INDIAN_STATES } from '../data/schoolData';

interface EnquiryFormProps {
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    otp: '',
    selectedClass: '',
    state: '',
    consent: true,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendOtp = () => {
    if (!formData.mobile || formData.mobile.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number first.');
      return;
    }
    setErrorMessage('');
    setOtpSent(true);
    // Simulate auto-filling or sending OTP
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, otp: '1234' }));
    }, 800);
  };

  const handleVerifyOtp = () => {
    if (formData.otp.trim().length >= 4) {
      setOtpVerified(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter the 4-digit verification code.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter student/parent full name.');
      return;
    }
    if (!formData.mobile || formData.mobile.length < 10) {
      setErrorMessage('Please enter a valid mobile number.');
      return;
    }
    if (!formData.selectedClass) {
      setErrorMessage('Please select the admission class.');
      return;
    }
    if (!formData.state) {
      setErrorMessage('Please select your state or location.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please accept the consent checkbox to proceed.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      const generatedRef = `TIS-2025-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#b90124', '#c09d59', '#60bab1', '#f59e0b'],
      });

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2500);
      }
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
          Application Received!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed mb-6">
          Thank you for choosing Tula’s International School. Our Senior Admissions Counselor will contact you on <strong>{formData.mobile}</strong> within 24 hours to schedule your campus tour.
        </p>
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 w-full max-w-sm">
          <span>Application Reference ID: </span>
          <span className="font-mono font-bold text-tulas-crimson dark:text-tulas-gold">
            {referenceId}
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Enter Student or Parent Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-tulas-crimson transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Email ID (Optional)
          </label>
          <input
            type="email"
            placeholder="Enter parent's email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-tulas-crimson transition-all"
          />
        </div>
      </div>

      {/* Mobile Number & OTP Verification */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
          Mobile Number (for admission SMS updates) *
        </label>
        <div className="flex gap-2">
          <select
            value={formData.countryCode}
            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
            className="w-20 px-2 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-xs font-semibold focus:outline-none"
          >
            <option value="+91">+91 (IN)</option>
            <option value="+971">+971 (UAE)</option>
            <option value="+977">+977 (NP)</option>
            <option value="+975">+975 (BT)</option>
            <option value="+1">+1 (US/CA)</option>
            <option value="+44">+44 (UK)</option>
          </select>

          <input
            type="tel"
            required
            maxLength={10}
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-tulas-crimson transition-all"
          />

          {!otpVerified && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="px-3.5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold transition-all whitespace-nowrap"
            >
              {otpSent ? 'Resend' : 'Send OTP'}
            </button>
          )}
        </div>
      </div>

      {/* OTP Input Field */}
      {otpSent && !otpVerified && (
        <div className="p-3 rounded-xl bg-tulas-gold/10 border border-tulas-gold/30 flex items-center gap-2">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter OTP (e.g. 1234)"
            value={formData.otp}
            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
            className="w-32 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-xs font-mono font-bold text-center focus:outline-none"
          />
          <button
            type="button"
            onClick={handleVerifyOtp}
            className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
          >
            Verify OTP
          </button>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            (Demo code auto-filled: 1234)
          </span>
        </div>
      )}

      {otpVerified && (
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>Mobile Number Verified Successfully</span>
        </div>
      )}

      {/* Class & State Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Applying for Class *
          </label>
          <select
            required
            value={formData.selectedClass}
            onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-tulas-crimson transition-all"
          >
            <option value="">Select Grade</option>
            <option value="Class IV">Class IV (Junior)</option>
            <option value="Class V">Class V (Junior)</option>
            <option value="Class VI">Class VI (Middle)</option>
            <option value="Class VII">Class VII (Middle)</option>
            <option value="Class VIII">Class VIII (Middle)</option>
            <option value="Class IX">Class IX (Secondary)</option>
            <option value="Class X">Class X (Secondary)</option>
            <option value="Class XI - Science">Class XI (Science - Medical / Non-Med)</option>
            <option value="Class XI - Commerce">Class XI (Commerce)</option>
            <option value="Class XI - Humanities">Class XI (Humanities / Arts)</option>
            <option value="Class XII">Class XII (Senior Secondary)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Current State / Region *
          </label>
          <select
            required
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-tulas-crimson transition-all"
          >
            <option value="">Select State</option>
            {INDIAN_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-2">
        <input
          id="tis-consent"
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 w-4 h-4 rounded text-tulas-crimson focus:ring-tulas-crimson border-slate-300 dark:border-slate-600"
        />
        <label htmlFor="tis-consent" className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 cursor-pointer leading-relaxed">
          I agree to receive communications regarding admission notifications, prospectus, and fee structure from Tula's International School, Dehradun.
        </label>
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        data-cursor-text="SUBMIT"
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-tulas-crimson via-tulas-crimson-dark to-tulas-crimson hover:from-tulas-crimson-dark hover:to-tulas-crimson text-white font-bold text-sm tracking-wide shadow-glow-crimson hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Processing Application...</span>
          </span>
        ) : (
          <>
            <span>Submit Admission Enquiry</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1.5 mt-2">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>Your data is confidential & protected under TIS Child Welfare & Privacy Policy.</span>
      </p>
    </form>
  );
};
