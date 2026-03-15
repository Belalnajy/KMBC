'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="section-container py-2">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          duration: 1.5,
        }}
        className="h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
    </div>
  );
}
