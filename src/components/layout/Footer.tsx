export default function Footer() {
  return (
    <footer
      className="py-12 text-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <div className="divider mb-12" />
        <p className="text-[var(--text-caption)] text-[var(--text-muted)] font-[family-name:var(--font-body)] tracking-widest uppercase">
          © {new Date().getFullYear()} Thanakhon Oonklan
        </p>
      </div>
    </footer>
  );
}
