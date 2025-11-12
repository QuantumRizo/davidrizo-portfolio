"use client";

import { motion, useScroll, useTransform } from "framer-motion"; // 👈 1. Importar esto
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background";

const Hero = () => {
  // 👇 2. Hooks para detectar el scroll y calcular la opacidad
  const { scrollY } = useScroll();
  // Cuando el scroll va de 0px a 600px, la opacidad va de 1 (visible) a 0 (invisible)
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Opcional: Efecto Parallax suave (el fondo se mueve un poquito más lento que el scroll)
  // Si prefieres que esté TOTALMENTE quieto como en el video, borra esta línea y la propiedad 'y' abajo.
  const y = useTransform(scrollY, [0, 600], [0, 200]);

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-8 md:px-4">
        
        {/* 👇 3. FONDO FIJO TIPO VIDEO DE YOUTUBE */}
        <motion.div 
          style={{ opacity, y }} // Conectamos la animación
          className="fixed inset-0 z-0 w-full h-full pointer-events-none" // 'fixed' es la clave
        >
          <ShaderBackground />
          
          {/* Opcional: Mantén el gradiente inferior si quieres que la fusión sea perfecta incluso antes de hacer scroll */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background" />
        </motion.div>

        {/* Cuadro glassy con título y descripción */}
        {/* Nota: Asegúrate de que este div tenga z-10 para que pase POR ENCIMA del fondo fijo */}
        <motion.div
          className="relative z-10 flex flex-col items-center space-y-6 glass-card p-8 rounded-2xl max-w-3xl mx-auto"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-white text-center"
          >
            Hi, I'm David Rizo
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] text-center"
          >
            Physicist • Data Scientist • Software Developer.  
            I build intelligent systems, data dashboards, and modern web apps.
          </motion.p>
        </motion.div>

        {/* Botones sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-4 flex-wrap mt-8 z-10"
        >
          <Button size="lg" variant="outline" className="glass-card" asChild>
            <a href="https://github.com/QuantumRizo" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>

          <Button size="lg" variant="outline" className="glass-card" asChild>
            <a href="https://linkedin.com/in/felix-rizo-dev" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>

          <Button size="lg" variant="outline" className="glass-card" asChild>
            <a href="mailto:davidrizo.phys@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Contact
            </a>
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;