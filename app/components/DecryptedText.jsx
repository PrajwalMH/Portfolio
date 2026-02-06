"use client";

import { useEffect, useRef, useState } from "react";

const RANDOM_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export default function DecryptedText({
  text,
  className = "",
  stepDelay = 50,
  active = true,
}) {
  const [display, setDisplay] = useState(() => {
    if (!text) return "";
    return text
      .split("")
      .map((char) =>
        char === " "
          ? " "
          : RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)]
      )
      .join("");
  });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!text || !active || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let frame = 0;
    const cleaned = text.split("");

    const interval = setInterval(() => {
      frame += 1;

      const next = cleaned
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < frame) return char;
          const randIndex = Math.floor(Math.random() * RANDOM_CHARS.length);
          return RANDOM_CHARS[randIndex];
        })
        .join("");

      setDisplay(next);

      if (frame >= cleaned.length) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, stepDelay);

    return () => clearInterval(interval);
  }, [text, stepDelay, active]);

  return <span className={className}>{display}</span>;
}
