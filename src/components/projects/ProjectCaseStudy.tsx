'use client';

import type { Project } from '@/types';
import { ProjectGallery } from './ProjectGallery';
import { ProjectTechStack } from './ProjectTechStack';

interface ProjectCaseStudyProps {
  project: Project;
  index: number;
}

export function ProjectCaseStudy({ project, index }: ProjectCaseStudyProps) {
  const isEven = index % 2 === 1;
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article
      className="gsap-reveal"
      data-project-index={index}
    >
      {/* Project grid — alternating layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Image Column */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
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
          className={`lg:col-span-5 flex flex-col justify-center ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Number + Year */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] font-medium tracking-widest">
              {projectNumber}
            </span>
            <span className="w-8 h-px bg-[var(--text-muted)]" />
            <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] tracking-widest">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-[family-name:var(--font-heading)] text-white mb-3"
            style={{ fontSize: 'var(--text-headline)' }}
          >
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-[var(--text-body)] text-[var(--accent)] mb-6 font-[family-name:var(--font-body)]">
            {project.subtitle}
          </p>

          {/* Summary */}
          <p className="text-[var(--text-body)] text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]">
            {project.summary}
          </p>

          {/* Problem & Solution */}
          <div className="space-y-6 mb-8">
            <div>
              <span className="section-label block mb-2">Problem</span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
                {project.problem}
              </p>
            </div>
            <div>
              <span className="section-label block mb-2">Solution</span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="mb-8">
            <span className="section-label block mb-4">Process</span>
            <ol className="space-y-2">
              {project.process.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]"
                >
                  <span className="text-[var(--text-muted)] font-medium shrink-0 mt-px">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tech Stack, Features, Results */}
          <ProjectTechStack
            techStack={project.techStack}
            features={project.features}
            results={project.results}
          />

          {/* CTA Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white text-white text-sm font-[family-name:var(--font-body)] font-medium uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] text-sm font-[family-name:var(--font-body)] font-medium uppercase tracking-[0.1em] hover:border-white hover:text-white transition-all duration-300 cursor-pointer"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
