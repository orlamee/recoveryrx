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
            src="/images/aboutbg.jpg"
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

      {/* Meet Dr. Vivian Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#6e573b] mb-8">Meet Dr. Vivian</h2>
              <div className="space-y-4 text-sm text-black leading-relaxed">
                <p>
                  Dr. Vivian Imo, DNP, CRNP is a Board-Certified Nurse 
                  Practitioner with over 10 years of experience in mental health 
                  and addiction care. She began her career at The Johns Hopkins 
                  Hospital and has worked across a wide range of clinical 
                  settings, including inpatient psychiatry, outpatient care, 
                  medically supervised detox programs, intensive outpatient 
                  programs (IOPs), partial hospitalization (PHPs), and 
                  residential treatment facilities.
                </p>
                <p>
                  Dr. Vivian specializes in addiction medicine and is certified 
                  in Medication-Assisted Treatment (MAT). She also treats 
                  co-occurring mental health conditions such as anxiety, 
                  depression, bipolar disorder, and schizophrenia. At RecoveryRx, 
                  she provides personalized and evidence-based treatment in a 
                  safe, nonjudgmental space—where patients feel seen, heard, and 
                  supported.
                </p>
                <p>
                  Dr. Vivian is here to walk alongside you—every step of the way 
                  toward healing and lasting recovery.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-96 lg:h-full group">
              <Image
                src="/images/vivian.jpeg"
                alt="Dr. Vivian Imo"
                fill
                className="object-contain object-top transition-all duration-500 ease-in-out group-hover:scale-105 animate-pulse"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow">
              <h2 className="text-2xl text-[#6e573b] mb-4">Our Mission</h2>
              <p className="text-black mb-6 text-sm font-normal">
                To provide compassionate, evidence-based addiction care that
                empowers individuals and families to heal, grow, and reclaim
                their lives. We are committed to meeting people where they are
                and walking with them every step of the way toward long-term
                recovery.
              </p>
            </div>
            <div className="bg-white p-8 shadow">
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
      <section className="py-16 bg-white">
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
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and accountability in every aspect of our work.",
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
              {
                title: "Trust",
                description:
                  "We earn and honor the confidence of our patients by creating a safe, respectful, and reliable environment for healing.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-none shadow">
                <h3 className="text-lg text-[#6e573b] font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-sm">{value.description}</p>
              </div>
            ))}
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
            href="/contact"
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
