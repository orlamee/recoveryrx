"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

const blogPosts = [
  {
    id: "understanding-suboxone-a-tool-in-the-battle-against-addiction",
    title: "Understanding Suboxone: A Tool in the Battle Against Addiction",
    excerpt:
      "Discover how Suboxone combines medication with comprehensive treatment to help individuals overcome opioid dependency and achieve lasting recovery.",
    date: "July 8, 2025",
    image: "/images/opiods.jpg",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    content: `
    `,
  },
  {
    id: "breaking-the-stigma-mental-health-in-recovery",
    title: "Breaking the Stigma: Mental Health in Recovery",
    excerpt:
      "Addressing the dual challenges of addiction recovery and mental health, and how integrated treatment approaches can make a difference.",
    date: "July 6, 2025",
    image: "/images/health-2.jpg",
    readTime: "6 min read",
    author: "Dr. Michael Chen",
    content: `
    `,
  },
  {
    id: "family-support-in-the-recovery-journey",
    title: "Family Support in the Recovery Journey",
    excerpt:
      "How involving family members in the recovery process can strengthen outcomes and rebuild relationships damaged by addiction.",
    date: "July 4, 2025",
    image: "/images/blog.jpg",
    readTime: "7 min read",
    author: "Dr. Emily Rodriguez",
    content: `
    `,
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-[#6e573b] mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="bg-[#6e573b] text-white px-6 py-3 rounded-md hover:bg-[#5a4730] transition-colors duration-300"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex text-sm items-center gap-2 text-[#6e573b] hover:text-[#5a4730] transition-colors duration-300 mb-8"
          >
            <FiArrowLeft />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-3xl font-bold text-[#000] mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-xs font-normal">
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed text-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.8",
            }}
          />
        </div>
      </article>

      <Footer />
    </main>
  );
}
