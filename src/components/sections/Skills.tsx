'use client';

import { useRef } from 'react';
import { skills, skillCategories } from '@/data/skills';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  // Group skills by category
  const groupedSkills = skillCategories.reduce(
    (acc, category) => {
      acc[category] = skills.filter((s) => s.category === category);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  // Asymmetrical grid spans for each category
  const categoryLayout: Record<string, string> = {
    Frontend: 'lg:col-span-5',
    'UI/UX': 'lg:col-span-4 lg:col-start-7',
    Animation: 'lg:col-span-6',
    Tools: 'lg:col-span-3 lg:col-start-8',
    'Backend Basics': 'lg:col-span-4 lg:col-start-2',
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-[var(--space-block)]">
          <span className="section-label block mb-4 gsap-reveal">What I Work With</span>
          <h2 className="section-title gsap-reveal">TECH STACK</h2>
        </div>

        {/* Floating Skill Blocks — Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-y-20">
          {skillCategories.map((category, index) => (
            <div
              key={category}
              className={`col-span-12 ${categoryLayout[category] || 'lg:col-span-4'} gsap-reveal`}
              data-skill-index={index}
            >
              {/* Category Block */}
              <div
                className="p-8 lg:p-10"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                {/* Category Title */}
                <h3
                  className="font-[family-name:var(--font-heading)] text-white mb-8"
                  style={{ fontSize: 'var(--text-title)' }}
                >
                  {category}
                </h3>

                {/* Skills List — large text items */}
                <div className="space-y-4">
                  {groupedSkills[category]?.map((skill) => (
                    <p
                      key={skill.name}
                      className="text-[var(--text-body)] text-[var(--text-secondary)] font-[family-name:var(--font-body)] font-light hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {skill.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
