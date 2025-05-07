import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  );
}
