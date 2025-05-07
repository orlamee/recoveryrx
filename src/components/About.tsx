import React from "react";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi"; 

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/health.jpg"
              alt="About RecoveryRx"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl text-[#6e573b] mb-4">About RecoveryRx</h2>
            <p className="text-black mb-6 text-sm font-normal">
              RecoveryRx began with one mission: to offer a better path to
              healing, one rooted in dignity, understanding, and real support.
              Our team of clinicians and counselors saw a need for addiction
              care that treats the whole person, not just the symptoms. So we
              created a place where people feel safe, heard, and empowered from
              day one.
            </p>
            <p className="text-black mb-6 text-sm font-normal">
              Located in the heart of our community, RecoveryRx is more than a
              clinic, it is a place where individuals and families could find
              hope, healing, and a path forward. From the very beginning, we
              committed ourselves to evidence-based practices, real human
              connection, and the understanding that every recovery journey is
              deeply personal.
            </p>

            <button className="mt-4 bg-[#6e573b] hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-full text-sm shadow transition inline-flex items-center gap-2">
              <FiCalendar className="text-lg" />
              Schedule an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
