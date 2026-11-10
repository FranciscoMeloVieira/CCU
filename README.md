# CCU — Project Showcase Website

A lightweight, modern, single-page academic project showcase website built with **[Astro](https://astro.build/)** and **[Tailwind CSS](https://tailwindcss.com/)**, designed for hosting on **GitHub Pages**.

This website serves as the presentation platform for a 7-week academic project exploring **Sustainable Interaction Design (SID)**, contextual inquiry, and tangible computing.

---

## 🌟 Key Features

- **Editorial, Minimal Design**: Generous whitespace, elegant typography, and a refined academic color palette.
- **Data-Driven Architecture**: All content (project info, team members, SID framework, navigation) is managed through central JSON files—no need to touch layout or component code.
- **Interactive SID Dimensions**: Responsive card grid supporting 4, 3, 2, 1, or 0 active dimensions with smooth expanding details, principles, and practical examples.
- **Floating Sidebar Navigation**: Desktop floating dock with real-time active section tracking (scrollspy) and mobile slide-over drawer with smooth scrolling.
- **Instant Dark Mode**: Light and dark theme toggle with localStorage persistence and zero flash of unstyled theme (FOUC).
- **GitHub Pages Ready**: Out-of-the-box configuration for GitHub Pages with automated GitHub Actions CI/CD.
- **Accessible & Responsive**: Fully responsive from mobile phones to 4K displays, with keyboard accessibility, ARIA support, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```text
CCU/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages deployment workflow
├── src/
│   ├── components/
│   │   ├── FloatingNavigation.astro  # Desktop floating dock & mobile slide-over
│   │   ├── Hero.astro                # Project intro, logo placeholder, metadata
│   │   ├── Section.astro             # Reusable semantic section layout
│   │   ├── SelectionMatrix.astro     # Interactive 4-category connected selection matrix
│   │   ├── SIDCard.astro             # Interactive expandable SID dimension card
│   │   ├── TeamCard.astro            # Minimal team profile card with social links
│   │   └── Footer.astro              # Minimal footer with academic info & repo link
│   ├── data/
│   │   ├── navigation.json           # Navigation items and section IDs
│   │   ├── project.json              # Project name, overview, roadmap & outcomes
│   │   ├── selection-matrix.json     # Mobility, Mode, User Group & SID focus parameters
│   │   ├── sid-dimensions.json       # SID framework dimensions, toggles & details
│   │   └── team.json                 # Team roster, roles, bios & profile links
│   ├── layouts/
│   │   └── MainLayout.astro          # Root HTML shell, theme scripts & meta tags
│   ├── pages/
│   │   └── index.astro               # Single-page showcase entry point
│   └── styles/
│       └── global.css                # Tailwind CSS v4 setup & theme styles
├── astro.config.mjs                  # Astro configuration (base path & Tailwind Vite)
└── package.json
```

---

## 🛠️ Quick Start

### 1. Prerequisites

- **Node.js** v18.17.0 or later (v20+ recommended)
- **npm** (comes with Node.js)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/FranciscoMeloVieira/CCU.git
cd CCU
npm install
```

### 3. Development Server

Start the local development server:

```bash
npm run dev
```

Open your browser at `http://localhost:4321/CCU/` (or `http://localhost:4321/` depending on your `BASE_PATH` setting). Changes in `.astro` and `.json` files hot-reload instantly.

### 4. Build for Production

Generate the static production build into the `dist/` directory:

```bash
npm run build
```

You can preview the built site locally with:

```bash
npm run preview
```

---

## ✏️ How to Edit Content

All website content is intentionally separated from code. You can update the entire site by editing files in `src/data/`:

### 1. Project Information (`src/data/project.json`)
- **Project Name & Tagline**: Edit `name`, `shortName`, `tagline`, and `introduction`.
- **Course Metadata**: Update course name, code, institution, academic year, and duration under `metadata`.
- **Background Section**: Modify the narrative paragraphs, problem context, and numerical highlights under `background`.
- **Roadmap & Objectives**: Add, remove, or modify items under `objectives.items` (step number, title, category, description, and deliverable).
- **Outcomes**: Edit the cards under `outcomes.cards`.
- **Footer**: Update copyright year, GitHub repository URL, and license under `footer`.

### 2. Selection Matrix (`src/data/selection-matrix.json`)
Controls the interactive 4-square focus matrix in the Project Background section:
- `id`: Unique identifier (e.g. `"mobility"`, `"mode"`, `"user-group"`, `"sid-dimension"`).
- `category`: Category title (e.g. `"Mobility"`).
- `target`: Selected target value (e.g. `"Urban & Daily Campus Commuting"`).
- `description`: Detailed contextual explanation displayed in the tab panel when the square is active.
- `additionalInfo`: Array of `{ "label": "...", "value": "..." }` attribute callouts.
- `isNested`: (Optional boolean) When `true`, enables nested subordinate tabs inside this matrix tab (used for SID Dimensions).
- `dimensions`: Array of 2–4 targeted SID dimensions containing:
  - `id`: Dimension identifier (e.g. `"practices-routines"`).
  - `name`: Display title (e.g. `"Practices & Routines"`).
  - `anchorId`: Anchor ID matching the SID card below (e.g. `"practices-routines"`).
  - `shortDescription`: Concise summary shown in the nested tab card.
  - `detailedDescription`: Full contextual rationale for targeting this dimension.
  - `additionalInfo`: Array of key focus / consideration badges.
- `linkAnchor`: Optional anchor target for standard tabs.
- `linkText`: Label for the shortcut link.

### 3. Sustainable Interaction Design Framework (`src/data/sid-dimensions.json`)
Each dimension is an object with:
- `id`: Unique identifier (e.g. `"practices-routines"`).
- `title`: Display title.
- `icon`: Icon identifier (`"repeat"`, `"eye"`, `"users"`, `"shield-check"`).
- `enabled`: `true` or `false`. Setting to `false` removes it from the website immediately.
- `shortDescription`: Summary displayed on the front of the card.
- `detailedDescription`: In-depth theoretical explanation shown upon card expansion.
- `keyPrinciples`: Array of bulleted principles.
- `practicalExamples`: Array of applied project examples.

> **Note**: The layout automatically adapts to any number of enabled dimensions (4, 3, 2, 1, or 0) without breaking grids.

### 4. Team Members (`src/data/team.json`)
Each team member entry includes:
- `id`: Unique identifier.
- `name`: Full name.
- `role`: Project responsibility (e.g. `"Sustainability Lead"`).
- `bio`: Short biographical summary.
- `initials`: Fallback letters displayed when no profile picture is supplied (e.g. `"FMV"`).
- `avatar`: URL or path to a profile image (leave empty `""` to use the styled monogram).
- `links`: Object with `github`, `linkedin`, and `website`. Any link left empty (`""`) is automatically hidden from the card.

### 5. Navigation (`src/data/navigation.json`)
Controls items shown in both the desktop floating dock and mobile slide-over menu:
- `id`: Section ID (must match an `id` on the page, e.g. `"hero"`, `"background"`, `"objectives"`, `"sid-framework"`, `"team"`).
- `label`: Human-readable label (e.g. `"SID Framework"`).
- `icon`: Icon identifier (`"home"`, `"book-open"`, `"target"`, `"layers"`, `"users"`).

---

## 🚀 GitHub Pages Deployment

### Option A: Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. On GitHub, go to your repository: **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every time you push to the `main` or `master` branch, GitHub Actions will automatically build and publish your showcase.

Your website will be live at:
```text
https://franciscomelovieira.github.io/CCU/
```

### Option B: Custom Domain or Root Deployment

If you are deploying to a custom domain (e.g., `https://myproject.org`) or root URL without `/CCU`:

1. Set the `BASE_PATH` environment variable during build:
   ```bash
   BASE_PATH=/ npm run build
   ```
2. Or adjust `base` in `astro.config.mjs`:
   ```javascript
   const base = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : '/';
   ```

---

## 🎨 Design System & Customization

- **Framework**: Astro 5/7 static site generator.
- **Styling**: Tailwind CSS v4 using `@tailwindcss/vite`.
- **Palette**:
  - Primary Background: `#FFFFFF` (Dark: `#0B0F17` / `#020617`)
  - Secondary Background: `#F8FAFC` (Dark: `#0F172A`)
  - Accent Color: Emerald (`#10B981` / `#059669`) representing sustainability and ecological balance.
  - Text: Slate 900 (`#0F172A`) / Slate 100 (`#F1F5F9`)
  - Borders: Slate 200 (`#E2E8F0`) / Slate 800 (`#1E293B`)
- **Typography**: Native modern sans-serif system stack (`Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`) for lightning-fast loading and zero external font requests.
- **Accessibility**: Keyboard navigable, visible focus rings, ARIA landmarks, `prefers-reduced-motion` responsive transitions.

---

## 📄 License

This academic project showcase template is distributed under the [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) license.
