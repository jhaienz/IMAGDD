# IMAGDD 2026 Website

Event website for **IMAGDD 2026** - Innovations in Multimedia, Animation, and Game Design Development.

## Features

- **Landing Page** - Event overview with hero section, key features, and event details
- **Gallery Page** - Photo gallery from IMAGDD 2025 with filtering capabilities
- **Participant Registration** - Complete registration form for attendees
- **Sponsor Registration** - Sponsorship tiers and application form for companies

## Tech Stack

- **Astro** - Static site framework
- **React** - Interactive components
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

```sh
# Install dependencies
npm install
# or
npx pnpm install
```

### Development

```sh
# Start the development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

```sh
# Build for production
npm run build
```

### Preview

```sh
# Preview the production build
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   └── imagdd-logo.png # Replace with actual IMAGDD logo
├── src/
│   ├── components/      # React & Astro components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── EventDescription.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── ParticipantRegistrationForm.tsx
│   │   └── SponsorshipForm.tsx
│   ├── layouts/
│   │   └── Layout.astro # Main layout wrapper
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── pages/           # Route pages
│   │   ├── index.astro  # Home page
│   │   ├── gallery.astro
│   │   ├── register.astro
│   │   └── sponsors.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Customization

### Adding Your Logo

Replace `/public/imagdd-logo.png` with your actual IMAGDD logo.

### Gallery Images

Update the `galleryImages` array in [`src/components/GalleryGrid.tsx`](src/components/GalleryGrid.tsx) with actual images from IMAGDD 2025.

### Event Details

Update event information in:
- [`src/components/Hero.tsx`](src/components/Hero.tsx) - Date, location, participant count
- [`src/components/EventDescription.tsx`](src/components/EventDescription.tsx) - Features and description
- [`src/components/Footer.tsx`](src/components/Footer.tsx) - Contact information

### Registration Forms

The forms currently log to console. To enable actual form submission:
1. Set up a backend API endpoint
2. Update the `handleSubmit` functions in:
   - [`src/components/ParticipantRegistrationForm.tsx`](src/components/ParticipantRegistrationForm.tsx)
   - [`src/components/SponsorshipForm.tsx`](src/components/SponsorshipForm.tsx)

## Pages

- `/` - Home page with event overview
- `/gallery` - IMAGDD 2025 photo gallery
- `/register` - Participant registration form
- `/sponsors` - Sponsorship information and application

## License

All rights reserved © 2026 IMAGDD
