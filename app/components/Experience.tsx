'use client';

import { useEffect, useRef, useState } from 'react';
import { experiences } from '@/data/experience';
import ClickSpark from './ClickSpark';

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative"
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Experience
        </h2>
        <p className="text-center text-zinc-400 mb-16 text-lg">
          My professional journey
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-700 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-foreground rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-zinc-950" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="text-sm text-zinc-400 mb-2">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-400 mb-2">
                        {exp.company}
                      </h4>
                      {exp.location && (
                        <p className="text-sm text-zinc-400 mb-4">
                          📍 {exp.location}
                        </p>
                      )}
                      <ul
                        className={`space-y-2 text-zinc-400 ${
                          index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </ClickSpark>
    </section>
  );
}

