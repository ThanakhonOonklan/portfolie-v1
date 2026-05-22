'use client';

import { useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);

  // Placeholders for your links. You can replace the '#' with your actual links anytime!
  const socialLinks = {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    github: '#',
    email: 'mailto:your.email@example.com',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
      }}
    >
      <div className="section-container">
        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Left Side: Circular Avatar Image with Spinning Text Badge */}
          <div className="col-span-12 md:col-span-6 flex justify-center items-center relative">
            <div className="relative w-[380px] h-[380px] flex items-center justify-center">

              {/* Infinite Rotating Circular Text Path SVG */}
              <div className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite] select-none pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="contactTextCircle"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                    />
                  </defs>
                  <text className="fill-[color:var(--accent)] opacity-60 font-[family-name:var(--font-body)] text-[9.5px] uppercase tracking-[0.25em] font-medium">
                    <textPath href="#contactTextCircle" startOffset="0%">
                      • CONTACT • CONTACT • CONTACT • CONTACT • CONTACT • CONTACT
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Central Circular Avatar Wrapper */}
              <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-white/10 bg-neutral-900 shadow-2xl relative z-10 group">
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--accent)]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

                {/* The Avatar Image */}
                {!imgError ? (
                  <img
                    src="/images/profile/contact.png"
                    alt="Contact Thanakhon"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                ) : (
                  /* Fallback Gradient matching profile visual core online */
                  <div className="w-full h-full bg-gradient-to-br from-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-4">
                    <svg className="w-10 h-10 text-white/30 mb-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-[9px] text-[var(--accent)] font-[family-name:var(--font-body)] uppercase tracking-wider text-center">
                      Ready for Photo
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Text & Links (Facebook, IG, LinkedIn, GitHub, Email) */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <span className="section-label block mb-4 text-[var(--accent)] font-semibold tracking-[0.2em] gsap-reveal">
              GET IN TOUCH
            </span>

            {/* Bold Heading in Anton font */}
            <h2
              className="font-[family-name:var(--font-heading)] text-white mb-6 tracking-wide gsap-reveal"
              style={{ fontSize: 'var(--text-display)', lineHeight: 0.95 }}
            >
              CONTACT
            </h2>

            <p
              className="text-[var(--text-secondary)] font-[family-name:var(--font-body)] mb-10 max-w-md leading-relaxed gsap-reveal"
              style={{ fontSize: 'var(--text-body)' }}
            >
              Interested in working together? Feel free to reach out through any of the channels below — I&apos;m always open to great collaborations and new opportunities.
            </p>

            {/* Clickable Social Icons (Facebook, IG, LinkedIn, GitHub, Email) */}
            <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start gsap-reveal">

              {/* Email */}
              <a
                href={socialLinks.email}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white hover:bg-white/[0.08] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                title="Email"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white hover:bg-white/[0.08] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white hover:bg-white/[0.08] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white hover:bg-white/[0.08] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white hover:bg-white/[0.08] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                title="GitHub"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
