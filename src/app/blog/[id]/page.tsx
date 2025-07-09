import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

const blogPosts = [
  {
    id: "understanding-medication-assisted-treatment",
    title: "Understanding Medication-Assisted Treatment (MAT)",
    excerpt:
      "Learn how MAT combines medications with counseling and behavioral therapies to provide a comprehensive approach to substance use disorder treatment.",
    date: "July 8, 2025",
    image: "/images/health.jpg",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    content: `
      <h2>What is Medication-Assisted Treatment?</h2>
      <p>Medication-Assisted Treatment (MAT) is an evidence-based approach that combines FDA-approved medications with counseling and behavioral therapies to treat substance use disorders. This comprehensive method has proven to be one of the most effective ways to help individuals achieve and maintain recovery.</p>
      
      <h2>How MAT Works</h2>
      <p>MAT works by normalizing brain chemistry, blocking the euphoric effects of alcohol and opioids, relieving physiological cravings, and normalizing body functions without the negative effects of the abused drug. The treatment is individualized and tailored to meet each patient's specific needs.</p>
      
      <h2>Benefits of MAT</h2>
      <ul>
        <li>Reduces cravings and withdrawal symptoms</li>
        <li>Improves patient survival rates</li>
        <li>Increases retention in treatment programs</li>
        <li>Decreases illicit drug use and criminal activity</li>
        <li>Improves the ability to gain and maintain employment</li>
        <li>Enhances birth outcomes for pregnant women with substance use disorders</li>
      </ul>
      
      <h2>Common Medications Used</h2>
      <p>Several FDA-approved medications are used in MAT programs, including methadone, buprenorphine, and naltrexone for opioid use disorders, and naltrexone, acamprosate, and disulfiram for alcohol use disorders. Each medication works differently and is chosen based on individual patient needs.</p>
      
      <h2>The Role of Counseling</h2>
      <p>While medication addresses the physical aspects of addiction, counseling and behavioral therapies address the psychological and social factors. This combination provides the best chance for sustainable recovery and helps patients develop coping strategies for long-term success.</p>
      
      <h2>Getting Started with MAT</h2>
      <p>If you or someone you know is struggling with substance use disorder, MAT could be an effective treatment option. At RecoveryRx, our experienced medical team works with each patient to develop a personalized treatment plan that may include MAT as part of a comprehensive recovery program.</p>
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
      <h2>The Connection Between Mental Health and Addiction</h2>
      <p>Mental health disorders and substance use disorders often occur together, a condition known as co-occurring disorders or dual diagnosis. Research shows that approximately 50% of people with a mental health disorder will also experience a substance use disorder at some point in their lives.</p>
      
      <h2>Breaking Down the Stigma</h2>
      <p>One of the biggest barriers to recovery is the stigma surrounding both mental health and addiction. Many people feel ashamed or embarrassed about seeking help, which can delay treatment and worsen outcomes. It's important to understand that both mental health disorders and addiction are medical conditions that require professional treatment.</p>
      
      <h2>Common Co-Occurring Conditions</h2>
      <ul>
        <li>Depression and alcohol use disorder</li>
        <li>Anxiety disorders and prescription drug abuse</li>
        <li>PTSD and substance use disorders</li>
        <li>Bipolar disorder and various substance dependencies</li>
        <li>ADHD and stimulant abuse</li>
      </ul>
      
      <h2>Integrated Treatment Approaches</h2>
      <p>The most effective treatment for co-occurring disorders involves an integrated approach that addresses both conditions simultaneously. This may include medication management, individual therapy, group counseling, family therapy, and peer support programs.</p>
      
      <h2>The Importance of Comprehensive Care</h2>
      <p>At RecoveryRx, we understand that recovery is not just about stopping substance use—it's about healing the whole person. Our integrated treatment programs address both mental health and substance use disorders, providing patients with the tools they need for lasting recovery.</p>
      
      <h2>Hope for Recovery</h2>
      <p>Recovery from co-occurring disorders is possible with the right treatment and support. By addressing both conditions together and providing comprehensive care, individuals can achieve lasting wellness and rebuild their lives.</p>
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
      <h2>The Role of Family in Recovery</h2>
      <p>Recovery is not just an individual journey—it affects entire families. When family members are involved in the treatment process, outcomes improve significantly. Family support can provide motivation, accountability, and a strong foundation for long-term recovery success.</p>
      
      <h2>How Addiction Affects Families</h2>
      <p>Addiction can strain family relationships, create trust issues, and cause emotional trauma for all family members. Children may experience neglect or instability, spouses may feel betrayed or helpless, and parents may struggle with guilt and confusion about how to help their loved one.</p>
      
      <h2>Family Therapy Benefits</h2>
      <ul>
        <li>Improves communication between family members</li>
        <li>Helps rebuild trust and repair relationships</li>
        <li>Educates family about addiction as a disease</li>
        <li>Develops healthy coping strategies for the entire family</li>
        <li>Creates a supportive home environment for recovery</li>
        <li>Addresses enabling behaviors that may hinder recovery</li>
      </ul>
      
      <h2>Setting Healthy Boundaries</h2>
      <p>One of the most important aspects of family involvement in recovery is learning to set healthy boundaries. This means supporting the person in recovery while not enabling destructive behaviors. Family members learn to practice tough love while maintaining compassion and hope.</p>
      
      <h2>Building a Recovery-Supportive Environment</h2>
      <p>Creating a home environment that supports recovery involves removing triggers, establishing new routines, and developing family activities that don't revolve around substance use. This might include regular family meetings, shared meals, and engaging in healthy recreational activities together.</p>
      
      <h2>Long-Term Family Healing</h2>
      <p>Recovery is an ongoing process that requires continued family support and involvement. Regular family therapy sessions, participation in support groups like Al-Anon, and ongoing education about addiction and recovery can help families maintain healthy relationships and support long-term sobriety.</p>
      
      <h2>Getting Help at RecoveryRx</h2>
      <p>At RecoveryRx, we believe that involving families in the recovery process is essential for success. Our family therapy programs help heal relationships, improve communication, and create a strong support system for lasting recovery.</p>
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
