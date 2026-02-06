"use client";

import { useEffect, useState } from "react";

export default function TrueFocusText({ text, className = "" }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setActive(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Muted base text */}
      <span className="text-sky-200/20">{text}</span>

      {/* Highlight sweep overlay */}
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-100 to-sky-400 bg-[length:220%_100%] bg-clip-text text-transparent"
        style={
          active
            ? { animation: "true-focus 2.4s ease-out forwards" }
            : { opacity: 0 }
        }
      >
        {text}
      </span>
    </span>
  );
}
