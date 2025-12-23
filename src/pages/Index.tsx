import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlockingPaymentModal from "@/components/BlockingPaymentModal";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <BlockingPaymentModal />
    </main>
  );
};

export default Index;
