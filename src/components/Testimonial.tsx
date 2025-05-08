"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chunkArray = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    image: "/images/avatar.png",
    quote:
      "RecoveryRx has made managing my medications so much easier. The reminders and tracking features are invaluable.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Healthcare Provider",
    image: "/images/avatar.png",
    quote:
      "This platform has significantly improved patient compliance and outcomes.",
  },
  {
    id: 3,
    name: "Emily Martinez",
    role: "Pharmacist",
    image: "/images/avatar.png",
    quote:
      "The integration capabilities and user-friendly interface make RecoveryRx a game-changer in healthcare technology.",
  },
  {
    id: 4,
    name: "John Doe",
    role: "Caregiver",
    image: "/images/avatar.png",
    quote: "Now I can help my mom take her meds on time every day.",
  },
  {
    id: 5,
    name: "Lisa Kim",
    role: "Nurse",
    image: "/images/avatar.png",
    quote: "Great for keeping track of patient dosages and side effects.",
  },
];

const slides = chunkArray(testimonials, 3);

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#6e573b] text-center mb-12">
          What Our Users Say
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 px-2"
                style={{ width: "100%" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slide.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white p-6 rounded shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="relative w-12 h-12 mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-[#6e573b] text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-black text-sm">{testimonial.quote}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-[#6e573b]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
