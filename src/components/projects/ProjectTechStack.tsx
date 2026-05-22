'use client';

interface ProjectTechStackProps {
  techStack: string[];
  features: string[];
  results: string[];
}

export function ProjectTechStack({ techStack, features, results }: ProjectTechStackProps) {
  return (
    <>
      {/* Tech Stack */}
      <div className="mb-8">
        <span className="section-label block mb-4">Tech Stack</span>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[var(--text-caption)] text-[var(--text-secondary)] font-[family-name:var(--font-body)] px-3 py-1.5"
              style={{
                border: '1px solid var(--border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <span className="section-label block mb-4">Key Features</span>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]"
            >
              <span className="text-[var(--accent)] mt-1.5 shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="mb-10">
        <span className="section-label block mb-4">Results</span>
        <div className="space-y-2">
          {results.map((result, i) => (
            <p
              key={i}
              className="text-sm text-white font-[family-name:var(--font-body)] font-medium"
            >
              ↗ {result}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
