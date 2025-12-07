'use client';

import { useEffect, useRef, useState } from 'react';
import { skills, skillCategories } from '@/data/skills';
import ClickSpark from './ClickSpark';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
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
          Skills
        </h2>
        <p className="text-center text-zinc-400 mb-12 text-lg">
          Technologies and tools I work with
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-zinc-900 text-foreground hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-zinc-800"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {skill.name}
                </h3>
                <span className="text-sm text-zinc-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
              
              <p className="text-sm text-zinc-400 mt-2">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
        </div>
      </ClickSpark>
    </section>
  );
}

