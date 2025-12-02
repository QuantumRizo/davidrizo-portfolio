import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCaseStudyProps {
  title: string;
  description: string;
  imageSrc: string;        
  secondaryImageSrc?: string; 
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  title,
  description,
  imageSrc,
  secondaryImageSrc,
  technologies,
  projectUrl,
  githubUrl,
  index,
}) => {
  const overlayImage = secondaryImageSrc || imageSrc;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-center py-12"
    >
      {/* --- CANVAS DE IMÁGENES --- */}
      {/* CORRECCIÓN: 
          1. Cambiado bg-neutral-900 a bg-background (o bg-black si prefieres hardcoded).
          2. ELIMINADO 'border' y 'border-neutral-800' para quitar la línea blanca.
      */}
      <div className="w-full lg:w-3/5 h-[400px] lg:h-[550px] relative rounded-3xl overflow-hidden bg-background group shadow-2xl">
        
        {/* Ajusté el gradiente para que sea sutil sobre el fondo negro */}
        <div className="absolute inset-0 bg-background z-0 pointer-events-none" />

        {/* IMAGEN 1: Fondo (Desktop) */}
        <div className="absolute inset-4 lg:inset-8 z-10 transition-all duration-700 ease-out group-hover:scale-[0.90] group-hover:-rotate-3 group-hover:opacity-60">
            <img
            src={imageSrc}
            alt={`${title} main view`}
            // Quitamos border-neutral-700/50 si quieres que la imagen se funda más, 
            // pero lo dejé sutil para separar la imagen del fondo negro.
            className="w-full h-full object-cover rounded-xl shadow-lg border border-white/10"
            />
        </div>

        {/* IMAGEN 2: Overlay (Mobile/Detalle) */}
        <div className="absolute bottom-0 right-0 w-[85%] md:w-[80%] lg:w-[75%] z-20 transition-all duration-700 ease-out translate-y-[110%] rotate-6 group-hover:translate-y-0 group-hover:rotate-0">
            <img
            src={overlayImage}
            alt={`${title} detail view`}
            className="w-full h-auto object-cover rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none shadow-2xl border-t border-l border-white/10 ring-1 ring-black/40"
            />
        </div>
      </div>

      {/* --- INFO --- */}
      <div className="w-full lg:w-2/5 flex flex-col gap-8 items-start text-left">
        <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h3>
            <p className="text-neutral-400 text-lg leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium text-neutral-300 border border-neutral-800 rounded-full bg-neutral-900/40"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          {projectUrl && (
            <Link to={projectUrl}>
              <Button className="group px-8 py-6 h-auto rounded-full bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-3 text-lg font-medium">
                View More
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
          
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="group px-8 py-6 h-auto rounded-full border-neutral-700 text-white hover:bg-neutral-900 transition-all flex items-center gap-3 text-lg font-medium"
              >
                <Github className="size-5" />
                Source Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCaseStudy;