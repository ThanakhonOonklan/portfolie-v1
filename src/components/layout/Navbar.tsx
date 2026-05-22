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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-white hover:text-[var(--accent)] transition-colors duration-300"
          >
            THANAKHON
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const key = item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-[var(--text-caption)] font-[family-name:var(--font-body)] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
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
                  className={`block h-px bg-white transition-all duration-300 ${
                    isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block h-px bg-white transition-all duration-300 ${
                    isMobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-px bg-white transition-all duration-300 ${
                    isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container pb-8 flex flex-col gap-6">
          {navItems.map((item) => {
            const key = item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-[family-name:var(--font-body)] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
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
