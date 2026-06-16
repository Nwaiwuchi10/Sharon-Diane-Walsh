import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main><Services /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
