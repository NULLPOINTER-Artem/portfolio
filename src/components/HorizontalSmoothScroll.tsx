'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

type HorizontalSmoothScrollProps = {
  children: React.ReactNode,
}

export default function HorizontalSmoothScroll({ children }: HorizontalSmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  let scrollWidth = 0;

  useEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      const htmlCollectionArr = Array.prototype.slice.call(contentRef.current.children);

      const getMaxWidth = () => {
        scrollWidth = 0;
        htmlCollectionArr.forEach((contentItem) => {
          scrollWidth += parseInt(contentItem.offsetWidth || contentItem.clientWidth);
        });
      };
      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

      const tl1 = gsap.to(wrapperRef.current, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
        x: () => `-${scrollWidth - document.documentElement.clientWidth}`,
        ease: 'none',
      });

      return () => {
        tl1.kill();
        ScrollTrigger.removeEventListener('refreshInit', getMaxWidth);
      }
    }
  }, []);

  return (
    <div ref={wrapperRef} className="horizontal-scroll-container">
      <div ref={contentRef} className="horizontal-scroll-content">{children}</div>
    </div>
  )
}
