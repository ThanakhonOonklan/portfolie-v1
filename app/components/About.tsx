'use client';

import { useEffect, useRef, useState } from 'react';
import ClickSpark from './ClickSpark';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

      const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative"
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-zinc-800">
             
              {/* Placeholder for actual image */}
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              I&apos;m a passionate full-stack developer with a love for creating
              innovative digital solutions. With expertise in modern web
              technologies, I bring ideas to lifddde through clean code and
              thoughtful design.
            </p>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a
              career focused on building user-centric applications that make a
              difference. I enjoy tackling complex problems and turning them
              into elegant solutions.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center">
                  <span className="mr-3 text-foreground">📍</span>
                  Based in Your City, Country
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-foreground">💼</span>
                  Available for freelance projects
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-foreground">🎓</span>
                  Computer Science Graduate
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-foreground">☕</span>
                  Coffee enthusiast & problem solver
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </ClickSpark>
    </section>
  );
}

