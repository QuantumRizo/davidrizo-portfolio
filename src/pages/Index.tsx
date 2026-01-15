import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import TechStack from "@/components/TechStack";



const Index = () => {
  return (
    <main className="relative min-h-screen">
      {/* 1. Navbar: Fixed para que siempre flote encima de todo */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="w-full z-0">
        <Hero />
      </div>
      <div>

        <Projects />
        <About />
        <TechStack />
        <Experience />
      </div>
    </main>
  );
};

export default Index;