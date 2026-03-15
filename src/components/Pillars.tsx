'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

const PILLARS = [
  {
    number: '01',
    title: 'Technical Precision',
    description:
      'High-end BIM modeling for rigid technical specs. Every component is engineered to exact tolerances.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Elite Safety',
    description:
      'Zero-compromise safety protocols strictly adhered to on all sites. People first, always.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Sustainability',
    description:
      'Eco-engineered materials and energy-efficient systems integrated into every project lifecycle.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2a3 3 0 00-3 3v3h6V5a3 3 0 00-3-3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'On-time Delivery',
    description:
      'Rigid project lifecycle management for multi-phase milestones. Delivered on schedule.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function AnimateIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 20, delay }}
      className={className}>
      {children}
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-[100px]" />

      <div className="section-container">
        <AnimateIn className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase block mb-4">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            The Four <span className="text-accent">Pillars</span>
          </h2>
          <div className="w-16 h-[2px] bg-accent/40 mx-auto" />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, i) => (
            <AnimateIn key={pillar.number} delay={i * 0.12}>
              <div className="group relative p-6 sm:p-7 rounded-md border border-border bg-card/40 backdrop-blur-sm hover:border-border-hover hover:bg-card/70 transition-all duration-500 h-full copper-glow-hover">
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-heading font-black text-accent/[0.05] select-none leading-none">
                  {pillar.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center mb-5 text-accent/60 group-hover:text-accent group-hover:border-accent/40 transition-all duration-400">
                  {pillar.icon}
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2.5 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500 rounded-b-md" />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
