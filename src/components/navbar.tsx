"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/treatments", label: "What We Treat" },
    { href: "/mat", label: "What is MAT?" },
    { href: "/approach", label: "Our Approach" },
    // { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Business Thrve"
                width={150}
                height={50}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${
                  pathname === href
                    ? "text-[#6e573b] font-semibold"
                    : "text-white"
                } hover:text-[#6e573b] transition`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="tel:410-449-7007"
              className="bg-[#6e573b] flex items-center gap-2 text-white px-5 py-3 rounded-full text-sm font-semibold shadow hover:bg-gray-500 transition"
            >
              <FiPhone className="text-white text-lg" />
              410-449-7007
            </Link>
          </div>

          {/* Mobile CTA and Menu Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              href="tel:410-449-7007"
              className="bg-[#6e573b] flex items-center gap-1 text-white px-3 py-2 rounded-full text-xs font-semibold shadow hover:bg-gray-500 transition"
            >
              <FiPhone className="text-white text-sm" />
              Call 410-449-7007
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 text-white text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#6e573b]"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
