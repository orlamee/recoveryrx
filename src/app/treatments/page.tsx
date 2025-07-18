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

export default function TreatmentPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/what-treat.jpg"
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
            At RecoveryRx, we treat more than symptoms — we support people.
            Whether you or a loved one is facing opioid dependency, alcohol
            addiction, cannabis use, or any other substance use disorder (SUD),
            we provide the care, tools, and compassion needed to move forward.
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

          {/* Opioid Use Disorder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-96  overflow-hidden shadow-md order-last lg:order-first">
              <Image
                src="/images/opiods.jpg"
                alt="Opioid Dependency Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiHeartBottle className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Opioid Use Disorder
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
                    We provide evidence-based treatment for opioid addiction,
                    including heroin, fentanyl, and prescription painkillers.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    MAT Options like Suboxone and Sublocade, which help reduce
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
              </div>
              <p className="text-black mt-6 italic text-sm">
                We are here to support you every step of the way, offering a
                safe environment where healing can begin.
              </p>
            </div>
          </div>

          {/* Alcohol Use Disorder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiOpenedFoodCan className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Alcohol Use Disorder
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
                we offer medical support and recovery tools to help reduce
                cravings, prevent relapse, and rebuild your life.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden shadow-md">
              <Image
                src="/images/alcohol.jpg"
                alt="Alcohol Addiction Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cocaine Use Disorder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-96 overflow-hidden shadow-md order-last lg:order-first">
              <Image
                src="/images/cocaine.jpg"
                alt="Cocaine Addiction Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiMedicines className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Cocaine Use Disorder
                </h3>
              </div>
              <p className="text-black mb-6">
                Cocaine is a highly addictive stimulant with dangerous short- and long-term effects. Whether snorted, smoked, or injected, it can cause lasting damage to both the body and mind. At RecoveryRx, we provide medically supervised detox and comprehensive treatment for those struggling with cocaine addiction.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Whole-Person Treatment that addresses both physical dependence and underlying mental health concerns
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Medical Detox Support to manage withdrawal symptoms safely and effectively
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Behavioral Therapy & Counseling to help break the cycle of cravings, binge use, and relapse
                  </p>
                </div>
              </div>
              <p className="text-black mt-6 italic text-sm">
                Cocaine addiction can affect every area of life—from heart health and mental well-being to relationships and self-worth. Our compassionate, evidence-based approach is designed to help you regain control and build lasting recovery.
              </p>
            </div>
          </div>

          {/* Cannabis Use Disorder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiBrain className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Cannabis Use Disorder
                </h3>
              </div>
              <p className="text-black mb-6">
                Marijuana is the most commonly used illicit drug in the U.S.,
                often perceived as harmless, but chronic use can lead to
                addiction and serious physical, mental, and cognitive health
                issues. Our approach focuses on education, support, and
                evidence-based treatment for those struggling with cannabis use.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Integrated Treatment Plans that address marijuana use
                    alongside co-occurring mental health concerns
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Support for Withdrawal & Cravings using behavioral therapies
                    and motivational approaches
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Focus on Long-Term Impact with care designed to improve
                    memory, motivation, and daily functioning
                  </p>
                </div>
              </div>
              <p className="text-black mt-6 italic text-sm">
                Frequent marijuana use, especially when started young, can
                affect brain development, impair judgment, and increase the risk
                of anxiety, depression, and addiction. Our team is dedicated to
                supporting lasting recovery through informed and compassionate
                care.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden shadow-md">
              <Image
                src="/images/cannabis.jpg"
                alt="Cannabis Use Disorder Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Tobacco Use Disorder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-96 overflow-hidden shadow-md order-last lg:order-first">
              <Image
                src="/images/tobacco.jpg"
                alt="Tobacco Use Disorder Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiHeartBottle className="text-3xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Tobacco Use Disorder
                </h3>
              </div>
              <p className="text-black mb-6">
                Tobacco is one of the most commonly overlooked addictions in
                treatment settings. At RecoveryRx, we believe that true recovery
                means addressing all substance use, including tobacco, to
                support long-term health and healing.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Integrated Approach that treats tobacco use alongside other
                    substance use disorders
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Individualized Treatment Plans tailored to each person's
                    readiness and goals for quitting
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#6e573b] font-bold mr-2">✓</span>
                  <p className="text-black">
                    Collaborative Care that encourages open dialogue about the
                    best time and method to begin cessation
                  </p>
                </div>
              </div>
              <p className="text-black mt-6 italic text-sm">
                We're committed to helping you reach your full potential, and
                that means tackling every addiction with compassion and
                evidence-based care.
              </p>
            </div>
          </div>

          {/* Substance Use Disorders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-white p-8 rounded-none shadow-md">
              <div className="flex items-center mb-4">
                <GiMedicines className="text-2xl text-[#6e573b] mr-4" />
                <h3 className="text-2xl text-[#6e573b] font-semibold">
                  Other Substance Use Disorders
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
                src="/images/subuse.jpg"
                alt="Substance Use Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Co-Occurring Disorders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-96 overflow-hidden shadow-md order-last lg:order-first">
              <Image
                src="/images/co-occur.jpg"
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

          {/* Contact Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl text-[#6e573b] mb-6">
                Ready to Begin Your Recovery Journey?
              </h2>
              <p className="text-black mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
                You don't have to face this alone. Our compassionate team is
                ready to help you take the first step toward healing. We are
                here to walk with you.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#6e573b] hover:bg-[#5a4730] text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Our Team Today →
              </Link>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
