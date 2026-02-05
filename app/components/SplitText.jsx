"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = '',
  delay = 0.06,
  duration = 0.9,
  ease = 'power3.out',
  tag = 'p',
  onComplete
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !text) return;

    // Clean up timeline or triggers
    if (el._splitTl) {
      try {
        el._splitTl.kill();
      } catch (_) {}
      el._splitTl = null;
    }
    ScrollTrigger.getAll().forEach(s => {
      if (s.trigger === el) s.kill();
    });

    // Create spans around each character
    const chars = Array.from(el.querySelectorAll('.split-char'));
    // If spans are not yet present (first render), do nothing — they are rendered by JSX
    if (!chars.length) return;

    const tl = gsap.timeline({ defaults: { ease } });
    tl.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: delay,
        onComplete: () => {
          onComplete?.();
        }
      }
    );

    // Optional: animate when scrolled into view if ScrollTrigger available
    try {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        animation: tl
      });
    } catch (e) {
      tl.play();
    }

    el._splitTl = tl;

    return () => {
      try {
        tl.kill();
      } catch (_) {}
      ScrollTrigger.getAll().forEach(s => {
        if (s.trigger === el) s.kill();
      });
      el._splitTl = null;
    };
  }, [text, delay, duration, ease, onComplete]);

  const Tag = tag;
  // Split text into characters and wrap each in a span so we can animate them
  const chars = String(text).split('').map((ch, i) => {
    // Preserve spaces as non-breaking to avoid collapsing
    const key = `c-${i}`;
    if (ch === ' ') return (
      <span key={key} className="split-char" style={{ display: 'inline-block', width: '0.6rem' }}>&nbsp;</span>
    );
    return (
      <span key={key} className="split-char" style={{ display: 'inline-block' }}>{ch}</span>
    );
  });

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: 'inline-block', whiteSpace: 'normal', overflow: 'visible' }}
    >
      {chars}
    </Tag>
  );
};

export default SplitText;
