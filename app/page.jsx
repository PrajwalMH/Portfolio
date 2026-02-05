"use client";
import { useState } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiMongodb,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import SplitText from './components/SplitText';
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import EducationExperience from "./components/EducationExperience";
import ProjectsCertificates from "./components/ProjectsCertificates";
import Contact from "./components/Contact";
import LeadershipInvolvement from "./components/LeadershipInvolvement";
import './StarBorder.css';

const BASE_LOGOS = [
  { id: "react", Icon: SiReact },
  { id: "next", Icon: SiNextdotjs },
  { id: "ts", Icon: SiTypescript },
  { id: "tailwind", Icon: SiTailwindcss },
  { id: "node", Icon: SiNodedotjs },
  { id: "java", Icon: FaJava },
  { id: "spring", Icon: SiSpringboot },
  { id: "mongo", Icon: SiMongodb },
  { id: "github", Icon: SiGithub },
  { id: "figma", Icon: SiFigma },
];

const LOGOS = [...BASE_LOGOS, ...BASE_LOGOS];

export default function HomePage() {
  const [showName, setShowName] = useState(false);
  return (
    <div className="text-center py-20 bg-gradient-to-tr from-black via-blue-900 to-black" >
      <div>
        {/** Name will animate only after the greeting completes */}
        {!showName && (
          <SplitText
            text={"Hello World! I'm"}
            tag="h2"
            className="ttext-5xl md:text-7xl lg:text-8xl font-normal text-white mb-5"
            delay={0.04}
            duration={0.7}
            onComplete={() => {
              setTimeout(() => setShowName(true), 1000); // Delay before showing name
            }}
          />
        )}

        {showName && (
          <SplitText
            text={"Prajwal Mrithyunjay Hulamani"}
            tag="h1"
            className="text-6xl md:text-7xl lg:text-8xl font-normal text-white mb-5"
            delay={0.02}
            duration={1}
          />
        )}
      </div>
      

      
        <div className="relative mx-4 lg:mx-20 my-10 overflow-hidden">
          {/* Main content container */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-12 rounded-lg shadow-lg min-h-[300px] relative z-10 star-border">
          {/* Top‑right About me label */}
              <a href="#about" className="about-label">
                <span>About Me</span>
              </a>

            <a href="#projects" className="projects-label">
              <span>Projects &amp; Certificates</span>
            </a>
          {/* Circular profile picture without border */}
          <div className="flex justify-center mb-6">
            <img
              src="/profile.jpeg" // Replace this with your actual profile image path
              alt="Profile"
              className="w-80 h-80 rounded-full object-cover shadow-lg"
            />
          </div>

          <p className="text-lg text-gray-100">
            I'm Prajwal, a passionate Computer Science student and developer.
          </p>


          <div className="flex justify-center space-x-6 mb-6">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/prajwalhulamani/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              <img src="/linkedin-original.svg" alt="LinkedIn" className="w-10 h-10" />
            </a>

            {/* X (Twitter) Button */}
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              <img src="/x.jpg" alt="X" className="w-10 h-10" />
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/PrajwalMH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              <img src="/github-inverted.svg" alt="GitHub" className="w-10 h-10" />
            </a>

            {/* LeetCode Button */}
            <a
              href="https://leetcode.com/u/PrajwalMH/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              <img src="/leetcode.svg" alt="LeetCode" className="w-10 h-10" />
            </a>

            {/* HackerRank Button */}
            <a
              href="https://www.hackerrank.com/profile/prajwalhulamani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              <img src="/hackerrank-icon.png" alt="HackerRank" className="w-10 h-10" />
            </a>

            {/* Gmail Button */}
            <a
              href="mailto:prajwalhulamani5111999@gmail.com"
              className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300"
            >
              <img src="/gmail.webp" alt="Gmail" className="w-10 h-10 object-contain" />
            </a>
          </div>
        </div>


        {/* Neon animated corners (without moving border edges) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left corner (short glowing segments only) */}
          <div className="absolute top-0 left-0 w-14 h-14 rounded-tl-lg neon-corner-tl"></div>

          {/* Bottom-right corner */}
          <div className="absolute bottom-0 right-0 w-14 h-14 rounded-br-lg neon-corner-br"></div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="/Prajwal%20Mrithyunjay%20Hulamani.pdf"
          download="Prajwal Mrithyunjay Hulamani.pdf"
          className="resume-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Interface / Download">
                <path
                  id="Vector"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                ></path>
              </g>
            </g>
          </svg>
          <span className="ml-2 text-sm md:text-base font-medium tracking-wide">
            Download Resume
          </span>
        </a>
      </div>

      {/* Logo loop / tech stack */}
      <div className="mt-10">
        <div className="logo-loop">
          <div className="logo-loop-track">
            {LOGOS.concat(LOGOS).map(({ id, Icon }, index) => (
              <div key={`${id}-${index}`} className="logo-loop-item">
                <Icon aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About me section below logo loop */}
      <div id="about" className="mt-16 px-4 lg:px-12">
        <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl border border-sky-500/25 shadow-[0_24px_60px_rgba(15,23,42,0.96)] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
          {/* Left: photo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/aboutMe.jpg"
              alt="Prajwal portrait"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-[0_18px_40px_rgba(15,23,42,0.95)]"
            />
          </div>

          {/* Right: content with fade-in from left */}
          <div className="w-full md:w-2/3 about-fade-in-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-sky-300 mb-4">
              About Me
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-100 leading-relaxed">
              I&apos;m Prajwal, a Computer Science graduate student at the University
              of Texas at Arlington (M.S., expected May 2026) and a software
              engineer who enjoys building clean, modern web experiences and
              reliable backend systems. I love working with React/Next.js on the
              frontend and Java + Spring Boot on the backend to turn ideas into
              polished, real-world products.
            </p>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-slate-200/90 leading-relaxed">
              Professionally, I&apos;ve shipped production-grade backend solutions at
              Nuvepro Technologies, where I built and scaled Java-based
              validation systems for database assessment platforms (MSSQL/MySQL).
              That work sharpened my focus on performance, correctness, and
              maintainability—from designing core logic to writing solid tests
              (JUnit/Mockito) and documenting architecture so teams can move
              faster.
            </p>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-slate-200/90 leading-relaxed">
              I&apos;m also excited by applied AI in real products. I&apos;ve built
              full-stack healthcare projects like PharmaLens (AI prescription
              analysis with NLP-based drug interaction checks) and TriagePro
              (AI-driven symptom triage + appointment scheduling), combining
              Spring Boot + Next.js with Python/Flask and MySQL to deliver
              practical, user-friendly tools. Along the way, I&apos;ve worked with
              AWS (EC2/RDS/S3), optimized database queries, and built responsive
              dashboards that make complex workflows feel effortless.
            </p>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-slate-200/90 leading-relaxed">
              I care a lot about smooth user flows, subtle UI polish, and robust
              engineering habits—clean architecture, secure design, thoughtful
              testing, and code that&apos;s easy to extend. I&apos;m always looking for
              opportunities to learn fast, collaborate with strong teams, and
              deliver meaningful impact.
            </p>
          </div>
        </div>
      </div>

      {/* Education & experience scroll timeline */}
      <EducationExperience />

      {/* Projects & Certificates with scroll-float effect */}
      <ProjectsCertificates />

      {/* Scroll stack about section */}
      <div className="mt-24 max-w-5xl mx-auto">
        <ScrollStack>
          <ScrollStackItem>
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-3">
              Who I am
            </h2>
            <p className="text-sm md:text-base text-slate-100">
              I&apos;m Prajwal, a Computer Science student and developer who enjoys
              building clean, interactive web experiences and learning new
              technologies.
            </p>
          </ScrollStackItem>

          <ScrollStackItem>
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-3">
              What I work on
            </h2>
            <p className="text-sm md:text-base text-slate-100">
              I focus on modern frontend development with React and Next.js,
              and I like crafting polished UI details, animations, and smooth
              user flows.
            </p>
          </ScrollStackItem>

          <ScrollStackItem>
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-3">
              What I&apos;m looking for
            </h2>
            <p className="text-sm md:text-base text-slate-100">
              I&apos;m excited about opportunities where I can contribute to real
              projects, collaborate with strong teams, and keep growing as a
              developer.
            </p>
          </ScrollStackItem>
        </ScrollStack>
      </div>

      {/* Leadership & campus involvement section */}
      <LeadershipInvolvement />

      {/* Contact section duplicated from contact page */}
      <div id="contact-home" className="mt-24 px-4 lg:px-12">
        <Contact />
      </div>
    </div>
  );
}


