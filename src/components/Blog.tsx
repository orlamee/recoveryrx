import React from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Digital Healthcare',
    excerpt: 'Exploring how technology is transforming patient care and medical adherence.',
    date: 'May 5, 2025',
    image: '/images/blog.jpg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Improving Patient Outcomes',
    excerpt: 'How digital health platforms are revolutionizing patient-provider relationships.',
    date: 'May 3, 2025',
    image: '/images/blog.jpg',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Healthcare Technology Trends',
    excerpt: 'Latest innovations and developments in the healthcare technology sector.',
    date: 'May 1, 2025',
    image: '/images/blog.jpg',
    readTime: '6 min read',
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#6e573b] text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border border-white rounded-none overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-black mb-4 text-xs">{post.excerpt}</p>
                <button className="text-[#6e573b] font-[500] text-sm hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;