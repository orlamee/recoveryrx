import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 'understanding-suboxone-a-tool-in-the-battle-against-addiction',
    title: 'Understanding Suboxone: A Tool in the Battle Against Addiction',
    excerpt: 'Discover how Suboxone combines medication with comprehensive treatment to help individuals overcome opioid dependency and achieve lasting recovery.',
    date: 'July 8, 2025',
    image: '/images/opiods.jpg',
    readTime: '8 min read',
  },
  {
    id: 'breaking-the-stigma-mental-health-in-recovery',
    title: 'Breaking the Stigma: Mental Health in Recovery',
    excerpt: 'Addressing the dual challenges of addiction recovery and mental health, and how integrated treatment approaches can make a difference.',
    date: 'July 6, 2025',
    image: '/images/health-2.jpg',
    readTime: '6 min read',
  },
  {
    id: 'family-support-in-the-recovery-journey',
    title: 'Family Support in the Recovery Journey',
    excerpt: 'How involving family members in the recovery process can strengthen outcomes and rebuild relationships damaged by addiction.',
    date: 'July 4, 2025',
    image: '/images/blog.jpg',
    readTime: '7 min read',
  },
];

const BlogPage = () => {
  return (
    <main>
      <Navbar />
      
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
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-[#6e573b] font-[500] text-sm hover:text-blue-800"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
