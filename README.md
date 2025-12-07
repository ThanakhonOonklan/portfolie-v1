# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- 🎨 Modern and interactive UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js App Router
- 🎯 Type-safe with TypeScript
- 🎭 Interactive components with ReactBits
- 🎨 Beautiful UI components with shadcn/ui

## Tech Stack

- **Framework:** Next.js 16.0.6
- **UI Library:** React 19.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** ReactBits
- **Icons:** Lucide React

## Project Structure

```
portfolie-v1/
├── app/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── data/                    # Mock data and constants
│   ├── education.ts
│   ├── experience.ts
│   ├── nav-items.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── social-links.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── types/                   # TypeScript types
│   ├── index.ts
│   └── portfolio.ts
└── public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolie-v1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Portfolio Data

Edit the data files in the `data/` directory:
- `data/projects.ts` - Your projects
- `data/skills.ts` - Your skills
- `data/experience.ts` - Your work experience
- `data/education.ts` - Your education
- `data/social-links.tsx` - Your social media links
- `data/nav-items.ts` - Navigation items

### Update Personal Information

Edit the components in `app/components/`:
- `Hero.tsx` - Hero section with your name and tagline
- `About.tsx` - About section with your information

### Styling

- Global styles: `app/globals.css`
- Tailwind config: Uses Tailwind CSS v4 with CSS variables
- Color scheme: Customizable via CSS variables in `globals.css`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is open source and available under the [MIT License](LICENSE).

