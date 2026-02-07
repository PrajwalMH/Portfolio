"use client";

import { useState, useEffect } from "react";

const STEPS = [
  { title: "Welcome" },
  { title: "Your Details" },
  { title: "Your Message" },
  { title: "Finish" },
];

export default function ContactStepperEmail({ steps = STEPS }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (!submitSuccess) return;

    const timer = setTimeout(() => {
      setSubmitSuccess(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [submitSuccess]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev + 1 < steps.length ? prev + 1 : prev
    );
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setSubmitSuccess(false);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = form;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        console.error("Contact form API error:", response.status);
        setSubmitError(
          "Something went wrong sending your message. Please try again."
        );
        return;
      }
    } catch (error) {
      console.error("Contact form API exception:", error);
      setSubmitError(
        "Something went wrong sending your message. Please try again."
      );
      return;
    } finally {
      setIsSubmitting(false);
    }

    setSubmitSuccess(true);
    setActiveIndex(3);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      {submitSuccess && (
        <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-emerald-500 text-slate-900 text-sm md:text-base shadow-lg border border-emerald-300">
          Your message has been sent successfully.
        </div>
      )}
      {/* Step bullets + connectors + labels in one row */}
      <div className="flex w-full items-start justify-between gap-3 md:gap-6">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.title ?? index} className="flex items-center gap-2">
              {/* Circle + label stacked so text sits right under the circle */}
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-600 bg-slate-900/80 shadow-md transition-all hover:shadow-lg hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span
                    className={`absolute inset-[2px] rounded-full transition-colors ${
                      isActive || isCompleted
                        ? "bg-gradient-to-br from-sky-500 via-blue-500 to-purple-500"
                        : "bg-slate-900"
                    }`}
                  />
                  <span
                    className={`relative z-10 text-sm font-semibold ${
                      isActive || isCompleted ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {index + 1}
                  </span>
                </button>

                <div className="mt-3 text-xs md:text-sm font-medium text-center text-slate-400">
                  <span
                    className={`transition-colors ${
                      isActive ? "text-sky-300" : ""
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              </div>

              {/* Connector line between this step and the next */}
              {!isLast && (
                <div
                  className={`h-[3px] w-12 md:w-20 rounded-full transition-colors ${
                    isCompleted
                      ? "bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500"
                      : "bg-slate-700"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <div
        className={`mt-6 rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-left ${
          activeIndex === 0
            ? "min-h-[320px] flex flex-col justify-center"
            : "min-h-[380px] space-y-3"
        }`}
      >
        {/* Step 1: welcome message */}
        {activeIndex === 0 && (
          <div className="step-animated">
            <h2 className="text-xl md:text-2xl font-semibold text-violet-400">
              If you’ve landed here, you’re already one step closer to a
              meaningful collaboration.
            </h2>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              Move through the steps to share your details and message.
            </p>
          </div>
        )}

        {/* Step 2: name + email */}
        {activeIndex === 1 && (
          <div className="step-animated">
            <h2 className="text-lg md:text-xl font-semibold text-sky-300">
              Your details
            </h2>
            <div className="space-y-3 mt-2">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange("name")}
                className="w-full rounded-md bg-slate-950/70 border border-slate-700 px-3 py-2 text-sm md:text-base text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange("email")}
                className="w-full rounded-md bg-slate-950/70 border border-slate-700 px-3 py-2 text-sm md:text-base text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        )}

        {/* Step 3: message + submit */}
        {activeIndex === 2 && (
          <div className="step-animated">
            <h2 className="text-lg md:text-xl font-semibold text-sky-300">
              Your message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange("message")}
                className="w-full rounded-md bg-slate-950/70 border border-slate-700 px-3 py-2 text-sm md:text-base text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              />
              {submitError && (
                <p className="text-sm text-red-400">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-sky-500 text-slate-900 font-semibold py-2 text-sm md:text-base hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </div>
        )}

        {/* Step 4: contact info + socials */}
        {activeIndex === 3 && (
          <div className="step-animated">
            <div className="inline-flex items-center justify-center gap-4 px-6 py-4 rounded-xl bg-slate-800/80 mb-6 w-full">
              <span className="text-2xl">📧</span>
              <h2 className="text-4xl md:text-5xl font-bold text-sky-300">
                Contact Information
              </h2>
            </div>

            <div className="mt-1 space-y-3 text-base md:text-lg text-slate-200 text-center">
              <p className="font-semibold text-sky-300 text-lg md:text-xl">
                Prajwal Mrithyunjay Hulamani
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:prajwalhulamani5111999@gmail.com"
                  className="text-sky-400 underline"
                >
                  prajwalhulamani5111999@gmail.com
                </a>
              </p>
              <p>Phone: +1 81793 63521</p>

              <div className="mt-6 space-y-3">
                <span className="inline-flex items-center gap-3 text-4xl md:text-5xl font-semibold text-sky-300 mb-6 contact-social-heading">
                  <span>Social Media</span>
                </span>

                <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base mt-16 mb-6">
                  <a
                    href="https://www.linkedin.com/in/prajwalhulamani/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-slate-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/PrajwalMH"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-slate-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://leetcode.com/u/PrajwalMH/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-slate-900 transition-colors"
                  >
                    LeetCode
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/prajwalhulamani"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 rounded-full border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-slate-900 transition-colors"
                  >
                    HackerRank
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Previous / Next buttons */}
      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-500 bg-slate-900/70 text-sm md:text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <span className="text-lg leading-none">←</span>
          <span>Previous</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={activeIndex >= steps.length - 1}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-sky-400/80 bg-slate-900/70 text-sm md:text-base font-semibold text-sky-200 hover:bg-sky-500 hover:text-slate-900 hover:border-sky-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <span>Next</span>
          <span className="text-lg leading-none">→</span>
        </button>
      </div>
    </div>
  );
}
