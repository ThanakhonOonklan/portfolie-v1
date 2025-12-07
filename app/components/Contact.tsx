'use client';

import { useState, useEffect, useRef } from 'react';
import { socialLinks } from '@/data/social-links';
import ClickSpark from './ClickSpark';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative"
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
          Get In Touch
        </h2>
        <p className="text-center text-zinc-400 mb-16 text-lg">
          I&apos;d love to hear from you. Send me a message!
        </p>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-800 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-800 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-800 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4 text-zinc-400">
                <div className="flex items-center">
                  <span className="mr-4 text-2xl">📧</span>
                  <a
                    href="mailto:your.email@example.com"
                    className="hover:text-foreground transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-2xl">📱</span>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-foreground transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="mr-4 text-2xl">📍</span>
                  <span>Your City, Country</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-lg text-foreground hover:bg-zinc-800 transition-all transform hover:scale-110 border border-zinc-800"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </ClickSpark>
    </section>
  );
}

