"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-slate-950 via-black to-slate-950 text-slate-100 border-t border-slate-800">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-400">
            Contact
          </h2>
          <div className="mt-4 text-sm md:text-base text-slate-300 space-y-1">
            <p>
              Email:{" "}
              <a
                href="mailto:prajwalhulamani5111999@gmail.com"
                className="text-sky-300 hover:text-sky-200 underline underline-offset-2"
              >
                prajwalhulamani5111999@gmail.com
              </a>
            </p>
            <p>Phone: +1 81793 63521</p>
          </div>

          {/* Social icons row */}
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prajwalhulamani/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800/80 rounded-full shadow-md hover:bg-slate-700 transition-colors duration-300"
            >
              <img
                src="/linkedin-original.svg"
                alt="LinkedIn"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800/80 rounded-full shadow-md hover:bg-slate-700 transition-colors duration-300"
            >
              <img src="/x.jpg" alt="X" className="w-7 h-7 md:w-8 md:h-8" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/PrajwalMH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800/80 rounded-full shadow-md hover:bg-slate-700 transition-colors duration-300"
            >
              <img
                src="/github-inverted.svg"
                alt="GitHub"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/PrajwalMH/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800/80 rounded-full shadow-md hover:bg-slate-700 transition-colors duration-300"
            >
              <img
                src="/leetcode.svg"
                alt="LeetCode"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>

            {/* HackerRank */}
            <a
              href="https://www.hackerrank.com/profile/prajwalhulamani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800/80 rounded-full shadow-md hover:bg-slate-700 transition-colors duration-300"
            >
              <img
                src="/hackerrank-icon.png"
                alt="HackerRank"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>

            {/* Gmail */}
            <a
              href="mailto:prajwalhulamani5111999@gmail.com"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800/80 rounded-full shadow-md hover:bg-slate-700 transition-colors duration-300"
            >
              <img
                src="/gmail.webp"
                alt="Gmail"
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
            </a>
          </div>

          <p className="mt-4 text-xs md:text-sm text-gray-500">
            © 2026 Prajwal&apos;s Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
