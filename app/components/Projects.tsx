'use client';

import { useEffect, useRef, useState } from 'react';
import { Project } from '@/types';
import { projects } from '@/data/projects';
import ClickSpark from './ClickSpark';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative"
      >
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Projects
          </h2>
          <p className="text-center text-zinc-400 mb-12 text-lg">
            Some of my recent work and side projects
          </p>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-zinc-800 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-foreground bg-zinc-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-zinc-500">+{project.techStack.length - 3}</span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-foreground hover:underline flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-foreground hover:underline flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </ClickSpark>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-zinc-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-foreground">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-zinc-500 hover:text-foreground"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-white text-6xl font-bold">
                {selectedProject.title.charAt(0)}
              </span>
            </div>

            <p className="text-lg text-zinc-400 mb-6">
              {selectedProject.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-foreground bg-zinc-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

