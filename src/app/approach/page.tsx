import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { GiBrain } from "react-icons/gi";
import { FaUserDoctor, FaHandHoldingHeart } from "react-icons/fa6";

export default function ApproachPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/approach-bg.jpg"
            alt="Our Approach at RecoveryRx"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl mb-6">
            Our Approach to Recovery
          </h1>
          <p className="text-sm md:text-[16px] mb-8 leading-relaxed">
            Personalized, evidence-based, and compassionate care that treats the whole person, not just the symptoms.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#6e573b] text-center mb-5">
              Science-Based Care, Human-Centered Healing
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              At RecoveryRx, we take a personalized, evidence-based, and compassionate approach to treating addiction and co-occurring mental health conditions in adults. Our clinic is founded and led by a doctoral-prepared, board-certified Psychiatric Mental Health Nurse Practitioner (PMHNP), bringing advanced clinical training and a deep commitment to whole-person care.
            </p>
          </div>

          {/* Core Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h3 className="text-2xl text-[#6e573b] mb-6 font-semibold">
                Individualized Treatment Plans
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                We understand that addiction is complex and deeply personal. That&apos;s why we focus on individualized treatment plans that are designed to meet each client&apos;s unique needs, history, and recovery goals.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Services may include psychiatric evaluations, medication-assisted treatment (MAT), individual therapy, and support for co-occurring mental health concerns such as anxiety, depression, or trauma.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/our-approach.jpg"
                alt="Individualized Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Progress Over Perfection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg order-last lg:order-first">
              <Image
                src="/images/pro.jpg"
                alt="Progress Over Perfection"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#6e573b] mb-6 font-semibold">
                Progress Over Perfection
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                We believe that recovery isn&apos;t about perfection—it&apos;s about progress. We provide a respectful, nonjudgmental space where adults can feel safe to be honest, supported, and empowered to take meaningful steps toward change.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Whether someone is seeking help for the first time or returning to treatment, we meet them where they are, clinically and emotionally.
              </p>
            </div>
          </div>

          {/* Our Pillars */}
          <div className="mb-16">
            <h3 className="text-3xl text-[#6e573b] text-center mb-12 font-semibold">
              The Pillars of Our Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Evidence-Based Care */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <GiBrain className="text-4xl text-[#6e573b]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Evidence-Based Care
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our treatments are grounded in the latest scientific research and proven methodologies, ensuring you receive the most effective care available.
                </p>
              </div>

              {/* Personalized Treatment */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <FaUserDoctor className="text-4xl text-[#6e573b]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Personalized Treatment
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Every treatment plan is uniquely designed for your specific needs, history, and recovery goals—because your journey is uniquely yours.
                </p>
              </div>

              {/* Compassionate Care */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <FaHandHoldingHeart className="text-4xl text-[#6e573b]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Compassionate Care
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We provide a safe, nonjudgmental environment where you can heal with dignity, respect, and unwavering support.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-[#6e573b] text-white p-12 rounded-lg text-center">
            <h3 className="text-2xl md:text-3xl mb-6 font-semibold">
              Rooted in Science, Guided by Humanity
            </h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Our approach is rooted in science, but guided by humanity. We&apos;re here not just to treat symptoms, but to walk with you toward long-term wellness, stability, and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-[#6e573b] mb-6 font-semibold">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
            Experience the difference that personalized, compassionate care can make. Our team is ready to support you every step of the way.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#6e573b] hover:bg-[#5a4730] text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us Today →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
