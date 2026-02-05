"use client";

import "../StarBorder.css";
import ContactStepperEmail from "./ContactStepperEmail";

export default function Contact() {
  return (
    <div className="relative mx-4 lg:mx-20 my-10 overflow-hidden">
      {/* Glassmorphism card shell, same as home */}
      <div className="bg-white bg-opacity-10 backdrop-blur-sm p-12 rounded-lg shadow-lg min-h-[300px] relative z-10 star-border">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Let&apos;s get in touch
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
