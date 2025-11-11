import Hero from "@/components/Hero";
import MLProjects from "@/components/MLProjects";
import WebWork from "@/components/WebWork";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <MLProjects />
      <WebWork />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
