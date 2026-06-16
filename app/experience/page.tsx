import Navbar from "@/components/Navbar/Navbar";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function ExperiencePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main><Experience /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
