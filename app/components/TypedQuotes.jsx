"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "The breakthrough often arrives after the longest silence.",
  "Stay positive. Work hard. Make it happen.",
  "It always seems impossible until it’s done.",
];

const TYPING_SPEED = 75; // ms per character
const DELETING_SPEED = 50; // ms per character
const PAUSE_DURATION = 1500; // ms when a phrase is complete
const CURSOR_BLINK_DURATION = 500; // ms

export default function TypedQuotes() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Type / delete loop
  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_DURATION);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayed, isDeleting, phraseIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, CURSOR_BLINK_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-20 px-4 lg:px-12">
      <div className="w-full rounded-2xl bg-slate-900/80 border border-sky-500/35 shadow-[0_18px_50px_rgba(15,23,42,0.9)] px-6 py-8 md:px-10 md:py-10 text-center">
        <p className="text-sm md:text-base text-slate-300 mb-3 uppercase tracking-[0.25em]">
          What Drives Me
        </p>
        <div className="min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center">
          <span className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sky-100">
            {displayed}
            <span className="inline-block w-[0.55ch]">
              {cursorVisible ? "_" : "\u00A0"}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
