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

      {/* 2. Hero Container (La parte de atrás) */}
      {/* - h-screen: Ocupa toda la pantalla.
          - sticky top-0: Se queda pegado arriba al scrollear.
          - z-0: Se queda en el nivel base (NO uses negativo aquí).
      */}
      <div className="h-screen z-0">
        <Hero />
      </div>

      {/* 3. Content Container (La parte que sube) */}
      {/* - relative: Para que el z-index funcione.
          - z-10: Importante para que pase POR ENCIMA del Hero.
          - bg-background: CRÍTICO. Debe tener color sólido para tapar al Hero.
      */}
      <div className="relative z-10 bg-background shadow-2xl">
        <About />
        <Projects />
        <TechStack />
        <Experience />
        
        {/* Espacio extra al final para que no se sienta apretado */}
        <div className="py-10 text-center text-sm text-gray-500">
            © 2025 David Rizo Portfolio
        </div>
      </div>
    </main>
  );
};

export default Index;