"use client";

import PillNav from "./components/PillNav";

export default function Navbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Leadership", href: "/#leadership" },
    {
      label: "Contact",
      href: "/contact",
    },
    { label: "Resume", href: "/#resume" },
  ];

  return (
    <header className="bg-[#05074D] text-white py-5 backdrop-blur-sm">
      <div className="w-full flex justify-end items-center px-4 md:px-8">
        <PillNav
          items={items}
          activeHref="#"
          className=""
          baseColor="#05074D"
          pillColor="#0f172a"
          pillTextColor="#e5e7eb"
          hoveredPillTextColor="#ffffff"
        />
      </div>
    </header>
  );
}

