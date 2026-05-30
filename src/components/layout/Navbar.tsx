'use client';

import { useState, useEffect, useRef } from 'react';
import { navItems } from '@/data/navigation';
import { useLocale, useTranslation } from '@/hooks';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'th' : 'en');
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#0F0F0F]/85 backdrop-blur-xl border-b border-[var(--glass-border)]'
        : 'bg-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            <h5 className="font-[family-name:var(--font-heading)] font-en-heading text-xl tracking-wider text-white hover:text-[var(--accent)] hover:drop-shadow-[0_0_8px_rgba(242,140,166,0.5)] transition-all duration-300 inline-block">
              THANAKHON
            </h5>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const key = item.href.replace('#', '').replace(/-/g, '_');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-[15px] font-[family-name:var(--font-body)] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
                >
                  {t(`nav.${key}`)}
                </a>
              );
            })}

            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="ml-2 px-3 py-1.5 border border-[var(--border)] rounded text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-white hover:border-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span className={locale === 'en' ? 'text-white font-bold' : 'opacity-50'}>EN</span>
              <span className="opacity-30">|</span>
              <span className={locale === 'th' ? 'text-white font-bold' : 'opacity-50'}>TH</span>
            </button>
          </div>

          {/* Mobile Actions (Switcher + Menu toggle) */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="px-2.5 py-1.5 border border-[var(--border)] rounded text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-white hover:border-white transition-all duration-300 flex items-center gap-1 cursor-pointer"
            >
              <span className={locale === 'en' ? 'text-white font-bold' : 'opacity-50'}>EN</span>
              <span className="opacity-30">|</span>
              <span className={locale === 'th' ? 'text-white font-bold' : 'opacity-50'}>TH</span>
            </button>

            {/* Menu Button */}
            <button
              className="text-white p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-px bg-white transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                />
                <span
                  className={`block h-px bg-white transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''
                    }`}
                />
                <span
                  className={`block h-px bg-white transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile backdrop overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 bg-black/40 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-[var(--glass-border)] ${isMobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="section-container pt-4 pb-8 flex flex-col gap-5">
          {navItems.map((item, index) => {
            const key = item.href.replace('#', '').replace(/-/g, '_');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-[family-name:var(--font-body)] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-white transition-all duration-300 hover:translate-x-2 hover:text-[var(--accent)]"
                style={{
                  opacity: isMobileOpen ? 1 : 0,
                  transform: isMobileOpen ? 'translateY(0)' : 'translateY(-8px)',
                  transition: `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s, color 0.3s ease`,
                }}
              >
                {t(`nav.${key}`)}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
