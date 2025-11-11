import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar /> 
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
};

export default Index;
