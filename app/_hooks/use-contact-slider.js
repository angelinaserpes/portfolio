'use client';

import { useScroll, useTransform } from 'framer-motion';

/** @param {import('react').MutableRefObject<HTMLElement>} element */
export function useContactSlider(element) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end end'],
  });

  const transformX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const transformY = useTransform(scrollYProgress, [0, 1], [-80, 0]);

  return { transformX, transformY };
}
