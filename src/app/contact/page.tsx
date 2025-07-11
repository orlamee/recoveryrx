/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Contact RecoveryRx"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl mb-6">
            We're Here to Help
          </h1>
          <p className="text-sm md:text-lg mb-8 leading-relaxed">
            Reach out to begin your recovery journey or get answers to your
            questions. Our compassionate team is available 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaPhone className="text-3xl text-[#6e573b]" />,
                title: "Call Us",
                content: "24/7 Admissions Line",
                detail: "410-449-7007",
                link: "tel:410-449-7007",
                linkText: "Call Now",
              },
              {
                icon: <FaMapMarkerAlt className="text-3xl text-[#6e573b]" />,
                title: "Visit Us",
                content: "RecoveryRx Center",
                detail: "1412 Crain Highway North, Suite 6B, Glen Burnie, MD 21061",
                link: "#map",
                linkText: "Get Directions",
              },
              {
                icon: <FaEnvelope className="text-3xl text-[#6e573b]" />,
                title: "Email Us",
                content: "General Inquiries",
                detail: "contact@recoveryrxclinic.com",
                link: "mailto:help@contact@recoveryrxclinic.com",
                linkText: "Send Email",
              },
              {
                icon: <FaClock className="text-3xl text-[#6e573b]" />,
                title: "Hours",
                content: "Open 24 Hours",
                detail: "Admissions available anytime",
                link: "#contact",
                linkText: "Schedule Call",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg text-[#6e573b] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-black mb-1">{item.content}</p>
                <p className="text-black text-sm mb-4">{item.detail}</p>
                <Link
                  href={item.link}
                  className="inline-block bg-[#6e573b] hover:bg-[#5a4730] text-white font-medium px-4 py-2 rounded-full text-xs transition-colors duration-300"
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 shadow-md">
            <h2 className="text-4xl text-[#6e573b] text-center mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-black text-sm font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full text-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6e573b]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-black text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full text-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6e573b]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-black text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full text-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6e573b]"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-black text-sm font-medium mb-1"
                >
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full text-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6e573b]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#6e573b] hover:bg-[#5a4730] text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-[#6e573b] text-center mb-8">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual map component or iframe */}
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map of RecoveryRx Location</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
