'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslation } from '@/hooks';
import { gsap } from 'gsap';
import { registerGSAP } from '@/lib/gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const captionRef = useRef<HTMLSpanElement>(null);
  const nameLine1Ref = useRef<HTMLSpanElement>(null);
  const nameLine2Ref = useRef<HTMLSpanElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const portraitImageRef = useRef<HTMLImageElement>(null);

  const [imgError, setImgError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    registerGSAP();

    const ctx = gsap.context(() => {
      // 1. Staggered reveal for Hero text on load
      const revealElements = [
        captionRef.current,
        nameLine1Ref.current,
        nameLine2Ref.current,
        introRef.current,
        ctaRef.current,
        socialRef.current,
      ].filter(Boolean);

      gsap.fromTo(
        revealElements,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );

      // 2. Portrait wrapper entry animation
      if (portraitWrapperRef.current) {
        gsap.fromTo(
          portraitWrapperRef.current,
          {
            opacity: 0,
            scale: 0.95,
            x: 20,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.4,
            delay: 0.3,
            ease: 'power4.out',
          }
        );

        // 3. Scroll-linked Parallax for Portrait Wrapper relative to scroll depth down to #projects
        gsap.fromTo(
          portraitWrapperRef.current,
          {
            y: 0,
          },
          {
            y: 120,
            ease: 'none',
            scrollTrigger: {
              trigger: '#hero',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // 4. Parallax scroll-effect on the inner image/abstract element itself
      if (portraitImageRef.current) {
        gsap.fromTo(
          portraitImageRef.current,
          {
            yPercent: -12,
            scale: 1.15,
          },
          {
            yPercent: 12,
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: '#hero',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // 5. Scroll indicator fade out on scroll
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          opacity: 0,
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: '30% top',
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background visual area — placeholder for future 3D/canvas/video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-12 gap-4">
          {/* Left content — spans 7 columns */}
          <div className="col-span-12 lg:col-span-7 flex flex-col" style={{ paddingTop: '20vh' }}>
            {/* Caption label */}
            <span
              ref={captionRef}
              className="section-label mb-6 gsap-reveal"
            >
              {t('hero.caption')}
            </span>

            {/* Name — oversized Anton */}
            <h1 className="mb-8 gsap-reveal">
              <span
                ref={nameLine1Ref}
                className="block"
                style={{ fontSize: 'var(--text-hero)', lineHeight: 0.9 }}
              >
                THANAKHON
              </span>
              <span
                ref={nameLine2Ref}
                className="block"
                style={{
                  fontSize: 'var(--text-hero)',
                  lineHeight: 0.9,
                  color: 'var(--accent)',
                }}
              >
                OONKLAN
              </span>
            </h1>
          </div>

          {/* Right side — Portrait Image Area with Scroll-triggered Parallax */}
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end mt-12 lg:mt-0 relative z-10">
            <div
              ref={portraitWrapperRef}
              className="relative w-full max-w-[380px] aspect-[3/4] overflow-hidden border border-white/10 bg-black/40 group rounded-sm shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/20"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255, 255, 255, 0.02)',
              }}
            >
              {/* Outer Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Cinematic Scanlines / Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none z-20 opacity-45" />

              {/* Dynamic Tech Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30 z-20 pointer-events-none group-hover:border-[var(--accent)] transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30 z-20 pointer-events-none group-hover:border-[var(--accent)] transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30 z-20 pointer-events-none group-hover:border-[var(--accent)] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30 z-20 pointer-events-none group-hover:border-[var(--accent)] transition-colors duration-300" />

              {/* Image Mode */}
              {!imgError ? (
                <img
                  ref={portraitImageRef}
                  src="/images/profile/portrait.png"
                  alt="Thanakhon Oonklan Portrait"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center grayscale contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-110"
                />
              ) : (
                /* Fallback Cinematic Abstract Tech visual */
                <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 to-black p-8">
                  {/* Glowing background circles */}
                  <div className="absolute w-[200px] h-[200px] rounded-full bg-[var(--accent)]/10 blur-[80px] animate-pulse" />

                  {/* Digital cyber grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                  {/* Aesthetic geometric elements */}
                  <svg className="w-20 h-20 text-white/20 mb-6 relative z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_120s_linear_infinite]" />
                    <circle cx="50" cy="50" r="30" strokeWidth="1.5" strokeDasharray="10 5" className="animate-[spin_60s_linear_infinite_reverse] text-[var(--accent)]/40" />
                    <polygon points="50,25 72,65 28,65" strokeWidth="1" />
                    <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>

                  <span className="text-[11px] text-white/60 tracking-[0.2em] font-[family-name:var(--font-body)] uppercase z-10 text-center mb-1">
                    Visual Core Online
                  </span>
                  <span className="text-[9px] text-[var(--accent)] tracking-[0.1em] font-[family-name:var(--font-body)] uppercase z-10 text-center opacity-80">
                    Awaiting Portrait Image
                  </span>
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />

              {/* Technical Labels Overlay */}
              <div className="absolute top-6 left-6 text-[9px] text-white/50 tracking-[0.2em] font-[family-name:var(--font-body)] uppercase z-20 pointer-events-none">
                SYS.LOC // TH-BKK
              </div>

              <div className="absolute bottom-6 left-6 flex flex-col gap-1 z-20 pointer-events-none">
                <span className="text-[12px] text-white tracking-[0.1em] font-[family-name:var(--font-heading)] uppercase">
                  THANAKHON OONKLAN
                </span>
                <span className="text-[9px] text-[var(--accent)] tracking-[0.15em] font-[family-name:var(--font-body)] uppercase font-semibold">
                  DEVELOPER / DESIGNER
                </span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
