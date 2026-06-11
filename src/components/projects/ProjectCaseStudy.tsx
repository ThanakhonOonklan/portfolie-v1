'use client';

import { useRef, useEffect } from 'react';
import type { Project } from '@/types';
import { ProjectGallery } from './ProjectGallery';
import { ProjectTechStack } from './ProjectTechStack';
import { useLocale } from '@/hooks';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { registerGSAP } from '@/lib/gsap';

interface ProjectCaseStudyProps {
  project: Project;
  index: number;
}

export function ProjectCaseStudy({ project, index }: ProjectCaseStudyProps) {
  const isEven = index % 2 === 1;
  const projectNumber = String(index + 1).padStart(2, '0');
  const { isEN } = useLocale();
  const articleRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const ctx = gsap.context(() => {
      // Smooth fadeUp reveal for the image on scroll
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: articleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Resolve locale-aware content (fallback to Thai if EN fields are not provided)
  const subtitle = isEN && project.subtitleEn ? project.subtitleEn : project.subtitle;
  const whatIDid = isEN && project.whatIDidEn ? project.whatIDidEn : project.whatIDid;
  const features = isEN && project.featuresEn ? project.featuresEn : project.features;
  const results = isEN && project.resultsEn ? project.resultsEn : project.results;

  return (
    <article
      ref={articleRef}
      className="gsap-reveal"
      data-project-index={index}
    >
      {/* Project grid — alternating layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Image Column */}
        <div
          ref={imageRef}
          className={`lg:col-span-7 lg:sticky lg:top-28 self-start z-10 min-w-0 ${isEven ? 'lg:order-2' : 'lg:order-1'
            }`}
        >
          <ProjectGallery
            projectNumber={projectNumber}
            images={project.images}
            imageUrl={project.imageUrl}
            uiPreviewUrl={project.uiPreviewUrl}
          />
        </div>

        {/* Content Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-center min-w-0 ${isEven ? 'lg:order-1' : 'lg:order-2'
            }`}
        >
          {/* Number + Year */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] font-medium tracking-widest font-en-body">
              {projectNumber}
            </span>
            <span className="w-8 h-px bg-[var(--text-muted)]" />
            <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] tracking-widest font-en-body">
              {project.year}
            </span>
          </div>

          {/* Title — always EN font */}
          <h3
            className="font-[family-name:var(--font-heading)] text-white mb-6 font-en-heading"
            style={{ fontSize: 'var(--text-headline)' }}
          >
            {project.title}
          </h3>

          {/* Subtitle / Short Description */}
          <p className="text-[var(--text-body)] text-[var(--accent)] mb-10 font-[family-name:var(--font-body)]">
            {subtitle}
          </p>

          {/* What I Did, Tech Stack, Features, Results */}
          <ProjectTechStack
            whatIDid={whatIDid}
            techStack={project.techStack}
            features={features}
            results={results}
          />

          {/* CTA Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button
                variant="outline"
                className="!h-12 sm:!h-10 !px-5 sm:!px-6 !py-0 inline-flex items-center justify-center border border-[var(--accent)]/30 bg-[var(--glass-bg)] text-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--glow-accent)] text-xs sm:text-[10px] font-semibold uppercase tracking-[0.15em] rounded-sm transition-all duration-300 cursor-pointer overflow-hidden font-en-body"
                onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
              >
                {/* Background sliding accent highlight */}
                <span className="absolute inset-0 w-0 bg-[var(--accent)] transition-all duration-300 ease-out group-hover/button:w-full -z-10 opacity-[0.08]" />
                
                <span>View Live</span>
                
                {/* Interactive diagonal arrow icon */}
                <svg
                  className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 text-[var(--accent)] group-hover/button:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
