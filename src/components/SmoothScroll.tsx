'use client';

import smoothScroll from '@/utils/smoothScroll';
import { useEffect } from 'react';

export default function SmoothScroll() {
  const { initScroll, onUnmountApp } = smoothScroll();

  useEffect(() => {
    initScroll();

    return () => {
      onUnmountApp();
    }
  }, []);

  return <></>
};
