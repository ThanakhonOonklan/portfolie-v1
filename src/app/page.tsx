import { Navbar, Footer } from '@/components/layout';
import {
  Hero,
  Projects,
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
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
