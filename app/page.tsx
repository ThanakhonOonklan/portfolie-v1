import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoLoop from './components/LogoLoop';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Home() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="py-12 bg-black">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
      <About />
     
      
      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Thanakhon Oonklan. 
          </p>
        </div>
      </footer>
    </main>
  );
}
