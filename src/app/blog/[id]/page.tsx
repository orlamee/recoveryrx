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
      <p>In the landscape of addiction treatment, Suboxone has emerged as a significant tool, offering hope and support to individuals grappling with opioid dependency. Its role in addiction recovery is profound, yet often misunderstood. In this article, we delve into what Suboxone is, how it works, and its place in the broader context of addiction treatment.</p>

      <h4>What is Suboxone?</h4>
      <p>Suboxone is a medication that contains two active ingredients: buprenorphine and naloxone. Buprenorphine is a partial opioid agonist, meaning it activates the same receptors in the brain as opioids but to a lesser extent, helping to reduce cravings and withdrawal symptoms without producing the same intense high. Naloxone, on the other hand, is an opioid antagonist, blocking the effects of opioids and serving as a deterrent to misuse.</p>

      <h4>How Does Suboxone Work?</h4>
      <p>When taken as prescribed, Suboxone binds to opioid receptors in the brain, mitigating withdrawal symptoms and reducing cravings, thus enabling individuals to focus on recovery without the constant struggle against physical dependence. The addition of naloxone discourages misuse by precipitating withdrawal symptoms if Suboxone is tampered with or taken inappropriately.</p>

      <h4>The Role of Suboxone in Addiction Treatment</h4>
      <p>Suboxone is often prescribed as part of a comprehensive treatment program known as medication-assisted treatment (MAT). MAT combines medication with counseling and behavioral therapies to address the complex nature of addiction. By stabilizing individuals physically with Suboxone while providing therapeutic support, MAT offers a holistic approach to recovery.</p>

      <h4>Benefits of Suboxone Therapy</h4>
      <ul>
        <li><strong>Reduction of Withdrawal Symptoms:</strong> Suboxone helps alleviate the discomfort of withdrawal, making detoxification safer and more manageable.</li>
        <li><strong>Decreased Cravings:</strong> By occupying opioid receptors in the brain, Suboxone reduces the urge to use opioids, allowing individuals to focus on rebuilding their lives.</li>
        <li><strong>Improved Treatment Retention:</strong> Studies have shown that individuals engaged in MAT, including Suboxone therapy, are more likely to remain in treatment and achieve long-term recovery compared to those who undergo detoxification alone.</li>
        <li><strong>Lower Risk of Overdose:</strong> Since Suboxone contains naloxone, which blocks the effects of opioids, it can reduce the risk of overdose if opioids are used concurrently.</li>
      </ul>

      <h4>Addressing Misconceptions</h4>
      <p>Despite its proven efficacy, Suboxone is not without controversy. Some critics argue that it merely replaces one addiction with another, perpetuating dependency. However, addiction is a complex disease involving changes in brain chemistry, and Suboxone, when used as part of a comprehensive treatment plan, can be a crucial tool in breaking the cycle of addiction.</p>

      <h4>Conclusion</h4>
      <p>Suboxone represents a significant advancement in addiction treatment, offering relief from withdrawal symptoms, reducing cravings, and improving treatment outcomes. When combined with counseling and behavioral therapies, it provides a comprehensive approach to addressing opioid addiction. As awareness grows and stigma diminishes, Suboxone continues to play a vital role in supporting individuals on their journey to recovery.</p>
      
      <p>If you or someone you know is struggling with opioid addiction, consider reaching out to a healthcare provider to explore the possibility of Suboxone therapy as part of a personalized treatment plan.</p>
    `,
  },
  {
    id: "breaking-the-stigma-mental-health-in-recovery",
    title: "Breaking the Stigma: Mental Health in Recovery",
    excerpt:
      "Addressing the dual challenges of addiction recovery and mental health, and how integrated treatment approaches can make a difference.",
    date: "July 6, 2025",
    image: "/images/blog-health.jpg",
    readTime: "6 min read",
    author: "Dr. Michael Chen",
    content: `
      <p>Mental health and addiction recovery are deeply interconnected, yet stigma surrounding both conditions often prevents individuals from seeking the comprehensive care they need. Breaking down these barriers is essential for effective treatment and lasting recovery.</p>

      <h4>The Connection Between Mental Health and Addiction</h4>
      <p>Research consistently shows that mental health disorders and substance use disorders frequently co-occur. This dual diagnosis, also known as comorbidity, affects millions of people worldwide. Common mental health conditions that accompany addiction include depression, anxiety, PTSD, and bipolar disorder.</p>

      <h4>Understanding Dual Diagnosis</h4>
      <p>When someone experiences both a mental health disorder and a substance use disorder simultaneously, it's called a dual diagnosis or co-occurring disorder. These conditions can exacerbate each other, making treatment more complex but not impossible.</p>

      <h4>Integrated Treatment Approaches</h4>
      <p>The most effective treatment for dual diagnosis involves an integrated approach that addresses both conditions simultaneously. This may include:</p>
      <ul>
        <li><strong>Comprehensive Assessment:</strong> Thorough evaluation of both mental health and substance use patterns</li>
        <li><strong>Medication Management:</strong> Careful coordination of medications for both conditions</li>
        <li><strong>Behavioral Therapy:</strong> Evidence-based therapies like CBT and DBT</li>
        <li><strong>Support Groups:</strong> Peer support specifically for dual diagnosis</li>
      </ul>

      <h4>Overcoming Stigma</h4>
      <p>Stigma remains one of the biggest barriers to treatment. Education, open conversations, and sharing stories of recovery help normalize mental health treatment and addiction recovery. When we treat these as medical conditions rather than moral failings, we create space for healing.</p>

      <h4>Building a Support Network</h4>
      <p>Recovery thrives in community. Building a strong support network that understands both mental health and addiction challenges is crucial for long-term success. This network might include family, friends, healthcare providers, and peer support groups.</p>

      <p>Remember, seeking help for mental health and addiction is a sign of strength, not weakness. With proper treatment and support, recovery is possible.</p>
    `,
  },
  {
    id: "family-support-in-the-recovery-journey",
    title: "Family Support in the Recovery Journey",
    excerpt:
      "How involving family members in the recovery process can strengthen outcomes and rebuild relationships damaged by addiction.",
    date: "July 4, 2025",
    image: "/images/blog-family.jpg",
    readTime: "7 min read",
    author: "Dr. Emily Rodriguez",
    content: `
      <p>Addiction doesn't just affect the individual struggling with substance use—it impacts the entire family system. When family members become actively involved in the recovery process, it can significantly improve treatment outcomes and help rebuild damaged relationships.</p>

      <h4>The Impact of Addiction on Families</h4>
      <p>Addiction creates ripple effects throughout families, often leading to broken trust, financial strain, emotional trauma, and communication breakdowns. Family members may experience their own mental health challenges, including anxiety, depression, and codependency issues.</p>

      <h4>The Role of Family in Recovery</h4>
      <p>Research shows that family involvement in addiction treatment can dramatically improve success rates. When families participate in the recovery process, individuals are more likely to complete treatment, maintain sobriety longer, and experience improved overall well-being.</p>

      <h4>Family Therapy and Education</h4>
      <p>Family-based interventions can include:</p>
      <ul>
        <li><strong>Family Therapy Sessions:</strong> Structured sessions that address family dynamics and communication patterns</li>
        <li><strong>Educational Programs:</strong> Learning about addiction as a disease and understanding the recovery process</li>
        <li><strong>Support Groups:</strong> Groups specifically for family members of those in recovery</li>
        <li><strong>Couples Counseling:</strong> For married individuals or those in committed relationships</li>
      </ul>

      <h4>Setting Healthy Boundaries</h4>
      <p>Learning to set and maintain healthy boundaries is crucial for both the person in recovery and their family members. This includes understanding the difference between support and enabling, and creating an environment that promotes accountability and growth.</p>

      <h4>Rebuilding Trust</h4>
      <p>Trust is often one of the most damaged aspects of family relationships affected by addiction. Rebuilding trust takes time, consistency, and open communication. It's a gradual process that requires patience and commitment from all family members.</p>

      <h4>Creating a Recovery-Supportive Environment</h4>
      <p>Families can help create an environment that supports long-term recovery by removing triggers from the home, establishing new traditions and activities, and focusing on healthy communication patterns.</p>

      <p>Remember, recovery is a family journey. With proper support, education, and professional guidance, families can heal together and emerge stronger than before.</p>
    `,
  },
];

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

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
          <div className="max-w-none text-gray-700">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: "1.8",
              }}
              className="
                [&>p]:mb-6 [&>p]:text-sm [&>p]:leading-relaxed
                [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-gray-900 [&>h4]:mb-4 [&>h4]:mt-8
                [&>ul]:mb-6 [&>ul]:pl-6 [&>ul]:text-sm [&>ul]:leading-relaxed
                [&>li]:mb-3 [&>li]:text-base [&>li]:leading-relaxed
                [&>li>strong]:font-normal [&>li>strong]:text-gray-900
              "
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
