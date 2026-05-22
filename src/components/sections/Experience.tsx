'use client';

import { useRef } from 'react';
import { experiences } from '@/data/experience';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-[var(--space-block)]">
          <span className="section-label block mb-4 gsap-reveal">Career Journey</span>
          <h2 className="section-title gsap-reveal">EXPERIENCE</h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col" style={{ gap: 'var(--space-block)' }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="gsap-reveal"
              data-experience-index={index}
            >
              {/* Timeline entry — year anchored left */}
              <div className="grid grid-cols-12 gap-4 lg:gap-8">
                {/* Year Column */}
                <div className="col-span-12 lg:col-span-2 flex lg:justify-end">
                  <span
                    className="font-[family-name:var(--font-heading)] text-[var(--text-muted)] lg:text-right"
                    style={{ fontSize: 'var(--text-headline)' }}
                  >
                    {exp.year}
                  </span>
                </div>

                {/* Timeline Line Column */}
                <div className="hidden lg:flex lg:col-span-1 justify-center relative">
                  {/* Dot */}
                  <div
                    className="w-3 h-3 rounded-full shrink-0 mt-3 z-10"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  {/* Line */}
                  {index < experiences.length - 1 && (
                    <div
                      className="absolute top-6 bottom-0 w-px"
                      style={{
                        backgroundColor: 'var(--border)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: 'calc(100% + var(--space-block))',
                      }}
                    />
                  )}
                </div>

                {/* Content Column */}
                <div className="col-span-12 lg:col-span-9">
                  {/* Role & Company */}
                  <h3
                    className="font-[family-name:var(--font-heading)] text-white mb-2"
                    style={{ fontSize: 'var(--text-title)' }}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-[var(--accent)] font-[family-name:var(--font-body)] font-medium">
                      {exp.company}
                    </span>
                    <span className="w-4 h-px bg-[var(--text-muted)]" />
                    <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)]">
                      {exp.period}
                    </span>
                  </div>
                  {exp.location && (
                    <p className="text-[var(--text-caption)] text-[var(--text-muted)] mb-6 font-[family-name:var(--font-body)]">
                      {exp.location}
                    </p>
                  )}

                  {/* Description */}
                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[var(--text-body)] text-[var(--text-secondary)] font-[family-name:var(--font-body)]"
                      >
                        <span className="text-[var(--text-muted)] mt-2 shrink-0">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor">
                            <rect width="4" height="4" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Learned */}
                  {exp.skills.length > 0 && (
                    <div>
                      <span className="section-label block mb-3">Skills</span>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[var(--text-caption)] text-[var(--text-secondary)] font-[family-name:var(--font-body)] px-3 py-1.5"
                            style={{
                              border: '1px solid var(--border)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Image Area Placeholder */}
                  {exp.imageUrl && (
                    <div
                      className="mt-8 w-full max-w-[500px] overflow-hidden"
                      style={{
                        aspectRatio: '16 / 9',
                        backgroundColor: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] uppercase tracking-widest">
                          Image
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              {index < experiences.length - 1 && (
                <div className="divider mt-[var(--space-block)] lg:ml-[calc(2/12*100%+1/12*100%)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
