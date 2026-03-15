'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const SPRING = { type: 'spring' as const, stiffness: 60, damping: 20 };

const SERVICES = [
  {
    id: 'industrial',
    number: '01',
    title: 'Industrial Infrastructure',
    short: 'Factories & Warehouses',
    description:
      'Precision engineering for large-scale industrial facilities. We design and construct warehouses, factories, and processing plants with cutting-edge structural systems that meet the highest international standards.',
    image: '/images/service-industrial.png',
  },
  {
    id: 'residential',
    number: '02',
    title: 'Residential Development',
    short: 'Villas & Apartments',
    description:
      'High-end residential spaces blending aesthetics with robust foundations. From luxury villas to modern apartment complexes, we deliver living spaces that combine comfort with structural integrity.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 'consulting',
    number: '03',
    title: 'Technical Consulting',
    short: 'Analysis & Strategy',
    description:
      'Expert analysis and strategic planning for complex projects. Our consulting team provides feasibility studies, structural assessments, and project optimization to ensure your investment delivers maximum returns.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'civil',
    number: '04',
    title: 'Civil Infrastructure',
    short: 'Bridges & Transport',
    description:
      'Developing critical infrastructure from bridges to transport hubs. We specialize in large-scale civil engineering projects that shape communities and connect regions.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    id: 'pm',
    number: '05',
    title: 'Project Management',
    short: 'End-to-End Delivery',
    description:
      'End-to-end management ensuring efficiency and safety compliance. Our project managers oversee every phase from concept to completion, keeping timelines tight and budgets controlled.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const active = SERVICES[activeIdx];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px]" />

      <div className="section-container">
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase block mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Core <span className="text-accent">Services</span>
          </h2>
          <div className="w-16 h-[2px] bg-accent/40 mx-auto" />
        </ScrollReveal>

        {/* === MOBILE: Accordion cards === */}
        <ScrollReveal className="lg:hidden">
          <div className="space-y-3">
            {SERVICES.map((service) => {
              const isOpen = mobileOpen === service.id;
              return (
                <div key={service.id} className="rounded-md border border-border bg-card/30 overflow-hidden">
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : service.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-accent/40 font-heading font-bold text-xs tracking-wider">
                        {service.number}
                      </span>
                      <h3 className={`text-sm font-heading font-bold tracking-wide transition-colors duration-300 ${
                        isOpen ? 'text-accent' : 'text-foreground'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={SPRING}
                      className="w-7 h-7 flex items-center justify-center border border-accent/20 rounded-sm shrink-0 ml-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={SPRING}
                        className="overflow-hidden">
                        <div className="px-5 pb-5">
                          <div className="w-10 h-[2px] bg-accent mb-4" />
                          <p className="text-text-secondary text-xs leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <a
                            href="https://wa.me/96551227338"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-[#0A1128] text-[10px] font-bold uppercase tracking-[0.15em] rounded-sm">
                            Inquire Now
                            <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* === DESKTOP: Tabs + Image panel === */}
        <ScrollReveal className="hidden lg:block">
          <div className="grid grid-cols-12">
            {/* Vertical tab list */}
            <div className="col-span-5 xl:col-span-4 pr-6 xl:pr-10">
              <div className="flex flex-col gap-1">
                {SERVICES.map((s, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveIdx(i)}
                      className="group relative flex items-center gap-4 p-4 xl:p-5 rounded-sm text-left transition-all duration-300 cursor-pointer hover:bg-card/40">
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-accent"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0 }}
                        transition={SPRING}
                      />
                      <span className={`font-heading font-bold text-xs tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-accent' : 'text-muted group-hover:text-accent/60'
                      }`}>
                        {s.number}
                      </span>
                      <div>
                        <h3 className={`font-heading font-bold text-sm xl:text-base tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-accent' : 'text-foreground group-hover:text-accent'
                        }`}>
                          {s.title}
                        </h3>
                        <p className="text-text-secondary text-xs mt-0.5 hidden xl:block">
                          {s.short}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content panel */}
            <div className="col-span-7 xl:col-span-8 relative">
              <div className="relative h-[460px] rounded-md overflow-hidden copper-border">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0">
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      className="object-cover"
                      sizes="58vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/60 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-accent font-heading font-black text-2xl">
                          {active.number}
                        </span>
                        <div className="w-8 h-[1px] bg-accent/40" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                        {active.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed max-w-lg mb-5">
                        {active.description}
                      </p>
                      <a
                        href="https://wa.me/96551227338"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-[#0A1128] text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-accent-light transition-colors duration-300">
                        Inquire Now
                        <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                          <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/20 z-10" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
