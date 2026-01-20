# MediCare Diagnostic Center Website

A comprehensive, professional medical diagnostic center website built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## Features

### ✅ Complete Multi-Page Website
- **10 Fully Functional Pages**:
  1. Home - Hero, services preview, check-up packages, doctors, testimonials, stats
  2. About Us - Company story, mission, values, timeline, certifications
  3. Services - Service categories with detailed descriptions
  4. Service Detail - Individual service pages with comprehensive information
  5. Doctors - Doctor profiles and expertise
  6. Doctor Detail - Detailed doctor information and qualifications
  7. Check-ups - Health screening packages with pricing
  8. Prices - Complete pricing list with search and filter
  9. Blog - Health articles and news
  10. Blog Detail - Full article pages with sidebar
  11. Contact - Appointment booking form with location information
  12. FAQ - Accordion-style frequently asked questions
  13. 404 - Custom not found page

### 🎨 Professional Design
- **Medical Blue/Teal Color Palette**
- Clean, modern, and trustworthy aesthetic
- Soft shadows and rounded cards
- Gradient accents throughout
- Premium medical feel

### ✨ Smooth Animations
- **Motion (Framer Motion)** powered animations:
  - Scroll-triggered fade-in and slide-up effects
  - Hover animations on cards and buttons
  - Page transitions
  - Accordion smooth open/close
  - Modal animations
  - Loading and skeleton states
  - Floating elements
  - Rotating and pulsing backgrounds

### 📱 Fully Responsive
- Desktop, tablet, and mobile optimized
- Responsive navigation with mobile menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### 🔧 Technical Features
- **React Router** for navigation
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- Reusable component architecture
- Clean code structure
- SEO-friendly markup

### 🎯 Key Components

#### Shared Components
- `Navbar` - Sticky header with mobile menu
- `Footer` - Comprehensive footer with links and contact info
- `AnimatedSection` - Reusable scroll animation wrapper

#### Page Components
All pages are self-contained in `/pages` directory with proper routing

### 📊 Mock Data Ready
- All pages include mock data structures
- Ready for backend API integration
- Consistent data formats
- Realistic content examples

## Pages Overview

### 1. Home (`/`)
- Hero section with animated elements
- Services preview cards
- Health check-up packages
- Featured doctors
- Why choose us section
- Statistics counter
- Patient testimonials
- Call-to-action sections

### 2. About Us (`/about`)
- Company story and history
- Mission and vision statements
- Core values
- Timeline of milestones
- Certifications and accreditations

### 3. Services (`/services`)
- 8 service categories
- Service cards with icons
- Features and benefits
- Links to detailed pages

### 4. Service Detail (`/services/:id`)
- Comprehensive service information
- Available tests list
- Process steps
- Turnaround times
- Preparation requirements

### 5. Doctors (`/doctors`)
- Doctor grid with profiles
- Specialties and experience
- Education and certifications
- Links to detailed profiles

### 6. Doctor Detail (`/doctors/:id`)
- Full doctor biography
- Education and certifications
- Areas of expertise
- Awards and recognition
- Languages spoken
- Appointment booking CTA

### 7. Check-ups (`/checkups`)
- 6 comprehensive health packages
- Package comparison
- Included tests
- Pricing and duration
- Benefits overview
- Booking options

### 8. Prices (`/prices`)
- Complete pricing list
- Search functionality
- Category filtering
- Turnaround times
- Important notes
- Contact CTA

### 9. Blog (`/blog`)
- Featured article showcase
- Blog post grid
- Category tags
- Read time estimates
- Newsletter subscription

### 10. Blog Detail (`/blog/:id`)
- Full article content
- Author information
- Share buttons
- Related articles
- Sidebar with CTA

### 11. Contact (`/contact`)
- Appointment booking form
- Contact information
- Multiple locations
- Working hours
- Interactive map placeholder
- Quick info cards

### 12. FAQ (`/faq`)
- Searchable questions
- 5 categories
- Accordion-style answers
- Smooth animations
- Contact CTA

### 13. 404 (`/*`)
- Custom error page
- Animated elements
- Quick links
- Navigation options
- Medical-themed design

## Color Palette

### Primary Colors
- Cyan: `#06b6d4` to `#0891b2`
- Teal: `#14b8a6` to `#0d9488`

### Gradients
- Primary: `from-cyan-600 to-teal-600`
- Backgrounds: `from-cyan-50 via-white to-teal-50`

### Neutral Colors
- White: `#ffffff`
- Gray shades: `50`, `100`, `200`, `600`, `700`, `900`

## Animation Types

1. **Scroll Animations**: Fade-in and slide-up on scroll
2. **Hover Effects**: Scale, shadow, and color transitions
3. **Loading States**: Skeleton screens
4. **Modal Animations**: Smooth open/close
5. **Background Animations**: Rotating gradients
6. **Floating Elements**: Gentle up-down motion
7. **Accordion**: Smooth expand/collapse

## Customization

### Changing Company Name
Update "MediCare" references in:
- `/components/Navbar.tsx`
- `/components/Footer.tsx`
- All page titles and content

### Modifying Colors
Update gradient classes throughout:
- `from-cyan-600 to-teal-600`
- `bg-cyan-50`, `bg-teal-100`, etc.

### Adding Real Data
Replace mock data arrays in each page component with API calls

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized animations (hardware accelerated)
- Lazy loading ready
- Minimal re-renders
- Efficient routing

---

Built with ❤️ for MediCare Diagnostic Center
