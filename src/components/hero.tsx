"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homebg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="z-10 text-center px-4 max-w-6xl">
        <h1 className="text-6xl md:text-6xl mb-6">Welcome to RecoveryRx</h1>
        <p className="text-sm md:text-[16px] mb-8 leading-relaxed">
          Your partner in overcoming opioid use disorder and substance addiction.
        </p>
        <button
          onClick={() => {
            const nextSection = document.querySelector("main > *:nth-child(3)");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block bg-[#6e573b] hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition cursor-pointer"
        >
          Start Your Journey Today
        </button>
      </div>
    </section>
  );
}
