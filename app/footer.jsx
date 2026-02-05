"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Contact
          </h2>
          <div className="mt-4 text-lg text-gray-300 space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:prajwalhulamani5111999@gmail.com"
                className="text-white underline"
              >
                prajwalhulamani5111999@gmail.com
              </a>
            </p>
            <p>Phone: +1 81793 63521</p>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            © 2026 Prajwal&apos;s Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
