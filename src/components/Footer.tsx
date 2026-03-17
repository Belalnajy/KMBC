'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.02] rounded-full blur-[100px]" />

      {/* CTA Banner */}
      <div className="section-container">
        <ScrollReveal>
          <div className="relative mt-16 sm:mt-20 mb-16 sm:mb-20 p-8 sm:p-12 md:p-16 rounded-md border border-border bg-card/40 backdrop-blur-sm text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent/[0.02]" />
            <div className="relative z-10">
              <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase block mb-4">
                Let&apos;s Build Together
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-foreground mb-4">
                Ready to Start Your <span className="text-accent">Project</span>
                ?
              </h2>
              <p className="text-text-secondary text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Get in touch with our team for a free consultation and site
                assessment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/96551227338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-[#0A1128] text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(212,129,102,0.3)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="tel:+96551227339"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-accent/30 text-accent text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-accent/10 hover:border-accent/60 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-accent/20" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-accent/20" />
          </div>
        </ScrollReveal>
      </div>

      {/* Footer Content */}
      <div className="border-t border-border/50">
        <div className="section-container py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            {/* Brand */}
            <ScrollReveal className="md:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/KMBC-logo-1.png"
                  alt="Kuwait Modern Building Company logo"
                  width={56}
                  height={56}
                  className="rounded-md  logo-copper-filter"
                />
                <div>
                  <span className="font-heading text-base font-bold tracking-wider text-accent">
                    KMBC
                  </span>
                  <span className="font-heading text-base font-bold tracking-wider text-foreground">
                    {' '}
                    Co.
                  </span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-5">
                Kuwait Modern Buildings Construction Co. — Delivering premium
                technical excellence across industrial, residential, and civil
                infrastructure projects.
              </p>
              <p className="text-muted text-[11px] tracking-[0.2em] uppercase">
                Premium Technical Excellence
              </p>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal className="md:col-span-4" delay={0.1}>
              <h4 className="font-heading font-bold text-xs tracking-[0.25em] uppercase text-accent mb-5">
                Contact
              </h4>
              <div className="space-y-3.5">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group/link">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4 text-accent/50 group-hover/link:text-accent flex-shrink-0 mt-0.5 transition-colors">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-text-secondary text-sm leading-relaxed group-hover/link:text-foreground transition-colors">
                    Ahmed Aljaber Street, Block 8, Sharq, Kuwait City
                  </span>
                </a>

                <a
                  href="tel:+96551227339"
                  className="flex items-center gap-3 group/link">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4 text-accent/50 group-hover/link:text-accent flex-shrink-0 transition-colors">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-text-secondary text-sm group-hover/link:text-foreground transition-colors">
                    (+965) 51227339
                  </span>
                </a>

                <a
                  href="mailto:administration@kmbc-kw.com"
                  className="flex items-center gap-3 group/link">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4 text-accent/50 group-hover/link:text-accent flex-shrink-0 transition-colors">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-text-secondary text-sm group-hover/link:text-foreground transition-colors">
                    administration@kmbc-kw.com
                  </span>
                </a>
              </div>
            </ScrollReveal>

            {/* Hours + Links */}
            <ScrollReveal className="md:col-span-4" delay={0.2}>
              <h4 className="font-heading font-bold text-xs tracking-[0.25em] uppercase text-accent mb-5">
                Office Hours
              </h4>
              <div className="space-y-2.5 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Sun — Thu</span>
                  <span className="text-foreground font-medium">
                    08:00 — 16:00
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Fri — Sat</span>
                  <span className="text-muted">Closed</span>
                </div>
              </div>

              <h4 className="font-heading font-bold text-xs tracking-[0.25em] uppercase text-accent mb-4">
                Quick Links
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                    {link.label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-[11px] tracking-wider">
            &copy; {new Date().getFullYear()} Kuwait Modern Buildings
            Construction Co.
          </p>
          <p className="text-muted text-[11px] tracking-wider">
            Kuwait Standard Time (GMT+3)
          </p>
        </div>
      </div>
    </footer>
  );
}
