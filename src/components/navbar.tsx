"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md w-full">
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
          <div className="hidden md:flex space-x-10 text-sm font-medium text-white">
            <Link href="#about" className="hover:text-[#6e573b]">
              About Us
            </Link>
            <Link href="#treatments" className="hover:text-[#6e573b]">
              What We Treat
            </Link>
            <Link href="#approach" className="hover:text-[#6e573b]">
              Our Approach
            </Link>
            <Link href="#contact" className="hover:text-[#6e573b]">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="tel:+1234567890"
              className="bg-[#6e573b] flex items-center gap-2 text-white px-5 py-3 rounded-full text-sm font-semibold shadow hover:bg-gray-500 transition"
            >
              <FiPhone className="text-white text-lg" />
              +1 (234) 567-890
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 text-white text-sm font-medium">
            <Link
              href="/"
              className="hover:text-[#6e573b]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-[#6e573b]"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#treatments"
              className="hover:text-[#6e573b]"
              onClick={() => setMenuOpen(false)}
            >
              What We Treat
            </Link>
            <Link
              href="#approach"
              className="hover:text-[#6e573b]"
              onClick={() => setMenuOpen(false)}
            >
              Our Approach
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#6e573b] mb-6"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
