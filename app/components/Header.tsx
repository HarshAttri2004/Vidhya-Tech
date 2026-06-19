'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/', match: '/' },
  { label: 'Services', href: '/services', match: '/services' },
  { label: 'Design', href: '/design', match: '/design' },
  { label: 'Portfolio', href: '/portfolio', match: '/portfolio' },
  { label: 'Pricing', href: '/pricing', match: '/pricing' },
  { label: 'Contact', href: '/contact', match: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect detect karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030303]/80 backdrop-blur-md border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,.35)] py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          {/* Logo Replace */}
          <div className="relative w-10 h-10 overflow-hidden rounded-md group-hover:scale-105 transition-transform">
             <Image 
                src="/images/logo.jpg" 
                alt="Vidhya Tech Logo" 
                fill
                className="object-cover"
                sizes="40px"
             />
          </div>
          <span className="text-xl font-black text-white tracking-wide">
            Vidhya <span className="text-[#ffcc00]">Tech</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white md:hidden hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } absolute inset-x-5 top-[80px] flex-col gap-1 rounded-xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl p-4 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:backdrop-blur-none md:p-0 md:shadow-none lg:gap-9`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.match || (pathname === '/' && item.label === 'Home');

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative rounded-md px-3 py-2 text-sm font-bold transition-colors md:px-0 ${
                  isActive ? 'text-[#ffcc00]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-3 h-[2px] bg-[#ffcc00] transition-all duration-300 md:left-0 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            // 👇 Yahan se extra shadow nikaal di hai taaki glow/rays na aayein
            className="vt-gold-button mt-4 px-6 py-2.5 text-center text-sm font-black md:mt-0 rounded-lg hover:scale-105 transition-transform"
          >
            Get In Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}