import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main><Contact /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
