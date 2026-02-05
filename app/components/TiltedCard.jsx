"use client";

import { useRef } from "react";

export default function TiltedCard({
  title,
  children,
  className = "",
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 16; // left-right
    const rotateX = ((y / rect.height) - 0.5) * -16; // up-down

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div className={`group perspective-[1200px] ${className}`.trim()}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl border border-sky-500/40 bg-slate-900/80 px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_60px_rgba(15,23,42,0.9)] transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-4 text-left">
            {title}
          </h2>
        )}
        <div className="text-left text-slate-100 text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

