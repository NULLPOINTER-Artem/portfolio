'use client'

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

type scrollStatus = 'active' | 'destroyed';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    scrollInstance: Lenis | null | undefined;
    scrollInstanceStatus: scrollStatus;
  }
}

const smoothScroll = () => {
  const init = () => {
    if (!window.scrollInstance || window.scrollInstanceStatus === 'destroyed') {
      gsap.registerPlugin(ScrollTrigger);

      const scrollInstance = new Lenis({
        lerp: 0.07
      });
      scrollInstance.on('scroll', ScrollTrigger.update);

      const raf = (time: any) => {
        scrollInstance && scrollInstance.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      gsap.ticker.add((time) => {
        scrollInstance && scrollInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      window.scrollInstance = scrollInstance;
      window.scrollInstanceStatus = 'active';
    }
  };

  const onUnmountApp = () => {
    window.scrollInstance && window.scrollInstance.destroy();
    window.scrollInstanceStatus = 'destroyed';
  };

  return {
    initScroll: init,
    onUnmountApp,
  };
};

export default smoothScroll;
