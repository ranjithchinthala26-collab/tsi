import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsRibbon } from './components/StatsRibbon';
import { WhyTulas } from './components/WhyTulas';
import { VirtualTourSection } from './components/VirtualTourSection';
import { SportsShowcase } from './components/SportsShowcase';
import { CurriculumGradeExplorer } from './components/CurriculumGradeExplorer';
import { CelebrityMentors } from './components/CelebrityMentors';
import { BoardingLife } from './components/BoardingLife';
import { AwardsAccreditations } from './components/AwardsAccreditations';
import { Testimonials } from './components/Testimonials';
import { EnquirySection } from './components/EnquirySection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { EnquiryModal } from './components/EnquiryModal';

export const AppContent: React.FC = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  const handleScrollToTour = () => {
    const campusEl = document.getElementById('campus');
    if (campusEl) {
      campusEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF9] dark:bg-[#090D16] text-[#1C1C1C] dark:text-[#F1F5F9] transition-colors duration-300 selection:bg-tulas-crimson selection:text-white">
      {/* 1. Custom Interactive Cursor (Standout Feature 1) */}
      <CustomCursor />

      {/* 2. Top Scroll Progress Bar (Standout Feature 2) */}
      <ScrollProgressBar />

      {/* 3. Navigation Header with Theme Switcher (Standout Feature 3) */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* 4. Hero Section with Animated Reveal & Scribble Underlines */}
      <main>
        <HeroSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenVirtualTour={handleScrollToTour}
        />

        {/* 5. Key Statistics Ribbon with Counter Animation */}
        <StatsRibbon />

        {/* 6. Why TIS / The Modern Gurukul Advantage */}
        <WhyTulas onOpenEnquiry={handleOpenEnquiry} />

        {/* 7. Interactive 360° Campus Tour & Facilities Explorer */}
        <VirtualTourSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. 16+ Olympic & Modern Sports Showcase */}
        <SportsShowcase onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Tailored Academic Pathways (Class IV-XII) & Gurukul Daily Routine */}
        <CurriculumGradeExplorer onOpenEnquiry={handleOpenEnquiry} />

        {/* 10. Celebrity Mentors & Dignitaries on Campus */}
        <CelebrityMentors />

        {/* 11. Boarding & Residential Life */}
        <BoardingLife onOpenEnquiry={handleOpenEnquiry} />

        {/* 12. Awards, Rankings & Global University Placements */}
        <AwardsAccreditations />

        {/* 13. Parent Testimonials & Google Reviews */}
        <Testimonials />

        {/* 14. Admissions Enquiry & Campus Contact Section */}
        <EnquirySection />

        {/* 15. Frequently Asked Questions Accordion */}
        <FAQSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* 16. Comprehensive Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* 17. High-Converting Mobile Bottom Bar */}
      <StickyBottomBar onOpenEnquiry={handleOpenEnquiry} />

      {/* 18. Quick Enquiry Modal Popup */}
      <EnquiryModal isOpen={enquiryModalOpen} onClose={handleCloseEnquiry} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
