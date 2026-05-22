# Thanakhon Portfolio — Developer & Agent Documentation (`agent.md`)

Welcome to the developer handoff and architectural map for **Thanakhon Oonklan's Portfolio Website**. This document contains a comprehensive breakdown of the design system, typography hierarchy, multi-language architecture, layout configurations, and custom animation hooks.

---

## 1. Project Directory Structure

The project is built on **Next.js (App Router)**, styled using **TailwindCSS v4 (using CSS variables for customization)**, and animated with **GSAP & Lenis Smooth Scroll**.

```text
e:/Portfolio_thanakhon/portfolie-v1/
├── public/                 # Static Assets (Images, Profile Portraits)
│   └── images/
│       └── profile/        # Contains developer profile photos (Hero, About, Contact)
├── src/
│   ├── app/                # Next.js App Router Pages & Core Providers
│   │   ├── globals.css     # Entry point for stylesheet & Design System Tokens
│   │   ├── layout.tsx      # Main layout wrapping providers, header, footer
│   │   └── page.tsx        # Single-page index assembling all sections
│   ├── components/
│   │   ├── layout/         # Header, Navigation, Footer
│   │   └── sections/       # Modular section files (Hero, About, Projects, Experience, Skills, Contact)
│   ├── constants/          # Static content definitions & lists (Skills, Projects, Timeline items)
│   ├── data/               # Configuration and links data
│   ├── hooks/              # Custom reusable React hooks
│   ├── lib/
│   │   └── gsap/           # GSAP setups, registers, ScrollTrigger bindings, animation presets
│   ├── messages/           # Translation Dictionaries (JSON formats)
│   │   ├── en.json         # English translations
│   │   └── th.json         # Thai translations
│   ├── providers/          # React Context Providers (SmoothScroll, LocaleProvider)
│   ├── styles/             # Concern-based structured stylesheets
│   │   ├── animations.css  # Custom CSS keyframes & dynamic animations
│   │   ├── typography.css  # Precise rule declarations for headings and bilingual font fallbacks
│   │   └── utilities.css   # Custom reusable utility classes (e.g. .section-container)
│   └── types/              # TypeScript interface and type declarations
├── agent.md                # This comprehensive documentation file
└── package.json            # Scripts, dependencies (React, GSAP, TailwindCSS, etc.)
```

---

## 2. Design System & Theme Colors

The portfolio features a **Premium Cinematic Editorial Dark Theme**. There is no traditional light mode switcher, as the aesthetic relies on a dark, moody high-contrast canvas with neon-teal accents.

### Design Tokens
All core color variables and tokens are defined in the `:root` pseudo-class in [globals.css](file:///e:/Portfolio_thanakhon/portfolie-v1/src/app/globals.css):

| CSS Variable | Value | Purpose / Usage |
| :--- | :--- | :--- |
| `--bg-primary` | `#000000` | Main window background canvas |
| `--bg-secondary` | `#050505` | Alternate background rows (like Project list sections) |
| `--bg-elevated` | `#0A0A0A` | Container backgrounds, cards, and tooltips |
| `--bg-surface` | `#111111` | Input fields, active visual states |
| `--accent` | `#FF98A2` | Neon accents / Interactive highlights (Coral/Teal glow) |
| `--accent-hover` | `#FFB3BA` | Hover colors of interactive triggers |
| `--text-primary` | `#FFFFFF` | Dominant text, titles, hero titles |
| `--text-secondary`| `#A1A1AA` | Body copy, secondary headers, timeline body |
| `--text-muted` | `#52525B` | Labels, inactive links, scroll cues |
| `--border` | `#1A1A1A` | Sleek separator lines, element dividers |

### Where to Change Colors
To customize the visual appearance of the website, edit the CSS variables inside [globals.css](file:///e:/Portfolio_thanakhon/portfolie-v1/src/app/globals.css#L10-L50).

---

## 3. Typography System Rules

The portfolio enforces a **strict structural hierarchy** to ensure a premium editorial editorial design. Headings are bold, capitalized, and display massive cinematic sizing, while body texts are tailored for premium readability in both English and Thai.

### Font System Configured:
- **Heading Font:** `var(--font-heading)` maps to **Anton** (imported via Google Fonts).
- **English Body Font:** `var(--font-body)` maps to **Inter**.
- **Thai Body Font:** `var(--font-thai)` maps to **Sarabun** (Only loaded on Thai locales for paragraphs).

### Key Rules for Text Layers:
1. **ALL MAJOR HEADINGS** must always use **Anton** (never switch headings to Sarabun).
   - This includes: `Hero names`, `Section titles` ("FEATURED PROJECTS", "EXPERIENCE"), `Project titles`, and `Contact call-to-actions`.
2. **Thai Language Readability:**
   - Thai content inside paragraphs (`<p>`), lists (`<li>`), links (`<a>`), and buttons (`<button>`) uses **Sarabun** to optimize Thai legibility.

### CSS Implementation
Inside [typography.css](file:///e:/Portfolio_thanakhon/portfolie-v1/src/styles/typography.css):
* All standard tags (`h1` through `h6`) are bound globally to `var(--font-heading)` with lowercase line-heights and uppercase text transformations.
* The Thai fallback is dynamically applied when the root layout sets `<html lang="th">`:
```css
/* Body text font mapping based on active language selection */
html[lang="th"] p,
html[lang="th"] span:not(h1 span):not(h2 span):not(h3 span):not(h4 span):not(h5 span):not(h6 span),
html[lang="th"] a,
html[lang="th"] button,
html[lang="th"] li {
  font-family: var(--font-body), var(--font-thai), sans-serif;
}
```

---

## 4. Multi-Language (Locale) Architecture

Language switching is handled at runtime via React Context and persisted in the user's browser storage.

### Core files:
* **Context Provider:** [LocaleProvider.tsx](file:///e:/Portfolio_thanakhon/portfolie-v1/src/providers/LocaleProvider.tsx)
* **Custom Hook:** `useLocaleContext` used inside components.
* **Translation Files:** `src/messages/en.json` & `src/messages/th.json`

### How the Multi-Language Process Works:
1. **Locale Initialization:** On page load, `LocaleProvider.tsx` checks browser `localStorage` for a saved key `portfolio-locale`. If not found, it defaults to `'en'`.
2. **State Syncing to DOM:** When the local state changes, it dynamically updates the `lang` attribute on the global document:
   ```typescript
   useEffect(() => {
     document.documentElement.lang = locale;
   }, [locale]);
   ```
   *This triggers the bilingual CSS selectors in `typography.css` instantly.*
3. **Switching Language UI:** Inside components like the `Header`, a toggle button invokes `setLocale('en')` or `setLocale('th')`.
4. **Conditional Copy Rendering:** In sections where copy translates (e.g., [Contact.tsx](file:///e:/Portfolio_thanakhon/portfolie-v1/src/components/sections/Contact.tsx)), we render strings depending on the active context hook:
   ```typescript
   const { locale } = useLocaleContext();
   // Use locale === 'th' ? "ภาษาไทย" : "English"
   ```

---

## 5. Animation Architecture (GSAP & ScrollTrigger)

Smooth motions are the signature aspect of this portfolio. They are integrated through **Lenis Smooth Scroll** and **GSAP ScrollTrigger**.

### Core files:
* **SmoothScrollProvider:** [SmoothScrollProvider.tsx](file:///e:/Portfolio_thanakhon/portfolie-v1/src/providers/SmoothScrollProvider.tsx) (Initializes Lenis smoothly running in Next.js).
* **Presets:** [presets.ts](file:///e:/Portfolio_thanakhon/portfolie-v1/src/lib/gsap/presets.ts) (Declarations for fadeUp, page entry, and reveal animations).

### Key Animation Features:
- **Parallax Hero Scroll:** The Hero photo scale and movement are linked to the page scroll speed using GSAP timelines ending exactly when the user reaches the "FEATURED PROJECTS" header.
- **Sticky Scroll Pins:** Used in sections like `About` and `Contact` so details/portraits stay centered dynamically in the viewport while scrolling through descriptions.
- **Spinning badges:** Utilizes CSS keyframe animations for infinitely rotating badges around avatars.

---

## 6. Interactive Motion & WebGL Components

To elevate the premium editorial feeling, the website implements high-performance interactive visual components (located in `src/components/animations/`):

### 1. WebGL Particles Background (`Particles.tsx`)
- **Technology:** Built with `ogl` (minimalist WebGL library) for GPU-accelerated graphics.
- **Visuals:** Renders a gorgeous, smooth 3D floating dust particle field that moves subtly in response to cursor interaction.
- **Usage:** Included as a low-level overlay on sections like the Hero to add cinematic depth without impacting page load times.

### 2. Custom Click Sparks (`ClickSpark.tsx`)
- **Technology:** Utilizes HTML5 `<canvas>` rendering context 2D.
- **Interaction:** Every time the user clicks anywhere on the viewport, a beautiful splash of short-lived spark lines burst outwards from the cursor location matching the active `--accent` theme color.

### 3. Interactive Logo Infinite Carousel (`LogoLoop.tsx`)
- **Technology:** Programmed with GSAP for infinite linear translations.
- **Usage:** Displays a horizontal auto-scrolling loop showcasing brand or technology logos that pauses seamlessly on cursor hover.

### 4. Split Typography Layouts (`SplitText.tsx`)
- **Technology:** Custom React splitter wrapping letters with individual span layers for character-by-character GSAP letter transitions on viewport entry.

### 5. Typewriter Decelerators (`TextType.tsx`)
- **Technology:** React typing state toggler simulating organic human keystrokes for subheaders.

---

## 7. How-To Developer Recipes

### Recipe A: Adding or Editing a Language Translation
If you need to edit static text values:
1. Open the corresponding translation dictionary:
   - For English: [en.json](file:///e:/Portfolio_thanakhon/portfolie-v1/src/messages/en.json)
   - For Thai: [th.json](file:///e:/Portfolio_thanakhon/portfolie-v1/src/messages/th.json)
2. Add your key-value pair.
3. Import `useLocaleContext` in your React file and translate dynamically.

### Recipe B: Updating Portrait Images
The design supports three critical profile/portrait pictures:
1. **Hero Portrait (Gsap-Linked Scroll):** Set at `public/images/profile/portrait.png`
2. **About Me Portrait:** Set at `public/images/profile/about.png`
3. **Contact Avatar Portrait:** Set at `public/images/profile/contact.png`

Simply replace these files inside `public/images/profile/` with identical names to update portraits instantly.

