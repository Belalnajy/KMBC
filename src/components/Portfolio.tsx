'use client';

import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const PROJECTS = [
  {
    category: 'Infrastructure',
    tagline: 'We build lifetime buildings.',
    description:
      'Large-scale industrial facilities engineered with precision structural systems to international standards.',
    image: '/images/portfolio-infrastructure.png',
  },
  {
    category: 'Commercial',
    tagline: 'We build for the Future.',
    description:
      'Modern commercial spaces designed for functionality, aesthetics, and long-term value.',
    image: '/images/portfolio-commercial.png',
  },
  {
    category: 'Civil Works',
    tagline: 'Infrastructure is our Profession.',
    description:
      'Critical civil engineering projects from bridges to transport hubs that connect communities.',
    image: '/images/portfolio-civil.png',
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px] -translate-y-1/2" />

      <div className="section-container">
        <ScrollReveal className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col items-center text-center">
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase block mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
              Our <span className="text-accent">Portfolio</span>
            </h2>
            <div className="w-16 h-[2px] bg-accent/40" />
          </div>
        </ScrollReveal>

        {/* Bento layout — featured left, 2 stacked right */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Featured card */}
          <ScrollReveal className="md:w-[58%] h-[400px] sm:h-[420px] md:h-[540px]">
            <TiltCard project={PROJECTS[0]} size="large" />
          </ScrollReveal>

          {/* Right column — 2 stacked */}
          <div className="md:w-[42%] flex flex-col gap-5">
            <ScrollReveal delay={0.15} className="h-[340px] sm:h-[320px] md:flex-1">
              <TiltCard project={PROJECTS[1]} size="small" />
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="h-[340px] sm:h-[320px] md:flex-1">
              <TiltCard project={PROJECTS[2]} size="small" />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.4} className="mt-12 sm:mt-16 text-center">
          <p className="text-text-secondary text-sm mb-5">
            Interested in starting a project?
          </p>
          <a
            href="https://wa.me/96551227338"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-accent/30 text-accent text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-accent/10 hover:border-accent/60 transition-all duration-300">
            Discuss Your Project
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TiltCard({
  project,
  size,
}: {
  project: (typeof PROJECTS)[number];
  size: 'large' | 'small';
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 150, damping: 20 });
  const sy = useSpring(my, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(sy, [0, 1], [3, -3]);
  const rotateY = useTransform(sx, [0, 1], [-3, 3]);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const r = cardRef.current?.getBoundingClientRect();
      if (!r) return;
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative w-full h-full rounded-md overflow-hidden copper-border copper-glow-hover cursor-pointer will-change-transform">
      <Image
        src={project.image}
        alt={project.category}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes={size === 'large' ? '(max-width: 768px) 100vw, 58vw' : '(max-width: 768px) 100vw, 42vw'}
      />

      {/* Overlay — desktop: hover reveal, mobile: always show content */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent md:from-[#0A1128]/90 md:via-[#0A1128]/20 md:to-transparent md:transition-opacity md:duration-500 md:group-hover:opacity-0" />

      {/* Desktop hover overlay — slides up */}
      <div className="hidden md:block absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/95 to-[#0A1128]/80 backdrop-blur-sm" />
      </div>

      {/* Category badge */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#0A1128] bg-accent rounded-sm shadow-lg">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0A1128]/30" />
          {project.category}
        </span>
      </div>

      {/* Mobile content — always visible */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="w-8 h-[2px] bg-accent/60 mb-3" />
        <h3 className={`font-heading font-bold text-foreground leading-tight mb-2 ${
          size === 'large' ? 'text-lg' : 'text-base'
        }`}>
          {project.tagline}
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed mb-4">
          {project.description}
        </p>
        <a
          href="https://wa.me/96551227338"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-[#0A1128] text-[10px] font-bold uppercase tracking-[0.15em] rounded-sm">
          Get a Quote
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Desktop default content — fades out on hover */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
        <div className="w-8 h-[2px] bg-accent/60 mb-3" />
        <h3 className={`font-heading font-bold text-foreground leading-tight ${
          size === 'large' ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg md:text-xl'
        }`}>
          {project.tagline}
        </h3>
      </div>

      {/* Desktop hover content — slides up */}
      <div className="hidden md:flex absolute inset-0 z-20 flex-col justify-center items-start p-6 md:p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-100">
        <div className="w-10 h-[2px] bg-accent mb-4" />
        <h3 className={`font-heading font-bold text-foreground leading-tight mb-2 ${
          size === 'large' ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg md:text-xl'
        }`}>
          {project.tagline}
        </h3>
        <p className={`text-text-secondary leading-relaxed mb-5 max-w-md ${
          size === 'large' ? 'text-sm md:text-base' : 'text-sm'
        }`}>
          {project.description}
        </p>
        <a
          href="https://wa.me/96551227338"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-[#0A1128] text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-accent-light transition-colors duration-300 shadow-lg">
          Get a Quote
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-accent/20 md:group-hover:border-accent/50 transition-colors duration-500 z-20" />
    </motion.div>
  );
}
