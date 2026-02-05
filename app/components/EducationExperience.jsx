"use client";

import { useEffect, useRef } from "react";

const TIMELINE_ITEMS = [
  {
    title: "Bachelor’s in Computer Science",
    period: "Undergraduate Studies",
    body: "Built a strong foundation in algorithms, data structures, operating systems, and databases while working on several academic projects.",
  },
  {
    title: "Master’s Focus",
    period: "Graduate Studies",
    body: "Deepening my skills in software engineering and modern web development, with a focus on React, Next.js, and cloud‑ready applications.",
  },
  {
    title: "Work Experience",
    period: "Projects & Roles",
    body: "Applied my skills to real‑world projects, collaborating with teams, integrating APIs, and delivering clean, user‑friendly interfaces.",
  },
];

export default function EducationExperience() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-edu-card]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const EDUCATION_EXPERIENCE_ITEMS = [
    {
      title: "Master's in Computer Science",
      period:
        "University of Texas at Arlington · May 2026 (Expected) · Arlington, TX, USA",
      body:
        "Pursuing an M.S. in Computer Science at UTA with a focus on software engineering and modern web development (expected graduation May 2026).",
    },
    {
      title: "B.E. in Computer Science and Engineering",
      period:
        "JSS Academy of Technical Education · Jul 2022 · Bangalore, Karnataka, India",
      body:
        "Completed a Bachelor of Engineering in Computer Science and Engineering, building strong fundamentals in algorithms, data structures, operating systems, and databases.",
    },
    {
      title: "Software Engineer · Nuvepro Technologies",
      period: "Dec 2022 - Jul 2024 · Bengaluru, India",
      body:
        "Built Java-based validation code for MSSQL/MySQL database assessment projects (improving validation coverage by 85%), delivered scalable backend solutions (40% processing efficiency gain), and reduced error rates by 60%.",
    },
    {
      title: "Software Engineer Intern · Nuvepro Technologies",
      period: "Sep 2022 - Dec 2022 · Bengaluru, India",
      body:
        "Enhanced MSSQL assessment validation logic in Java, added unit tests to improve reliability, and refined documentation and estimation to reduce onboarding time.",
    },
    {
      title: "Intern · ELCITA",
      period: "Mar 2022 - Jun 2022 · Bengaluru, India",
      body:
        "Developed a Smart City healthcare service web app enabling secure 24/7 access for thousands of e-citizens, implemented secure login, and improved citizen–admin workflow integration for faster resolution.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="mt-32 max-w-5xl mx-auto px-4 text-left"
      aria-label="Education and experience timeline"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-sky-300">
            Education &amp; Experience
          </h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-slate-200/80">
            A quick look at my academic journey and the hands-on experience
            that shaped how I build real-world products.
          </p>
        </div>

        <div className="md:w-2/3 relative">
          {/* Vertical line for single-side timeline */}
          <div
            className="pointer-events-none absolute left-3 md:left-4 top-0 bottom-0 border-l border-sky-700/40"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-10">
            {EDUCATION_EXPERIENCE_ITEMS.map((item, index) => (
              <article
                key={item.title}
                data-edu-card
                className="relative pl-10 md:pl-12 opacity-0 translate-y-6 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(56,189,248,0.9)] ring-4 ring-sky-500/25" />

                {/* card */}
                <div className="bg-slate-900/80 border border-sky-800/60 rounded-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:border-sky-400/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-sky-100">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1 text-[0.68rem] md:text-[0.78rem] font-semibold tracking-[0.22em] uppercase text-sky-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-slate-100">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
