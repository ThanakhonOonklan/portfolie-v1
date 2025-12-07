'use client';

import { useState, useEffect } from 'react';
import { navItems } from '@/data/nav-items';
import ClickSpark from './ClickSpark';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="text-xl md:text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-foreground'
                    : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-foreground p-2"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </ClickSpark>
    </nav>
  );
}

