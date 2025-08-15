import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Programs from "@/components/Programs"
import Impact from "@/components/Impact"
import PartnersSection from "@/components/PartnersSection"
import CallToAction from "@/components/CallToAction"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Programs />
      <Impact />
      <PartnersSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;