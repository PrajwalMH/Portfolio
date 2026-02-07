"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DEFAULT_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "mailto:prajwalhulamani5111999@gmail.com" },
  { label: "Resume", href: "#resume" },
];

export default function PillNav({
  items = DEFAULT_ITEMS,
  activeHref = items[0]?.href ?? "#",
  className = "",
  ease = "power2.out",
  baseColor = "#000000",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#000000",
  pillTextColor = "#0073FF",
  initialLoadAnimation = false,
}) {
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const navItemsRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        if (!w || !h) return;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const hoverLabel = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.1, xPercent: -50, duration: 0.5, ease, overwrite: "auto" },
          0
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 0.5, ease, overwrite: "auto" },
            0
          );
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: h + 16, opacity: 0 });
          tl.to(
            hoverLabel,
            { y: 0, opacity: 1, duration: 0.5, ease, overwrite: "auto" },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    if (initialLoadAnimation) {
      const nav = navItemsRef.current;

      if (nav) {
        gsap.fromTo(
          nav,
          { width: 0 },
          { width: "auto", duration: 0.6, ease }
        );
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
      tlRefs.current.forEach((tl) => tl?.kill());
      activeTweenRefs.current.forEach((tw) => tw?.kill());
    };
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.25,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: pillTextColor,
    // Responsive: smaller height/padding on phones, original on desktop
    ["--nav-h"]: "clamp(32px, 5vw, 58px)",
    ["--pill-pad-x"]: "clamp(2px, 1.2vw, 30px)",
    ["--pill-gap"]: "6px",
  };

  const navItems = items ?? [];

  return (
    <div
      className={`flex items-center ${className}`}
      style={cssVars}
    >
      {/* Pill container */}
      <nav
        ref={navItemsRef}
        className="relative flex items-center rounded-full overflow-x-auto md:overflow-visible"
        style={{
          height: "var(--nav-h)",
          background: "var(--base)",
        }}
        aria-label="Primary"
      >
        <ul
          className="flex items-stretch m-0 p-[3px] h-full"
          style={{ gap: "var(--pill-gap)" }}
        >
          {navItems.map((item, i) => {
            const isActive = activeHref === item.href;

            const pillStyle = {
              background: "var(--pill-bg)",
              color: "var(--pill-text)",
              paddingLeft: "var(--pill-pad-x)",
              paddingRight: "var(--pill-pad-x)",
            };

            return (
              <li key={item.href ?? i} className="flex h-full">
                <a
                  href={item.href}
                  download={item.download}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="relative inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[9px] md:text-lg leading-none uppercase tracking-[0.06em] md:tracking-[0.24em] whitespace-nowrap cursor-pointer px-0 overflow-hidden"
                  style={pillStyle}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full block pointer-events-none"
                    style={{
                      background: "var(--base)",
                      willChange: "transform",
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-none z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-none"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block leading-none"
                      style={{
                        color: "var(--hover-text)",
                        willChange: "transform, opacity",
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: "var(--base)" }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
