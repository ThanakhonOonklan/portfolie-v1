'use client';

interface ProjectGalleryProps {
  projectNumber: string;
  imageUrl?: string;
  uiPreviewUrl?: string;
}

export function ProjectGallery({ projectNumber, imageUrl, uiPreviewUrl }: ProjectGalleryProps) {
  return (
    <div>
      {/* Main Image Area */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: '16 / 10',
          backgroundColor: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Placeholder — future: actual project screenshot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-[family-name:var(--font-heading)] text-[var(--text-muted)]"
            style={{ fontSize: 'var(--text-display)' }}
          >
            {projectNumber}
          </span>
        </div>
      </div>

      {/* UI Preview — overlapping smaller image */}
      <div
        className="relative -mt-12 ml-8 lg:ml-16 w-2/3 max-w-[400px] overflow-hidden shadow-2xl"
        style={{
          aspectRatio: '16 / 10',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] uppercase tracking-widest">
            UI Preview
          </span>
        </div>
      </div>
    </div>
  );
}
