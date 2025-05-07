import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient',
    image: '/images/hero.jpg',
    quote: 'RecoveryRx has made managing my medications so much easier. The reminders and tracking features are invaluable.',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Healthcare Provider',
    image: '/images/hero.jpg',
    quote: 'This platform has significantly improved patient compliance and outcomes.',
  },
  {
    id: 3,
    name: 'Emily Martinez',
    role: 'Pharmacist',
    image: '/images/hero.jpg',
    quote: 'The integration capabilities and user-friendly interface make RecoveryRx a game-changer in healthcare technology.',
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#6e573b] text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-none shadow-md">
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
                  <p className="text-[#6e573b] text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-black text-xs">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;