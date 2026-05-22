'use client';

import { useRef } from 'react';
import { certificates } from '@/data/certificates';

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="certificates"
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
          <span className="section-label block mb-4 gsap-reveal">Continuous Learning</span>
          <h2 className="section-title gsap-reveal">CERTIFICATES</h2>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="gsap-reveal group"
              data-cert-index={index}
            >
              <div
                className="p-8 h-full flex flex-col transition-colors duration-300"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--bg-primary)',
                }}
              >
                {/* Certificate Image Placeholder */}
                <div
                  className="w-full mb-6 flex items-center justify-center overflow-hidden"
                  style={{
                    aspectRatio: '4 / 3',
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] uppercase tracking-widest">
                    Certificate
                  </span>
                </div>

                {/* Year */}
                <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] mb-3">
                  {cert.year}
                </span>

                {/* Title */}
                <h3
                  className="font-[family-name:var(--font-heading)] text-white mb-2 group-hover:text-[var(--accent)] transition-colors duration-300"
                  style={{ fontSize: 'var(--text-title)', lineHeight: 1.1 }}
                >
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-[var(--text-body)] text-[var(--text-secondary)] font-[family-name:var(--font-body)] mb-6">
                  {cert.organization}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[var(--text-label)] text-[var(--text-muted)] font-[family-name:var(--font-body)] px-2 py-1"
                      style={{
                        border: '1px solid var(--border)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] uppercase tracking-widest hover:text-white transition-colors duration-300"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
