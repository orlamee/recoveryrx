"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    image: "/images/homebg.jpg",
    title: "Welcome to RecoveryRx",
    subtitle: "Your partner in overcoming opioid use disorder and substance addiction.",
    buttonText: "Start Your Journey Today"
  },
   {
    id: 1,
    image: "/images/our-approach.jpg",
    title: "Welcome to RecoveryRx",
    subtitle: "Your partner in overcoming opioid use disorder and substance addiction.",
    buttonText: "Start Your Journey Today"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = () => {
    const nextSection = document.querySelector("main > *:nth-child(3)");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-6xl relative">
        <h1 
          key={`title-${currentSlide}`}
          className="text-4xl md:text-5xl mb-6 animate-fade-in-up"
        >
          {slides[currentSlide].title}
        </h1>
        <p 
          key={`subtitle-${currentSlide}`}
          className="text-sm md:text-[16px] mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200"
        >
          {slides[currentSlide].subtitle}
        </p>
        <button
          onClick={handleButtonClick}
          className="inline-block bg-[#6e573b] hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition cursor-pointer animate-fade-in-up animation-delay-400 transform hover:scale-105"
        >
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <FiChevronRight className="text-2xl" />
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-[#6e573b] transition-all duration-1000 ease-linear"
          style={{ 
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none'
          }}
        />
      </div>
    </section>
  );
}
