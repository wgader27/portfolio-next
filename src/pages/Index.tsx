import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import CuratedWork from "@/components/CuratedWork";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <CuratedWork />
        <TechStack />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
