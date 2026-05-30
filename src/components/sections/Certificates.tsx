'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { certificates } from '@/data/certificates';
import { useTranslation } from '@/hooks';
import type { Certificate } from '@/types/portfolio';

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const openModal = useCallback((cert: Certificate) => {
    if (cert.imageUrl) setActiveCert(cert);
  }, []);

  const closeModal = useCallback(() => {
    setActiveCert(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeCert]);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="section-bg-gradient"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-[var(--space-block)]">
          <span className="section-label block mb-4 gsap-reveal font-en-body">
            {t('certificates.label')}
          </span>
          <h2 className="section-title gsap-reveal font-en-heading">
            {t('certificates.title')}
          </h2>
        </div>

        {/* Image-only grid — 4 columns, no frames, no text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="gsap-reveal group overflow-hidden"
              data-cert-index={index}
              onClick={() => openModal(cert)}
              role={cert.imageUrl ? 'button' : undefined}
              aria-label={cert.imageUrl ? `View ${cert.title}` : undefined}
              tabIndex={cert.imageUrl ? 0 : undefined}
              onKeyDown={(e) => { if (e.key === 'Enter') openModal(cert); }}
              style={{ cursor: cert.imageUrl ? 'zoom-in' : 'default' }}
            >
              {cert.imageUrl ? (
                <div 
                  className="relative overflow-hidden flex items-center justify-center rounded-md border border-[var(--glass-border)] bg-[var(--glass-bg)]"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 sm:p-4 block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{
                      filter: 'brightness(0.92)',
                      transition: 'transform 0.7s ease, filter 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1)')}
                    onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(0.92)')}
                  />
                  {/* Subtle zoom-in icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full flex items-center justify-center"
                  style={{ aspectRatio: '4/3', backgroundColor: 'var(--glass-bg)' }}
                >
                  <span className="text-[var(--text-muted)] font-[family-name:var(--font-body)] text-sm uppercase tracking-widest">
                    Certificate
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm font-[family-name:var(--font-body)]"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              {t('contact.exit')}
            </button>

            {/* Full image — no frame */}
            <img
              src={activeCert.imageUrl}
              alt={activeCert.title}
              className="w-full h-auto object-contain max-h-[85vh] shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

