import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PricingSection />
        <StatsSection />
        <ContactSection />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
