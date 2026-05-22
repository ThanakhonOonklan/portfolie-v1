'use client';

import { useRef } from 'react';
import { projects } from '@/data/projects';
import { ProjectCaseStudy } from '@/components/projects';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="projects"
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
          <span className="section-label block mb-4 gsap-reveal">Selected Work</span>
          <h2 className="section-title gsap-reveal">FEATURED PROJECTS</h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col" style={{ gap: 'var(--space-section)' }}>
          {projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCaseStudy project={project} index={index} />
              
              {/* Divider between projects */}
              {index < projects.length - 1 && (
                <div
                  className="divider"
                  style={{ marginTop: 'var(--space-section)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
