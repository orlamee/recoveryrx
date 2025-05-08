import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/health.jpg"
            alt="About RecoveryRx"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl mb-6">
            Your Partner in Personalized Recovery
          </h1>
          <p className="text-sm md:text-[16px] mb-8">
            Healing isn&apos;t one-size-fits-all. At RecoveryRx, we guide
            individuals toward lasting recovery through compassion, innovation,
            and personalized care.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 shadow">
              <h2 className="text-2xl text-[#6e573b] mb-4">Our Mission</h2>
              <p className="text-black mb-6 text-sm font-normal">
                To provide compassionate, evidence-based addiction care that
                empowers individuals and families to heal, grow, and reclaim
                their lives. We are committed to meeting people where they are
                and walking with them every step of the way toward long-term
                recovery.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow">
              <h2 className="text-2xl text-[#6e573b] mb-4">Our Vision</h2>
              <p className="text-black mb-6 text-sm font-normal">
                To create a world where recovery is accessible, stigma-free, and
                rooted in hope, one life, one family, one community at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-[#6e573b] text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion",
                description:
                  "Every story matters. We listen, care, and meet our clients where they are.",
              },
              {
                title: "Personalization",
                description:
                  "Every journey is different. We tailor our care to meet the unique needs, experiences, and goals of each individual.",
              },
              {
                title: "Integrity & Trust",
                description:
                  "Transparency, honesty, and respect are the foundation of everything we do.",
              },
              {
                title: "Innovation",
                description:
                  "We use evidence-based methods, technology, and clinical expertise to stay at the forefront of behavioral healthcare.",
              },
              {
                title: "Community",
                description:
                  "Recovery doesn't happen in isolation. We foster support systems that last.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-none shadow">
                <h3 className="text-lg text-[#6e573b] font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#6e573b] mb-8">Our Story</h2>
              <div className="space-y-4 text-sm text-black leading-relaxed">
                <p>
                  RecoveryRx began with one mission: to offer a better path to
                  healing, one rooted in dignity, understanding, and real
                  support.
                </p>
                <p>
                  Our team of clinicians and counselors saw a need for addiction
                  care that treats the whole person, not just the symptoms. So
                  we created a place where people feel safe, heard, and
                  empowered from day one.
                </p>
                <p>
                  Located in the heart of our community, RecoveryRx is more than
                  a clinic, it is a place where individuals and families could
                  find hope, healing, and a path forward. From the very
                  beginning, we committed ourselves to evidence-based practices,
                  real human connection, and the understanding that every
                  recovery journey is deeply personal.
                </p>
                <p>
                  Today, RecoveryRx continues to grow, but our mission remains
                  the same: to walk beside each person, helping them reclaim
                  their life with strength, dignity, and support that lasts.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-96 lg:h-full">
              <Image
                src="/images/blog.jpg"
                alt="Our Story"
                fill
                className="object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-[#6e573b] mb-6">Ready to Talk?</h2>
          <p className="text-sm text-black mb-8 max-w-2xl mx-auto">
            You don&apos;t have to face this alone. Our admissions team is
            available 24/7 to answer your questions, listen without judgment,
            and help you take the first step toward healing.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#6e573b] hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition"
          >
            Contact Admissions Now →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
