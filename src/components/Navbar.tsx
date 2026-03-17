'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,17,40,0.92)] backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}>
      <div className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/images/KMBC-logo-1.png"
            alt="Kuwait Modern Building Company logo"
            width={72}
            height={72}
            className="rounded-md bg-white/90 p-1.5 logo-copper-filter transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-bold tracking-wider text-accent">
              KMBC
            </span>
            <span className="font-heading text-lg font-bold tracking-wider text-foreground">
              {' '}
              Co.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-widest uppercase text-text-secondary hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/96551227338"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-accent text-[#0A1128] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_20px_rgba(212,129,102,0.3)]">
            Get in Touch
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-accent"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-accent"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-accent"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { height: 'auto', opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="md:hidden overflow-hidden bg-[rgba(10,17,40,0.98)] backdrop-blur-xl border-t border-border">
        <div className="section-container py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium tracking-widest uppercase text-text-secondary hover:text-accent transition-colors py-2">
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/96551227338"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-6 py-3 bg-accent text-[#0A1128] text-sm font-bold uppercase tracking-widest rounded-sm text-center">
            Get in Touch
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
