// Mantenemos React para el componente
import React from "react";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    name: "Python",
    color: "#FFD43B",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    name: "React",
    color: "#61DAFB",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    name: "TensorFlow",
    color: "#FF6F00",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
  },
  {
    name: "Scikit-learn",
    color: "#F7931E",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "Vite",
    color: "#646CFF",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
  },
  {
    name: "Power BI",
    color: "#F2C811",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    name: "Pandas",
    color: "#150458",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
  },
  {
    name: "NumPy",
    color: "#013243",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
  },
  {
    name: "Linux",
    color: "#FCC624",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
  },
  {
    name: "Node.js",
    color: "#339933",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Git",
    color: "#F05032",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
  {
    name: "Google Cloud",
    color: "#4285F4",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
  },
];

const TechStack = () => {
  const { t } = useTranslation(); // HOOK

  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <h2 className="text-center text-white text-3xl font-bold mb-12 tracking-wider">
        {t("stack.title").toUpperCase()}
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
              <div
                className="transition-all duration-300 drop-shadow-lg group-hover:scale-110"
                style={{ filter: `drop-shadow(0 0 5px ${tech.color}80)` }}
              >
                <img
                  src={tech.iconUrl}
                  alt={tech.name}
                  className="w-10 h-10 object-contain" // Use w-10 h-10 for slightly better visibility with images
                />
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