# Implementation Spec: Career Engineered Portfolio – Home Page

**Version:** 1.0  
**Date:** February 24, 2026  
**Status:** Active Development

---

## Design Rules

### Color Palette (Hex Codes)
- **Background (Primary):** `#ffffff`
- **Text (Primary):** `#0f1720`
- **Text (Muted):** `#57606a`
- **Accent (Primary):** `#1f3cff`
- **Accent (Strong/Hover):** `#0f25b8`

### Typography
- **Font Family (System Stack):** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif`
- **H1 (Hero):** 44px @ desktop, 36px @ 900px, 28px @ 480px | Weight: 700
- **H2 (Section Titles):** 28px | Weight: 700
- **H3 (Card Titles):** Inherits from body | Weight: 700
- **Body/Lede:** 18px (lede) | Weight: 400 | Line-height: 1.5
- **Button Text:** Weight: 600–700

### Spacing & Dimensions
- **Container Max-width:** 1100px
- **Padding (Container):** 20px @ desktop, 16px @ mobile
- **Border Radius (Default):** 12px
- **Border Radius (Cards):** 16px
- **Border Radius (Buttons):** 10px

### Interactions
- **Button Hover Transform:** translateY(-3px)
- **Card Hover Transform:** translateY(-8px)
- **Transition Timing:** 0.18s–0.22s ease
- **Box Shadows:** Used on buttons and cards for depth

---

## Content Model

The home page consists of five (5) primary sections:

### 1. **Site Header (Navigation)**
- **Brand Link:** "Career Engineered" (sticky, top: 0)
- **Navigation Links:**
  - Case Studies (#case-studies)
  - About (#about)
  - Skills (#skills)
  - Contact (#contact)
  - Resume (download link to resume.pdf)
- **Mobile Toggle:** Hamburger menu (display: none @ 901px+)
- **Accessibility:** Skip-link to #main content

### 2. **Hero Section**
- **H1 Headline:** "Mitchell Blancas"
- **Role Subtitle:** "NJIT UX/UI Designer"
- **Lede Copy:** "I create intuitive digital experiences focused on clarity, accessibility, and measurable outcomes."
- **CTA Buttons:**
  - Primary: "View Case Studies" → #case-studies
  - Secondary: "Download Resume" → resume.pdf download
- **Background:** Linear gradient (accent color @ 6% opacity)

### 3. **Case Studies Section** (#case-studies)
- **Section Title:** "Case Studies"
- **Card Grid:** 3 cards in a flex container (flex-wrap enabled)
- **Card Content:**
  1. Vaccination Records UX Redesign
  2. Loan Calculator Optimization
  3. System Flow Visualization
- **Card Structure:** Title (h3) + description (p)
- **Card Dimensions:** 300px width @ desktop

### 4. **About Section** (#about)
- **Section Title:** "About Me"
- **Copy:** Single paragraph describing design philosophy and process

### 5. **Skills Section** (#skills)
- **Section Title:** "Skills"
- **Skill List:**
  - UX Research
  - Wireframing & Prototyping
  - User Flows & Interaction Design
  - UI Visual Design
  - Usability Testing
  - HTML & CSS
- **Display:** Pill-style badges in flexbox (flex-wrap: wrap)
- **Styling:** Light gray background (#f7f9fc), rounded corners (999px)

### 6. **Contact Section** (#contact)
- **Section Title:** "Contact"
- **Contact Info:** Email address (mitchellwhites97@gmail.com)

### 7. **Footer**
- **Copyright Notice:** "© 2026 Career Engineered Portfolio"

---

## Non-Goals

The following items are explicitly **OUT OF SCOPE** for the home page and must not be implemented:

- ❌ Backend functionality (no forms, databases, or server-side processing)
- ❌ Complex animations (e.g., parallax, scroll-triggered reveals, lottie animations)
- ❌ Third-party integrations (e.g., analytics, chat widgets, calendars)
- ❌ Dark mode toggle or theme switching
- ❌ Multi-language support or i18n
- ❌ Blog or news section
- ❌ User accounts or authentication
- ❌ Testimonials or reviews carousel
- ❌ Video backgrounds or media players
- ❌ Infinite scroll or pagination
- ❌ Advanced state management or frameworks (Vue, React, etc.)

---

## Acceptance Criteria

### Home Page "Finished" Checklist

#### **Visual & Design**
- [ ] All six sections render correctly on desktop (1100px+)
- [ ] All sections are mobile responsive at breakpoints: 900px, 480px
- [ ] Hero section includes linear gradient background
- [ ] Cards display with proper spacing and shadows
- [ ] All text is aligned, readable, and accessible (WCAG AA minimum)
- [ ] All hex colors match the design rules (no deviations)
- [ ] All typography sizes and weights match spec

#### **Navigation & Functionality**
- [ ] Sticky header remains at top on scroll
- [ ] All navigation links scroll smoothly to anchor sections
- [ ] Mobile menu toggle (hamburger) works on devices ≤ 900px
- [ ] Mobile menu closes when a link is clicked
- [ ] Resume download link works and downloads file
- [ ] Skip-link is hidden but accessible on focus

#### **Content & Copy**
- [ ] Hero headline and role subtitle are visible above fold
- [ ] CTA buttons are visible without scrolling
- [ ] All section titles are present and styled correctly
- [ ] Case study cards display all three projects
- [ ] About section has complete copy
- [ ] Skills section displays all six skills
- [ ] Contact section has email address
- [ ] Footer with copyright notice is visible

#### **SEO & Accessibility**
- [ ] Page title is "Career Engineered Portfolio | NJIT UX/UI Designer"
- [ ] Meta description is present and accurate
- [ ] Viewport meta tag is set for mobile responsiveness
- [ ] Keywords meta tag includes NYC/NJ UX terms
- [ ] All interactive elements are keyboard navigable (Tab order)
- [ ] Links have sufficient contrast (WCAG AA)
- [ ] Navigation has `aria-label="Main navigation"`
- [ ] Menu toggle has `aria-expanded` attribute
- [ ] Form-free contact section is semantic HTML

#### **Performance & Code Quality**
- [ ] Page loads in < 2 seconds
- [ ] CSS is minified and organized
- [ ] JavaScript is minimal and defer-loaded
- [ ] No console errors or warnings
- [ ] Mobile-first CSS approach (media queries for larger screens)
- [ ] Code is clean and follows conventions

#### **Cross-Browser & Device Testing**
- [ ] Works on Chrome, Firefox, Safari, Edge (desktop)
- [ ] Works on mobile Safari (iOS) and Chrome (Android)
- [ ] Responsive layout works at 320px width (mobile)
- [ ] No broken images or missing assets

---

## Implementation Notes

- **Smooth Scroll Behavior:** Native scroll + JavaScript fallback for anchor links
- **Mobile Menu:** Toggles via button; closes on link click
- **Card Hovers:** Transform + shadow on desktop; removed on mobile (touch-first)
- **Deployment Target:** GitHub Pages (static HTML/CSS/JS only)
