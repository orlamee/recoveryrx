import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { GiMedicines, GiPill, GiHeartBottle } from "react-icons/gi";
import { FaSyringe } from "react-icons/fa";

export default function MATPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mat-hero.png"
            alt="Medication-Assisted Treatment at RecoveryRx"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl mb-6">
            Medication-Assisted Treatment (MAT)
          </h1>
          <p className="text-sm md:text-[16px] mb-8 leading-relaxed">
            A proven, comprehensive approach that combines FDA-approved medications with counseling and support to help you regain control of your recovery.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#6e573b] text-center mb-5">
              What is Medication-Assisted Treatment (MAT)?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Medication-Assisted Treatment, or MAT, is a proven and effective way to support recovery from addiction — especially opioid use disorder. MAT combines safe, FDA-approved medications with counseling and support to reduce cravings, ease withdrawal symptoms, and help people feel more in control of their recovery.
            </p>
          </div>

          {/* MAT Options Section */}
          <div className="mb-16">
            <h3 className="text-3xl text-[#6e573b] text-center mb-12 font-semibold">
              At RecoveryRx, we offer several MAT options, including:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Suboxone */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <GiPill className="text-4xl text-[#6e573b]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Suboxone
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A daily medication taken by mouth that helps reduce opioid cravings and withdrawal symptoms without producing a &ldquo;high.&rdquo;
                </p>
              </div>

              {/* Sublocade */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <FaSyringe className="text-4xl text-[#6e573b]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Sublocade
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A monthly injection that delivers a steady dose of buprenorphine (the same ingredient in Suboxone) to reduce cravings and support long-term recovery.
                </p>
              </div>

              {/* Vivitrol */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <GiHeartBottle className="text-4xl text-[#6e573b]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Vivitrol
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A once-a-month injection that blocks the effects of opioids or alcohol, helping prevent relapse after detox.
                </p>
              </div>
            </div>
          </div>

          {/* Comprehensive Approach */}
          <div className="mb-16">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <GiMedicines className="text-4xl text-[#6e573b]" />
              </div>
              <h3 className="text-2xl text-[#6e573b] mb-6 font-semibold">
                More Than Just Medication
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                MAT is more than just medication — it&apos;s a comprehensive approach that supports your physical, emotional, and mental health. By combining these treatments with personalized counseling and care, we help you take real steps toward lasting recovery.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-[#6e573b] text-white p-12 rounded-lg text-center">
            <h3 className="text-2xl md:text-3xl mb-6 font-semibold">
              We&apos;re Here to Help
            </h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              If you have questions or want to know which option is right for you or your loved one, we&apos;re here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-[#6e573b] mb-6 font-semibold">
            Ready to Learn More About MAT?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
            Contact us today to discuss which MAT option might be right for your recovery journey. Our compassionate team is here to answer your questions and support you.
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
