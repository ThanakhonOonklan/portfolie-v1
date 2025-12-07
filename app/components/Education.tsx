'use client';

import { useEffect, useRef, useState } from 'react';
import { education } from '@/data/education';
import ClickSpark from './ClickSpark';

export default function Education() {
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
      id="education"
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Education
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 text-lg">
          My academic background
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-700 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-start transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-foreground rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-black" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="text-sm text-zinc-400 mb-2">
                        {edu.period}
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-purple-400 mb-1">
                        {edu.field}
                      </h4>
                      <p className="text-lg font-medium text-zinc-300 mb-2">
                        {edu.institution}
                      </p>
                      {edu.location && (
                        <p className="text-sm text-zinc-400 mb-3">
                          📍 {edu.location}
                        </p>
                      )}
                      {edu.description && (
                        <p className="text-zinc-400">
                          {edu.description}
                        </p>
                      )}
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

