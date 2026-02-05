"use client";

import { useEffect, useRef } from "react";
import ScrollFloat from "./ScrollFloat";

const PROJECTS = [
  {
    title: "PharmaLens · AI Prescription Analysis",
    stack: "Spring Boot · Next.js · Python/Flask · MySQL · NLP",
    description:
      "Full-stack healthcare tool that analyzes prescriptions, checks drug interactions with NLP, and surfaces insights through a clean dashboard.",
  },
  {
    title: "TriagePro · AI Symptom Triage",
    stack: "Spring Boot · Next.js · Python/Flask · MySQL",
    description:
      "AI-driven symptom triage and appointment scheduling platform that streamlines patient intake and routes cases to the right specialists.",
  },
  {
    title: "Smart City Healthcare Portal",
    stack: "Java · Spring Boot · HTML/CSS/JS · SQL",
    description:
      "Smart City healthcare service web app enabling secure 24/7 access for e-citizens, with improved citizen–admin workflows and secure login.",
  },
  {
    title: "Club Membership Management System",
    stack: "PHP · MySQL · HTML/CSS · Bootstrap · JavaScript · XAMPP",
    description:
      "Admin-focused club portal to manage member records, referral-based discounts, club-wise member lists, and additional admin accounts.",
  },
];

const CERTIFICATES = [
  {
    title: "Career Essentials in Generative AI",
    description:
      "Microsoft & LinkedIn · Issued Aug 2024 · Foundations of generative AI, responsible AI practices, and applying AI tools in real-world workflows.",
  },
  {
    title: "Spring Security 6 Zero to Master with JWT & OAuth2",
    description:
      "Udemy · Issued Jul 2024 · End‑to‑end security for Spring Boot applications including JWT-based auth, OAuth2, and role-based access control.",
  },
  {
    title: "Learn Spring Boot 3 in 100 Steps",
    description:
      "Udemy · Issued Mar 2023 · Practical Spring Boot 3 development focusing on REST APIs, data access, configuration, and production‑ready patterns.",
  },
  {
    title: "Crash Course on Python",
    description:
      "Coursera · Issued Jul 2020 · Core Python programming concepts including data structures, functions, scripting, and problem‑solving.",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    description:
      "Coursera · Issued Nov 2020 · Modern front‑end foundations covering responsive layouts, CSS, and JavaScript for interactive web apps.",
  },
  {
    title: "Microsoft Virtual Internship",
    description:
      "Microsoft · Issued Jul 2020 · Online internship experience exploring real‑world software engineering tasks and professional skills.",
  },
  {
    title: "Career Edge – Knockdown the Lockdown",
    description:
      "TCS iON LifeLong Learning · Issued Apr 2020 · Professional development program focused on communication, teamwork, and workplace readiness.",
  },
  {
    title: "Java Tutorials for Complete Beginners",
    description:
      "Udemy · Issued Apr 2020 · Object‑oriented programming fundamentals in Java, including classes, collections, and basic application development.",
  },
];

export default function ProjectsCertificates() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll("[data-scroll-float]");
    if (!items.length) return;

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

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="mt-28 px-4 lg:px-12 text-left"
      aria-label="Projects and certificates"
    >
      <div className="w-full bg-white/5 backdrop-blur-md rounded-2xl border border-sky-500/25 shadow-[0_24px_60px_rgba(15,23,42,0.96)] px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="w-full text-center">
            <ScrollFloat
              animationDuration={3}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="inline-block"
              textClassName="text-4xl md:text-5xl lg:text-6xl font-semibold text-sky-300"
            >
              Projects &amp; Certificates
            </ScrollFloat>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-slate-200/85">
              A snapshot of the products I&apos;ve built and the learning that
              supports them. As you scroll, cards float into view to highlight
              key work and achievements.
            </p>
          </div>

          <div className="w-full md:w-2/3 md:self-center grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-sky-200">
                Key Projects
              </h3>
              {PROJECTS.map((project, index) => (
                <article
                  key={project.title}
                  data-scroll-float
                  className="opacity-0 translate-y-6 transition-all duration-700 ease-out bg-slate-900/70 border border-sky-800/60 rounded-xl p-4 md:p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)] hover:border-sky-400/80 hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <h4 className="text-sm md:text-base font-semibold text-sky-100">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-[0.7rem] md:text-xs uppercase tracking-[0.18em] text-sky-300/90">
                    {project.stack}
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-slate-100 leading-relaxed">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-sky-200">
                Certificates &amp; Achievements
              </h3>
              {CERTIFICATES.map((certificate, index) => (
                <article
                  key={certificate.title}
                  data-scroll-float
                  className="opacity-0 translate-y-6 transition-all duration-700 ease-out bg-slate-900/70 border border-sky-800/60 rounded-xl p-4 md:p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)] hover:border-sky-400/80 hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]"
                  style={{ transitionDelay: `${index * 90 + 120}ms` }}
                >
                  <h4 className="text-sm md:text-base font-semibold text-sky-100">
                    {certificate.title}
                  </h4>
                  <p className="mt-3 text-xs md:text-sm text-slate-100 leading-relaxed">
                    {certificate.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
