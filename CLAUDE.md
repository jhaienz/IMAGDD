# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```sh
# Install dependencies (uses pnpm)
pnpm install

# Start dev server at http://localhost:4321
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Architecture Overview

### Framework Stack
- **Astro 5** - Static site framework with island architecture
- **React 19** - Interactive components (hydrated with `client:load` directive)
- **Tailwind CSS v4** - Styling via Vite plugin
- **TypeScript** - Strict mode enabled
- **shadcn/ui** - UI component library adapted for Astro + React

### Key Patterns

#### Astro + React Integration
React components must use the `client:load` directive in Astro files to enable hydration:

```astro
---
import MyComponent from '../components/MyComponent';
---

<MyComponent client:load />
```

#### Path Aliases
TypeScript is configured with `@/*` alias pointing to `src/*`:

```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

#### Brand Styling
The site uses GDAP's yellow/gold and red branding inspired by the IMAGDD 2026 poster:
- Primary gradient: `from-yellow-400 to-amber-500` (vibrant yellow to gold)
- Hero background: `from-yellow-400 via-yellow-300 to-amber-400`
- Primary accent: Red (`text-red-600`, `bg-red-600`) for CTAs and important text
- Secondary accent: Green (`text-green-600`) for variety
- Focus rings: `focus-visible:ring-red-600`
- Maintain this visual identity when adding new components

#### shadcn/ui Components
UI components in `src/components/ui/` use:
- `class-variance-authority` for variant management
- `cn()` utility from `@/lib/utils` for className merging
- Custom brand colors instead of shadcn defaults

### Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (Button, Input, Card, etc.)
│   ├── *.tsx            # React components for page sections
│   └── *.astro          # Astro-specific components
├── layouts/
│   └── Layout.astro     # Base HTML wrapper with metadata
├── lib/
│   └── utils.ts         # cn() utility for className merging
├── pages/               # File-based routing
│   ├── index.astro      # Home page
│   ├── gallery.astro
│   ├── register.astro
│   └── sponsors.astro
└── styles/
    └── global.css       # Global Tailwind styles
```

### Configuration Files

- **astro.config.mjs**: Tailwind v4 via Vite plugin, React integration
- **tsconfig.json**: Strict mode, `@/*` path alias to `src/*`
- **package.json**: Uses pnpm for package management

## Form Handling

Registration forms currently log to console. To implement backend submission:
1. Create API endpoints (Astro supports API routes in `src/pages/api/`)
2. Update `handleSubmit` functions in form components
3. Add error handling and validation

## Adding shadcn/ui Components

When adding new shadcn/ui components:
1. Adapt for Astro's React integration (ensure client-side directives)
2. Use the `@/` path alias for imports
3. Apply custom brand colors (yellow/gold gradient with red accents)
4. Test with `client:load` directive in Astro pages
