import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import PortfolioStats from "@/components/PortfolioStats/PortfolioStats";
import Experience from "@/components/Experience/Experience";
import Testimonials from "@/components/Testimonials/Testimonials";
import Examinations from "@/components/Examinations/Examinations";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <PortfolioStats />
        <Experience />
        <Testimonials />
        <Examinations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
