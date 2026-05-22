'use client';

import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
      }}
    >
      <div className="section-container">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Image / Visual Area */}
          <div className="col-span-12 lg:col-span-5">
            <div
              ref={imageRef}
              className="gsap-reveal sticky top-27 w-full max-w-[360px] xl:max-w-[420px] mx-auto lg:mx-0"
            >
              {/* Image Placeholder */}
              <div
                className="w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl relative group bg-neutral-900"
                style={{
                  aspectRatio: '3 / 4',
                }}
              >
                {/* Tech scanline overlay to match the premium theme */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-10 opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  <span className="text-[11px] text-white/50 tracking-[0.25em] font-[family-name:var(--font-body)] uppercase mb-2 z-10">
                    Portrait
                  </span>
                  <span className="text-[8px] text-[var(--accent)] tracking-[0.15em] font-[family-name:var(--font-body)] uppercase z-10 opacity-80">
                    Ready for Photo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" ref={storyRef}>
            {/* Section Label */}
            <span className="section-label block mb-6 gsap-reveal">About Me</span>

            {/* Personal Story */}
            <div className="mb-12 gsap-reveal">
              <p
                className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                style={{ fontSize: 'var(--text-body)' }}
              >
                I&apos;m a passionate frontend developer with a deep love for
                creating innovative digital experiences. With expertise in modern
                web technologies, I bring ideas to life through clean code,
                thoughtful design, and purposeful motion.
              </p>
              <p
                className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                style={{ fontSize: 'var(--text-body)' }}
              >
                My journey in tech started with curiosity and has evolved into a
                career focused on building user-centric applications that make a
                real difference. I enjoy tackling complex problems and
                transforming them into elegant, interactive solutions.
              </p>
              <p
                className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                style={{ fontSize: 'var(--text-body)' }}
              >
                Every project I take on is an opportunity to push creative
                boundaries — whether it&apos;s through scroll-driven storytelling,
                micro-interactions, or immersive 3D experiences.
              </p>
              <p
                className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                style={{ fontSize: 'var(--text-body)' }}
              >
                On the technical side, I specialize in building scalable web architectures using React, Next.js, and TypeScript. I have a deep appreciation for semantic HTML, modern styling tools like Tailwind CSS, and optimization techniques that keep bundle sizes small and render times blazing fast.
              </p>
              <p
                className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                style={{ fontSize: 'var(--text-body)' }}
              >
                I believe that motion design is a critical aspect of modern user experience. By leveraging libraries like GSAP, ScrollTrigger, and smooth scroll adapters like Lenis, I create interfaces that respond organically to user behavior, establishing a seamless link between navigation and visual storytelling.
              </p>
              <p
                className="text-[var(--text-secondary)] leading-relaxed font-[family-name:var(--font-body)]"
                style={{ fontSize: 'var(--text-body)' }}
              >
                Collaboration is at the core of my workflow. I enjoy partnering with talented designers to translate Figma layouts into pixel-perfect code, and syncing with backend developers to design robust API integrations. I'm always looking to learn, explore new technologies, and push the limits of what is possible on the web.
              </p>
            </div>

            {/* Design Philosophy */}
            <div className="mb-12 gsap-reveal">
              <span className="section-label block mb-6">Design Philosophy</span>
              <blockquote
                className="text-white leading-relaxed font-[family-name:var(--font-body)] italic pl-6"
                style={{
                  fontSize: 'var(--text-title)',
                  borderLeft: '2px solid var(--accent)',
                }}
              >
                &ldquo;Great interfaces don&apos;t just look beautiful — they feel
                alive. Every pixel, every transition, every interaction should
                serve a purpose and tell a story.&rdquo;
              </blockquote>
            </div>

            {/* Career Goals */}
            <div className="gsap-reveal">
              <span className="section-label block mb-6">Looking Forward</span>
              <p
                className="text-[var(--text-secondary)] leading-relaxed font-[family-name:var(--font-body)]"
                style={{ fontSize: 'var(--text-body)' }}
              >
                I&apos;m constantly exploring the intersection of design and
                engineering — from WebGL and 3D on the web to advanced animation
                systems. My goal is to create digital experiences that are not
                just functional, but genuinely memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
