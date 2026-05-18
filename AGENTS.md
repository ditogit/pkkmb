# AGENTS.md - PKKBN Development Guide

## Project Overview

This is an Astro-based informational web application for PKKMB (Pengenalan Kehidupan Kampus Mahasiswa Baru) at Universitas Merah Putih. The site serves as a central portal for new students to access schedules, announcements, rules, and emergency information.

- **Tech Stack**: Astro 6.3.1, Tailwind CSS 3.4.17, Alpine.js 3.15.12
- **Node Version**: >= 22.12.0
- **Type**: Static Site Generator (SSG) with PWA support

---

## Build & Development Commands

### Core Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI directly
npm run astro
```

### Running a Single Test

This project does **not** have a test framework configured. There are no test files in the codebase.

---

## Code Style Guidelines

### General Principles

- Use **Astro components** (`.astro` files) for pages and reusable UI components
- Keep components small and focused on a single responsibility
- Use semantic HTML elements for accessibility
- Follow Material Design 3 principles (custom colors defined in tailwind.config.mjs)

### Imports & File Organization

- **Component imports** go in the frontmatter fence (between `---` lines)
- **Relative paths** required for local imports
- **Group by feature**: place components in `src/components/{feature}/`

```astro
---
// Correct import style
import Navbar from '../components/navbar/Navbar.astro';
import MainLayout from '../layouts/MainLayout.astro';
import { scheduleData } from '../data/schedules';
---

<MainLayout title="Page Title">
  <!-- Component markup -->
</MainLayout>
```

### Props & Type Definitions

- Define component props using TypeScript interfaces in the frontmatter
- Destructure props explicitly

```astro
---
interface Props {
  title: string;
  description?: string;
  featured?: boolean;
}

const { title, description = "Default description", featured = false } = Astro.props;
---
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.astro`, `ScheduleAccordion.astro`)
- **Files**: lowercase with hyphens for non-component files (e.g., `global.css`)
- **Classes**: Tailwind utility classes, fallback to kebab-case for custom CSS
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE for global constants

### Formatting

- Use **2 spaces** for indentation
- Wrap lines at reasonable length (max ~100 characters)
- Add proper spacing between logical sections
- Use self-closing tags for components without children

### Tailwind CSS Usage

- Use Tailwind utility classes for all styling
- Custom colors defined in `tailwind.config.mjs` (follows Material Design 3)
- Font families configured:
  - Headlines: `Plus Jakarta Sans` (font-headline)
  - Body: `Manrope` (font-body, font-label)

```astro
<!-- Example classes -->
<div class="flex items-center justify-between gap-4 p-6 bg-surface-container-low rounded-2xl">
  <h1 class="text-2xl md:text-3xl font-bold text-primary">Title</h1>
</div>
```

### Dynamic Classes

- Use `class:list` for conditional classes

```astro
<a
  class:list={[
    "pb-1 transition-colors",
    isActive ? "text-blue-700 border-b-2 border-blue-700" : "text-slate-600"
  ]}
  href={href}
>
```

### Alpine.js Interactivity

- Use Alpine.js directives for client-side interactivity
- Available directives: `x-data`, `x-on:click`, `x-show`, `x-transition`

```astro
<div class="space-y-6" x-data="{ activeTab: 0 }">
  <button x-on:click={`activeTab = ${index}`}>Tab</button>
  <div x-show={`activeTab === ${index}`}>Content</div>
</div>
```

### Material Symbols

- Use Google Material Symbols Outlined for icons

```astro
<span class="material-symbols-outlined">icon_name</span>
```

### Error Handling

- No formal error boundaries in this project
- For client-side errors, use try-catch in script tags
- Validate data before rendering

### Accessibility

- Always include `alt` attributes on images
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Include `lang` attribute on HTML element
- Use proper heading hierarchy (h1, h2, h3, ...)

```astro
<html class="light" lang="id">
  <!-- Content -->
</html>
```

---

## Project Structure

```
src/
├── components/
│   ├── announcements/    # Announcement-related components
│   ├── cards/             # Card UI components
│   ├── navbar/            # Navigation components
│   ├── schedule/         # Schedule display components
│   └── ui/                # Shared UI components (Footer, etc.)
│
├── content/
│   ├── announcements/    # Markdown content for announcements
│   └── faq/              # FAQ content
│
├── layouts/
│   └── MainLayout.astro   # Main site layout wrapper
│
├── pages/
│   ├── index.astro        # Homepage
│   ├── announcements/     # Announcements directory
│   │   ├── [slug].astro # Dynamic announcement pages
│   │   └── index.astro
│   └── *.astro            # Other site pages
│
└── styles/
    └── global.css        # Global CSS styles
```

---

## Context & Documentation Files

The following files in the `context/` directory contain project-specific information:

- `context/structure-folder.md` - Directory structure overview
- `context/assignment.md` - Assignment information
- `context/emergency-info.md` - Emergency contact details
- `context/group-gugus.md` - Group information
- `context/rules.md` - PKKBN rules and regulations

---

## Configuration Files

- `astro.config.mjs` - Astro configuration (integrations, Vite plugins, PWA)
- `tailwind.config.mjs` - Tailwind CSS configuration with custom colors
- `tsconfig.json` - TypeScript configuration (extends astro/tsconfigs/strict)

---

## Best Practices

1. **Test changes locally** with `npm run dev` before building
2. **Use semantic HTML** and proper heading hierarchy
3. **Optimize images** before adding to the codebase
4. **Keep translations in mind** - content is primarily in Indonesian (id)
5. **Mobile-first approach** - use responsive Tailwind classes (e.g., `md:text-2xl`)
6. **Use the PWA config** in astro.config.mjs for offline capabilities
