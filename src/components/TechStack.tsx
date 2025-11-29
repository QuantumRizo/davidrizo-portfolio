import React from "react";
// Importamos los iconos desde la librería que acabas de instalar
import { FaPython, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTensorflow, SiPostgresql, SiSupabase, SiScikitlearn, SiTailwindcss, SiVite, SiGooglecloud } from "react-icons/si";

const technologies = [
  { 
    name: "Python", 
    // Amarillo oficial de Python
    color: "text-[#FFD43B]", 
    icon: <FaPython className="w-8 h-8" /> 
  },
  { 
    name: "React", 
    // Azul cian oficial de React
    color: "text-[#61DAFB]", 
    icon: <FaReact className="w-8 h-8" /> 
  },
  { 
    name: "TensorFlow", 
    // Naranja oficial
    color: "text-[#FF6F00]", 
    icon: <SiTensorflow className="w-8 h-8" /> 
  },
  { 
    name: "PostgreSQL", 
    // Azul elefante oficial
    color: "text-[#336791]", 
    icon: <SiPostgresql className="w-8 h-8" /> 
  },
  { 
    name: "Supabase", 
    // Verde esmeralda oficial
    color: "text-[#3ECF8E]", 
    icon: <SiSupabase className="w-8 h-8" /> 
  },
  { 
    name: "Scikit-learn", 
    // Naranja oficial
    color: "text-[#F7931E]", 
    icon: <SiScikitlearn className="w-8 h-8" /> 
  },
  { 
    name: "Tailwind", 
    // Cyan oficial
    color: "text-[#06B6D4]", 
    icon: <SiTailwindcss className="w-8 h-8" /> 
  },
  { 
    name: "Vite", 
    // Violeta oficial
    color: "text-[#646CFF]", 
    icon: <SiVite className="w-8 h-8" /> 
  },
  { 
    name: "Git", 
    // Rojo/Naranja oficial
    color: "text-[#F05032]", 
    icon: <FaGitAlt className="w-8 h-8" /> 
  },
  { 
    name: "Google Cloud", 
    // Azul brillante oficial de Google
    color: "text-[#4285F4]", 
    icon: <SiGooglecloud className="w-8 h-8" /> 
  },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <h2 className="text-center text-white text-3xl font-bold mb-12 tracking-wider">
        TECH ARSENAL
      </h2>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .tech-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Degradados laterales */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Carrusel */}
      <div className="tech-container flex items-center">
        <div className="flex animate-scroll">
          {/* Renderizado triple para loop infinito suave */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 px-8 min-w-[140px] group transition-all duration-300 hover:scale-110 cursor-default"
            >
              <div className={`transition-all duration-300 drop-shadow-lg ${tech.color} group-hover:scale-110`}>
                {tech.icon}
              </div>
              <span className="text-gray-500 font-mono text-sm group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;