import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main><About /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
