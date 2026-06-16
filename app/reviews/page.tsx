import Navbar from "@/components/Navbar/Navbar";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function ReviewsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main><Testimonials /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
