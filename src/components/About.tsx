import React from "react";
import Image from "next/image";
// import { FiCalendar } from "react-icons/fi";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg group">
            <Image
              src="/images/homebg.jpg"
              alt="About RecoveryRx"
              fill
              className="object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="animate-slide-in-right">
            <h2 className="text-4xl text-[#6e573b] mb-4 animate-fade-in-up">
              About RecoveryRx
            </h2>
            <p className="text-black mb-6 text-sm font-normal animate-fade-in-up animation-delay-200">
              RecoveryRx was founded with a clear mission: to offer a better
              path to recovery, one rooted in dignity, understanding, and real
              support. Dr. Vivian recognized the need for transformative
              addiction care; the kind that truly sees the whole person, not
              just the addiction. That mission led to the creation of
              RecoveryRx: a place where people feel safe, heard, and empowered
              from day one.
            </p>
            <p className="text-black mb-6 text-sm font-normal animate-fade-in-up animation-delay-400">
              We specialize in Medication-Assisted Treatment (MAT), using
              evidence-based medications such as Suboxone, Sublocade and
              Vivitrol as part of a comprehensive, personalized approach that
              meets people where they are and helps them get to where they truly
              want to be.
            </p>
            <p className="text-black mb-6 text-sm font-normal animate-fade-in-up animation-delay-600">
              Located in the heart of our community, RecoveryRx is more than
              just a clinic, it&apos;s a place of hope, healing, and empowerment for
              individuals and families. We know that recovery is never
              one-size-fits-all. Every journey is personal, and at RecoveryRx,
              we walk that path with you.
            </p>

            {/* <button className="mt-4 bg-[#6e573b] hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-full text-sm shadow transition inline-flex items-center gap-2">
              <FiCalendar className="text-lg" />
              Schedule an Appointment
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
