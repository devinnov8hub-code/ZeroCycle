
'use client';

import { useEffect, useState } from 'react';
import Logo1 from "../assets/Brand_logo_1.png";
import Logo2 from "../assets/Brand_logo_2.png";
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Specifications', href: '#specifications' },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveLink(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed inset-x-0 top-4 z-[100] px-4">
        <nav className="
          mx-auto flex h-[68px] max-w-[1120px]
          items-center justify-between
          rounded-full border border-black/[0.07]
          bg-white/75 px-5 sm:px-7
          text-gray-900
          shadow-[0_8px_40px_rgba(0,0,0,0.07)]
          backdrop-blur-2xl
        ">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => {
              setActiveLink('#home');
              setMenuOpen(false);
            }}
            className="flex items-center gap-2.5"
          >
            

            <span className="text-[17px] font-bold tracking-[0.12em]">
             <Image 
             src={Logo2}
             alt='zerocycle logo'
             width={150}
             loading="eager"
             />
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`
                    font-tip text-[15px] font-medium transition-colors duration-300
                    ${
                      isActive
                        ? 'text-brand-primary'
                        : 'text-black hover:text-brand-primary'
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`
                h-[1.5px] w-5 bg-gray-800 transition-all duration-300
                ${menuOpen ? 'translate-y-[3.25px] rotate-45' : ''}
              `} />
              <span className={`
                h-[1.5px] w-5 bg-gray-800 transition-all duration-300
                ${menuOpen ? '-translate-y-[3.25px] -rotate-45' : ''}
              `} />
            </span>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0 z-[90] flex flex-col
          justify-between bg-white/95 px-7
          pb-10 pt-32 text-gray-900
          backdrop-blur-2xl transition-all duration-500 md:hidden
          ${
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-4 opacity-0'
          }
        `}
      >
        <div>
          <p className="
            mb-7 text-xs font-semibold uppercase
            tracking-[0.3em] text-black
          ">
            Navigation
          </p>

          {navLinks.map((link, index) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => {
                  setActiveLink(link.href);
                  setMenuOpen(false);
                }}
                style={{
                  transitionDelay: menuOpen ? `${index * 70}ms` : '0ms',
                }}
                className={`
                  group flex items-center justify-between
                  border-b border-gray-100 py-5
                  font-tip text-3xl font-medium tracking-tight
                  transition-colors duration-300
                  ${
                    isActive
                      ? 'text-brand-primary'
                    : 'text-black hover:text-brand-primary'
                  }
                `}
              >
                {link.label}
                {/**<span className="text-xl">↗</span> */}
              </a>
            );
          })}
        </div>

        <div className="
          flex items-center justify-between
          border-t border-gray-100 pt-6
        ">
          
          <span className="text-xs font-bold tracking-widest text-brand-primary">
            ZeroCycle
          </span>
        </div>
      </div>
    </>
  );
}
