/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import {
  GiBrain,
  GiHeartBottle,
  GiMedicines,
  GiOpenedFoodCan,
} from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

export default function TreatmentPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Treatment at RecoveryRx"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl mb-6">
            Understanding What You're Facing Is the First Step Toward Healing
          </h1>
          <p className="text-sm md:text-[16px] mb-8">
            At RecoveryRx, we treat more than symptoms, we support people.
            Whether you or a loved one are facing substance use, opioid
            dependency, or alcohol addiction, we provide the care, tools, and
            compassion needed to move forward.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-black text-lg leading-relaxed">
            Our clinical expertise is matched with deep empathy for the human
            side of recovery. Our goal is to empower you to regain control of
            your life with dignity and support.
          </p>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-[#6e573b] text-center mb-12">
            Core Conditions We Treat
          </h2>

          {/* Substance Use Disorders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiMedicines className="text-2xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Substance Use Disorders (SUDs)
                </h3>
              </div>
              <p className="text-black mb-6">
                Substance use can start small, and quickly take over daily life.
                We treat a range of substance-related challenges, from misuse to
                dependency, with proven therapeutic approaches and personal
                support.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Personalized Treatment Plans that combine counseling,
                    medication-assisted treatment (MAT), and relapse prevention
                    techniques
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Compassionate Care from a team who understands the
                    complexities of addiction
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Evidence-Based Approaches that focus on long-term recovery,
                    not just short-term fixes
                  </p>
                </div>
              </div>
              <p className="text-black mt-6 italic text-sm">
                We meet you where you are, working together to create a roadmap
                for your recovery that empowers you at every step.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden shadow-md">
              <Image
                src="/images/blog.jpg"
                alt="Substance Use Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Opioid Dependency */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-96  overflow-hidden shadow-md order-last lg:order-first">
              <Image
                src="/images/hero.jpg"
                alt="Opioid Dependency Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiHeartBottle className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Opioid Dependency
                </h3>
              </div>
              <p className="text-black mb-6">
                Opioid addiction is a growing crisis, but with the right
                treatment, recovery is absolutely possible. Our evidence-based
                approach includes Medication-Assisted Treatment (MAT), therapy,
                and long-term support to reduce cravings, prevent relapse, and
                restore control.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    MAT Options like Suboxone and Methadone, which help reduce
                    withdrawal symptoms and cravings
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Ongoing Medical Supervision to ensure safe, effective
                    treatment
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Therapy and Support Groups to strengthen mental health and
                    build resilience
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Pain Management Education to explore healthier alternatives
                    to opioid use
                  </p>
                </div>
              </div>
              <p className="text-black mt-6 italic text-sm">
                We are here to support you every step of the way, offering a
                safe environment where healing can begin.
              </p>
            </div>
          </div>

          {/* Alcohol Addiction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiOpenedFoodCan className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Alcohol Addiction
                </h3>
              </div>
              <p className="text-black mb-6">
                Alcohol use can silently impact relationships, health, and
                stability. We help clients recognize unhealthy patterns, manage
                withdrawal symptoms, and build sustainable habits for lasting
                recovery.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Clinical Assessments to determine the most effective path to
                    recovery
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    One-on-One and Group Counseling to address the emotional and
                    psychological aspects of alcohol use
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Relapse Prevention Strategies designed to equip you with the
                    tools to maintain sobriety
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Holistic Wellness Support including physical and mental
                    health resources to promote well-being
                  </p>
                </div>
              </div>
              <p className="text-black mt-6 italic text-sm">
                Our treatment focuses on helping you not only stop drinking but
                also rebuild your life and relationships.
              </p>
            </div>
            <div className="relative h-96  overflow-hidden shadow-md">
              <Image
                src="/images/blog.jpg"
                alt="Alcohol Addiction Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Co-Occurring Disorders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-96  overflow-hidden shadow-md order-last lg:order-first">
              <Image
                src="/images/hero.jpg"
                alt="Co-Occurring Disorders Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiBrain className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Co-Occurring Disorders
                </h3>
              </div>
              <p className="text-black mb-6">
                Many people face the challenge of both addiction and mental
                health struggles. At RecoveryRx, we specialize in treating the
                whole person, addressing both substance use and mental health
                conditions simultaneously.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black text-sm">
                    Integrated Care for anxiety, depression, PTSD, trauma, and
                    other behavioral health issues
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black text-sm">
                    Tailored Therapy Plans that combine mental health support
                    with addiction recovery
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black text-sm">
                    Comprehensive Healing that nurtures both your mind and body
                  </p>
                </div>
              </div>
              <p className="text-black text-sm mt-6 italic">
                We believe that lasting recovery comes from healing all aspects
                of your life, and we're here to guide you through it.
              </p>
            </div>
          </div>

          {/* Family Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <FaHandsHelping className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Support for Families
                </h3>
              </div>
              <p className="text-black mb-6">
                Addiction impacts the entire family. RecoveryRx offers
                specialized services to help loved ones understand, support, and
                heal alongside the person in recovery.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black text-sm">
                    Family Education and Counseling to provide tools for
                    rebuilding trust and communication
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black text-sm">
                    Support Resources for navigating the recovery journey as a
                    family unit
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black text-sm">
                    Guidance on Setting Healthy Boundaries to support long-term
                    recovery
                  </p>
                </div>
              </div>
              <p className="text-black text-sm mt-6 italic">
                We believe in the power of community and are committed to
                helping families thrive together through this challenging
                process.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden shadow-md">
              <Image
                src="/images/health.jpg"
                alt="Family Support Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-[#6e573b] mb-6">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-black mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            You don't have to face this alone. Our compassionate team is ready
            to help you take the first step toward healing.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#6e573b] hover:bg-[#5a4730] text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contact Our Team Today →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
