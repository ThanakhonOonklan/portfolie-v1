'use client';

import { useRef, useState, useEffect } from 'react';
import { certificates } from '@/data/certificates';

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCert, setActiveCert] = useState<typeof certificates[0] | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeCert]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="gsap-reveal group"
              data-cert-index={index}
            >
              <div
                className="p-6 h-full flex flex-col transition-all duration-300"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--bg-primary)',
                }}
              >
                {/* Certificate Image */}
                <div
                  className="w-full mb-6 flex items-center justify-center overflow-hidden relative cursor-zoom-in group/img"
                  style={{
                    aspectRatio: '4 / 3',
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                  }}
                  onClick={() => setActiveCert(cert)}
                >
                  {cert.imageUrl ? (
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover/img:scale-105"
                    />
                  ) : (
                    <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] uppercase tracking-widest">
                      Certificate
                    </span>
                  )}
                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold px-3 py-1.5 border border-white/20 bg-black/40 backdrop-blur-sm transition-transform duration-300 translate-y-2 group-hover/img:translate-y-0">
                      Zoom In
                    </span>
                  </div>
                </div>

                {/* Year */}
                <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] mb-3">
                  {cert.year}
                </span>

                {/* Title */}
                <h3
                  className="font-[family-name:var(--font-heading)] text-white mb-2 group-hover:text-[var(--accent)] transition-colors duration-300"
                  style={{ fontSize: 'var(--text-title)', lineHeight: 1.2 }}
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

                {/* Credential link / Zoom Link */}
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] uppercase tracking-widest hover:text-white transition-colors duration-300 inline-block w-fit"
                  >
                    View Credential →
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="mt-6 text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] uppercase tracking-[0.15em] hover:text-[var(--accent)] transition-colors duration-300 text-left w-fit font-medium"
                  >
                    Zoom Image →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      {activeCert && activeCert.imageUrl && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 cursor-zoom-out"
          onClick={() => setActiveCert(null)}
        >
          {/* Top Bar with Title and Close Button */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between px-6 md:px-12 pointer-events-none">
            <div className="pointer-events-auto">
              <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest font-semibold block mb-0.5">
                {activeCert.organization} • {activeCert.year}
              </span>
              <h4 className="text-white text-sm md:text-base font-[family-name:var(--font-heading)] font-semibold truncate max-w-[70vw]">
                {activeCert.title}
              </h4>
            </div>
            <button
              className="pointer-events-auto text-white/60 hover:text-white transition-colors duration-200 text-3xl font-light p-2"
              onClick={(e) => {
                e.stopPropagation();
                setActiveCert(null);
              }}
              aria-label="Close Lightbox"
            >
              &times;
            </button>
          </div>

          {/* Modal Container */}
          <div
            className="w-full max-w-[90vw] max-h-[75vh] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.imageUrl}
              alt={activeCert.title}
              className="max-w-full max-h-[75vh] object-contain rounded border border-white/10 shadow-2xl select-none"
            />
          </div>

          {/* Footer Info */}
          <div className="absolute bottom-6 text-center px-6 pointer-events-none">
            <span className="text-[var(--text-muted)] text-[10px] uppercase tracking-[0.2em] font-[family-name:var(--font-body)]">
              Click anywhere to exit view
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
