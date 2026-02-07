"use client";

import { useEffect, useRef, useState } from "react";
import "../StarBorder.css";
import ContactStepperEmail from "./ContactStepperEmail";
import TrueFocus from "./TrueFocus";

export default function Contact() {
  const titleRef = useRef(null);
  const [showEffect, setShowEffect] = useState(false);

  // Start the True Focus effect only when the title scrolls into view
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowEffect(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mx-4 lg:mx-20 my-10 overflow-hidden">
      {/* Glassmorphism card shell, same as home */}
      <div className="bg-white bg-opacity-10 backdrop-blur-sm p-12 rounded-lg shadow-lg min-h-[300px] relative z-10 star-border">
        <h1 className="mb-6" ref={titleRef}>
          {showEffect ? (
            <TrueFocus
              sentence="Let's Connect"
              manualMode={false}
              blurAmount={5}
              borderColor="#38bdf8"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
              wordClassName="text-4xl md:text-5xl lg:text-6xl"
            />
          ) : (
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-300">
              Let&apos;s Connect
            </span>
          )}
        </h1>
        <p className="text-sm md:text-base text-gray-200 mb-4">
          Use the steps below as a guide for what to include when you reach out.
        </p>

        {/* Stepper inspired by ReactBits Stepper */}
        <ContactStepperEmail />
      </div>

      {/* Neon animated corners, reused from home page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-14 h-14 rounded-tl-lg neon-corner-tl" />
        <div className="absolute bottom-0 right-0 w-14 h-14 rounded-br-lg neon-corner-br" />
      </div>
    </div>
  );
}
