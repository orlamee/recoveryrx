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
    name: "Daniel K.",
    role: "Patient",
    image: "/images/avatar.png",
    quote:
      "I was skeptical about using medication to manage my recovery, but the MAT program helped me feel normal again. The team at RecoveryRx explained everything and made sure I was comfortable. I finally feel like myself.",
  },
  {
    id: 2,
    name: "Monique H.",
    role: "Patient",
    image: "/images/avatar.png",
    quote:
      "After a relapse, I was afraid to ask for help again. RecoveryRx welcomed me without judgment and helped me rebuild from a stronger foundation. I'm now focused, motivated, and feeling hopeful for the first time in a while.",
  },
  {
    id: 3,
    name: "Serena V.",
    role: "Patient",
    image: "/images/avatar.png",
    quote:
      "For years, I felt stuck in a cycle of anxiety and substance use. RecoveryRx helped me understand how the two were connected and gave me tools to work through both. This was the first time I felt truly seen and understood.",
  },
  {
    id: 4,
    name: "Marcus D.",
    role: "Patient",
    image: "/images/avatar.png",
    quote:
      "Before RecoveryRx, I didn't think long-term recovery was possible for me. But now, with a strong support system and real tools in place, I'm celebrating one full year sober.",
  },
  {
    id: 5,
    name: "Tyler S.",
    role: "Patient",
    image: "/images/avatar.png",
    quote:
      "The team at RecoveryRx didn't just treat my addiction, they treated me as a whole person. My mental health, physical health, and lifestyle were all considered.",
  },
  {
    id: 6,
    name: "Kevin L.",
    role: "Patient",
    image: "/images/avatar.png",
    quote:
      "RecoveryRx didn't just treat me they involved my family in the process. We had real conversations, learned how to support each other, and finally started to rebuild trust. That changed everything for me.",
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
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
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
