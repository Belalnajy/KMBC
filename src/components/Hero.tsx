'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useRef } from 'react';

const SPRING = { type: 'spring' as const, stiffness: 50, damping: 20 };

export default function Hero() {
  const headline = 'INTEGRATED TECHNICAL EXCELLENCE.';
  const words = headline.split(' ');

  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const imgX = useTransform(smoothX, [0, 1], [20, -20]);
  const imgY = useTransform(smoothY, [0, 1], [15, -15]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image — parallax on mouse */}
      <motion.div
        className="absolute inset-[-30px] z-0"
        style={{ x: imgX, y: imgY }}>
        <Image
          src="/images/hero-bg.png"
          alt="Construction site"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Dark overlay with mouse-reveal hole */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]: number[]) =>
              `radial-gradient(350px circle at ${x * 100}% ${y * 100}%, rgba(10,17,40,0.15) 0%, rgba(10,17,40,0.55) 40%, rgba(10,17,40,0.78) 70%)`,
          ),
        }}
      />

      {/* Copper glow that follows cursor */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]: number[]) =>
              `radial-gradient(400px circle at ${x * 100}% ${y * 100}%, rgba(212,129,102,0.12) 0%, transparent 50%)`,
          ),
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1128] to-transparent z-[3]" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-[3] opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-accent" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-accent" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center px-4 max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.3 }}
          className="mb-8">
          <span className="inline-block px-4 py-2 border border-accent/30 text-accent text-xs font-medium tracking-[0.3em] uppercase rounded-sm backdrop-blur-sm">
            Kuwait Modern Buildings Construction Co.
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[0.95] mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.5 + i * 0.12 }}
              className={`inline-block mr-[0.25em] ${
                word === 'EXCELLENCE.' ? 'text-accent' : 'text-foreground'
              }`}>
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 1.2 }}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Utilizing high-end BIM modeling and modular systems to ensure every
          structural element meets rigid technical specs.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-accent text-[#0A1128] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,129,102,0.35)]">
            <span className="relative z-10">Ask For Site Visit</span>
            <div className="absolute inset-0 bg-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#services"
            className="px-8 sm:px-10 py-3.5 sm:py-4 border border-accent/30 text-accent font-medium text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:bg-accent/10 hover:border-accent/60">
            Our Services
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-gradient-to-b from-accent/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
