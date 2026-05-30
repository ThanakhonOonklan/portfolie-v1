import { Navbar } from '@/components/layout';
import {
  Hero,
  Projects,
  OtherSkills,
  Experience,
  Skills,
  Certificates,
  About,
  Contact,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <OtherSkills />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}
