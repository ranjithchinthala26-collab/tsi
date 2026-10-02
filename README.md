# 🏛️ Tula's International School (TIS) — Redesigned Modern Experience

> **The Modern Gurukul | Dehradun, India**  
> An animated, high-converting homepage redesign for **Tula's International School (TIS)** ([https://tis.edu.in/](https://tis.edu.in/)), retaining authentic branding and copy while elevating the digital experience into a cutting-edge, award-worthy web presence.

---

## 🌟 Live Demo & Repository
- **GitHub Repository**: [https://github.com/Ranjith-Developer/tulas-international-school](https://github.com/Ranjith-Developer/tulas-international-school) *(Replace with your GitHub repo URL)*
- **Live Deployment**: Deployable to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub Pages](https://pages.github.com) *(See deployment guide below)*
- **Loom Walkthrough**: [Link to Loom Video Walkthrough](#-loom-video-walkthrough-guide)

---

## 🎯 Task Objectives & Deliverables Met

| Criteria | Target | Implementation in This Project |
| :--- | :--- | :--- |
| **Core Framework** | React.js / Next.js / Vue.js | **React 19 + TypeScript + Vite** for ultra-fast HMR and optimized builds |
| **Styling** | Tailwind CSS / CSS Modules | **Tailwind CSS v3** with custom brand color palette (`#b90124`, `#c09d59`, `#60bab1`) |
| **Animations** | Framer Motion / GSAP | **Framer Motion** with custom cubic beziers, spring physics, and scroll viewports |
| **Standout Feature 1** | Custom Cursor | **Interactive Mouse-Follower Ring + Center Dot** with spring lerp, contextual badges (`VIEW`, `APPLY`, `TOUR`, `SPORTS`), difference blend-mode, and touch-device detection |
| **Standout Feature 2** | Scroll-Triggered Reveals | **Staggered Viewport Entrances** across all sections with animated counter hooks and animated doodle underlines |
| **Standout Feature 3** | Theme Switcher | **Animated Dark / Light Mode Toggle** ("Night Campus / Starlight Dehradun" vs "Himalayan Dawn") with persistent local storage |
| **Standout Feature 4** | Scroll Progress Bar | **Smooth Top Reading Progress Indicator** with multi-stop brand gradient and floating reading percentage badge |
| **Architecture (30%)** | Clean breakdown & zero unused vars | **Strict TypeScript compliance**, type-only imports, 100% clean builds, semantic HTML5 |
| **UX & Responsiveness (30%)** | Mobile-first & fluid frame rates | **60fps animations**, responsive breakpoints (`sm`, `md`, `lg`, `xl`), mobile drawer & sticky conversion bar |
| **Creativity (20%)** | Modern agency look & feel | **360° Virtual Campus Explorer**, interactive Grade & Curriculum selector, OTP verification simulation, and confetti celebration |

---

## 🚀 Key Features & Highlights

### 1. 🎨 Standout Feature: Interactive Custom Cursor
- Follows the user's cursor with fine-pointer detection (`window.matchMedia('(pointer: fine)')`), automatically disabled on mobile/touch screens.
- Utilizes Framer Motion `useSpring` and `useMotionValue` for natural damping and velocity.
- Contextual state machine:
  - Default: Sleek 36px ring with precise 6px amber dot.
  - Hovering links & buttons: Expands to 52px with crimson indicator.
  - Hovering cards (`data-cursor-text`): Morphologically expands to an 84px badge pill displaying dynamic cues like `TOUR`, `SPORTS`, `MENTOR`, `APPLY`.

### 2. 📊 Standout Feature: Smooth Scroll Progress Indicator
- Mounted at the top edge (`z-index: 9999`) with zero layout shift.
- Interpolates scroll progress through a triple-color gradient: `TIS Crimson (#b90124)` → `Golden Crest (#c09d59)` → `Himalayan Teal (#60bab1)`.
- Features an animated percentage badge that smoothly slides in once reading begins.

### 3. 🌓 Standout Feature: Animated Dark & Light Theme Switcher
- **Himalayan Dawn (Light)**: Clean off-whites (`#FAFAF9`), rich gold accents, and deep crimson contrast.
- **Dehradun Starlight (Dark)**: Deep obsidian (`#090D16`), glowing crimson accents, and warm golden typography.
- Uses `ThemeProvider` with `localStorage` persistence and system color preference detection.
- Icon transition features smooth 90° rotation and scale morphing between Sun and Moon.

### 4. 🎬 Standout Feature: Staggered Scroll-Triggered Reveals
- Viewport intersection observer triggering Framer Motion variants (`whileInView`, `viewport: { once: true, margin: '-50px' }`).
- Live numbers animated via an automated counter hook (`22 Acres`, `16+ Olympic Sports`, `6:1 Ratio`, `24x7 Medical Care`, `#1 Ranking`).
- Hand-drawn SVG doodle scribble path animations matching original TIS branding.

### 5. 🏫 Authentic Branding & Copy Retention
- **Founding Trust**: Rishabh Educational Trust (Est. 2012).
- **Iconic Motto**: *"LET'S DO it WITH TULAS"* & *"The Modern Gurukul"*.
- **Location**: Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand).
- **Olympic Mentors**: Sakshi Malik (Rio 2016 Olympic Medalist), Prakashi Tomar (Shooter Dadi), Abhishek Verma, Aditi Gopichand Swami, Vishesh Bhriguvanshi.
- **Official Helpline**: `+91-9837983791`, `info@tis.edu.in`.

### 6. 🏆 High-Converting UX & Lead Generation
- **Fast-Track Admission Enquiry Form**: Full state dropdown (all 28 Indian states + NRI), Class IV to XII selector, simulated SMS OTP verification, and celebratory confetti upon submission.
- **Global Quick Modal**: Any "Apply Now" button triggers an instantaneous glassmorphic modal.
- **Mobile Floating Bar**: Pinned bottom bar on smartphones offering one-tap calling (`+91-9837983791`) and enquiry popup.
- **Interactive 360° Campus Tour**: High-resolution gallery preview with zoom modal and Google Maps GPS navigation.
- **Curriculum & Gurukul Routine Explorer**: Detailed breakdown of Junior, Middle, Secondary, and Senior Secondary tracks alongside the daily 6:00 AM to 9:30 PM Gurukul routine.

---

## 🛠️ Tech Stack & Dependencies

- **Core**: React 19, TypeScript, Vite 8
- **Styling**: Tailwind CSS v3, PostCSS, Autoprefixer
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

---

## 📂 Project Architecture

```
tulas-international-school/
├── public/
│   ├── images/
│   │   ├── tis-logo.png               # Official approved TIS crest & logotype
│   │   ├── campus.jpg                 # Authentic green campus, turf pitch & buildings
│   │   ├── students.jpg               # TIS students in sports team jerseys
│   │   ├── sports.jpg                 # 50m outdoor archery arena
│   │   └── academics.jpg              # Optics & robotics science laboratory
│   └── tis-assets/                    # High-res facility & lifestyle photography
├── src/
│   ├── components/
│   │   ├── AwardsAccreditations.tsx   # #1 Rankings & Global University tie-ups
│   │   ├── BoardingLife.tsx           # AC Hostels, Organic Dining, 24x7 Health Care
│   │   ├── CelebrityMentors.tsx       # Olympic & National mentors (Sakshi Malik, etc.)
│   │   ├── CurriculumGradeExplorer.tsx# Class IV-XII pathways & Daily Timetable
│   │   ├── CustomCursor.tsx           # Standout Feature 1: Mouse follower ring + badge
│   │   ├── EnquiryForm.tsx            # Form with OTP simulation & Confetti
│   │   ├── EnquiryModal.tsx           # Instant conversion modal
│   │   ├── EnquirySection.tsx         # Contact HQ + Fast-Track Enquiry Form
│   │   ├── FAQSection.tsx             # Expandable accordion for parent queries
│   │   ├── Footer.tsx                 # Comprehensive footer & compliance links
│   │   ├── HeroSection.tsx            # High-impact hero with doodle & orbit cards
│   │   ├── LifeAtTIS.tsx              # Life Beyond Classroom: 4 pillars + sports marquee
│   │   ├── Navbar.tsx                 # Sticky blur nav, official logo & mobile drawer
│   │   ├── ScrollProgressBar.tsx      # Standout Feature 4: Top reading progress
│   │   ├── SportsShowcase.tsx         # 16+ Sports filterable by category
│   │   ├── StatsRibbon.tsx            # Standout Feature 2: Scroll counter animation
│   │   ├── StickyBottomBar.tsx        # Mobile conversion bar
│   │   ├── Testimonials.tsx           # 450+ Google reviews slider
│   │   ├── ThemeToggle.tsx            # Standout Feature 3: Animated dark/light toggle
│   │   ├── VirtualTourSection.tsx     # 360° Campus Explorer with Lightbox
│   │   └── WhyTulas.tsx               # 4 Pillars & Traditional vs TIS comparison
│   ├── context/
│   │   └── ThemeContext.tsx           # Dark/Light mode state management
│   ├── data/
│   │   └── schoolData.ts              # Authentic TIS copy, facilities, sports & stats
│   ├── types/
│   │   └── index.ts                   # Strict TypeScript definitions
│   ├── App.tsx                        # Main application orchestrator
│   ├── index.css                      # Tailwind base, utilities & scrollbars
│   └── main.tsx                       # React DOM entrypoint
├── tailwind.config.js                 # Custom colors, keyframes & fonts
├── vite.config.ts                     # Optimized chunk splitting
└── package.json
```

---

## 💻 Local Setup & Development

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ranjith-Developer/tulas-international-school.git
   cd tulas-international-school
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Run code quality linter (0 errors, 0 warnings)**:
   ```bash
   npm run lint
   ```

6. **Preview production build locally**:
   ```bash
   npm run preview
   ```

7. **Execute automated 5-viewport responsiveness suite**:
   ```bash
   node test_viewports.js
   ```
   *Verifies Desktop (1440x900), Laptop (1366x768), Tablet (768x1024), Mobile (390x844), and Small Mobile (360x800) with zero horizontal overflow.*

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `tulas-international-school` repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**. Your site will be live in ~30 seconds!

### Deploy to Netlify
1. Push your code to GitHub.
2. Log in to [Netlify](https://netlify.com) and click **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/tulas-international-school/'`.
2. Run `npm run build`.
3. Use `gh-pages` or GitHub Actions to deploy the `dist/` directory.

---

## 📹 Loom Video Walkthrough Guide

When recording your 3-5 minute Loom video walkthrough, follow this structured outline:

1. **Introduction (30s)**:
   - Introduce yourself and the assignment: Redesigning TIS (Tula's International School, Dehradun).
   - State your tech stack: React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.
2. **Hero & First Impressions (45s)**:
   - Highlight retention of authentic copy (*"LET'S DO it WITH TULAS"*, *"The Modern Gurukul"*).
   - Demonstrate the hand-drawn doodle SVG animation and floating activity orbit cards.
   - Point out the Admissions Helpline and Live Announcement banner.
3. **Standout Features Demonstration (90s)**:
   - **Custom Cursor**: Move over links, cards, and buttons to show dynamic text badges (`TOUR`, `SPORTS`, `APPLY`). Show how it disappears seamlessly on mobile/touch screens.
   - **Scroll Progress Bar**: Scroll through the page and show the smooth multi-stop gradient bar and percentage indicator pill.
   - **Theme Switcher**: Click the animated Sun/Moon toggle to show the transition between "Himalayan Dawn" and "Dehradun Starlight" modes.
   - **Scroll Reveals**: Show the counter animations in the Stats Ribbon (22 Acres, 16+ Sports, 6:1 Ratio) and staggered card entrance animations.
4. **Interactive Features & Conversion Optimization (60s)**:
   - Walk through the **Interactive 360° Campus Tour** with lightbox zoom.
   - Filter sports in the **16+ Sports Arena** (Olympic, Outdoor, Equestrian).
   - Toggle between **Four Pillars** and the **TIS vs Traditional Schooling comparison matrix**.
   - Fill out the **Admissions Enquiry Form**, trigger OTP verification, and show the confetti celebration!
   - Demonstrate the **Sticky Mobile Conversion Bar** by toggling responsive mobile view.
5. **Code Architecture & Clean Standards (30s)**:
   - Open the codebase and highlight: clean modular components, strict TypeScript types, 0 unused variables/dependencies, and optimized Vite bundle splitting.
6. **Conclusion**:
   - Thank the review team for their time.

---

## 📄 License & Attribution
- Designed & Developed for the Frontend Developer Assignment for **Tula's International School (TIS)**.
- Original copy, brand marks, and campus details property of [Tula's International School](https://tis.edu.in/) / Rishabh Educational Trust.
