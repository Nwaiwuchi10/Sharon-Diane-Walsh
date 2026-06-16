import Navbar from "@/components/Navbar/Navbar";
import Examinations from "@/components/Examinations/Examinations";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function ExaminationsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main><Examinations /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
