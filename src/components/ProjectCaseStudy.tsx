import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // 1. Importamos hooks de scroll
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
  
  // 2. Referencia al contenedor de las imágenes para medir su posición
  const containerRef = useRef<HTMLDivElement>(null);

  // 3. Detectamos el scroll de ESTE componente específico
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end": Cuando el TOPE del componente entra por el FONDO de la pantalla
    // "end center": Cuando el FONDO del componente llega al CENTRO de la pantalla
    offset: ["start end", "end center"] 
  });

  // 4. Transformamos el scroll en animaciones
  
  // La imagen 2 (Mobile) sube desde abajo (110%) hasta su posición (0%)
  // Empieza a subir cuando vamos al 40% del recorrido y termina al 70%
  const yOverlay = useTransform(scrollYProgress, [0.5, 0.7], ["110%", "0%"]);
  
  // La imagen 2 también rota un poco para "aterrizar" recta
  const rotateOverlay = useTransform(scrollYProgress, [0.3, 0.9], [6, 0]);

  // La imagen 1 (Desktop) se hace un poco pequeña y transparente para dar profundidad
  const scaleBase = useTransform(scrollYProgress, [0.3, 0.9], [1, 0.95]);
  const opacityBase = useTransform(scrollYProgress, [0.5, 0.9], [1, 0.6]);
  const rotateBase = useTransform(scrollYProgress, [0.3, 0.9], [0, -3]);


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-center py-12"
    >
      {/* --- CANVAS DE IMÁGENES --- */}
      <div 
        ref={containerRef} // Conectamos el ref aquí
        className="w-full lg:w-3/5 h-[400px] lg:h-[550px] relative rounded-3xl overflow-hidden bg-background shadow-2xl"
      >
        <div className="absolute inset-0 bg-background z-0 pointer-events-none" />

        {/* IMAGEN 1: Fondo (Desktop) */}
        {/* Usamos motion.div para aplicar los valores de useTransform (style) */}
        <motion.div 
            style={{ 
              scale: scaleBase, 
              opacity: opacityBase,
              rotate: rotateBase
            }}
            className="absolute inset-4 lg:inset-8 z-10 origin-center"
        >
            <img
            src={imageSrc}
            alt={`${title} main view`}
            className="w-full h-full object-cover rounded-xl shadow-lg border border-white/10"
            />
        </motion.div>

        {/* IMAGEN 2: Overlay (Mobile/Detalle) */}
        <motion.div 
            style={{ 
              y: yOverlay, // Controlado por el scroll
              rotate: rotateOverlay 
            }}
            className="absolute bottom-0 right-0 w-[85%] md:w-[80%] lg:w-[75%] z-20 origin-bottom-right"
        >
            <img
            src={overlayImage}
            alt={`${title} detail view`}
            className="w-full h-auto object-cover rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none shadow-2xl border-t border-l border-white/10 ring-1 ring-black/40"
            />
        </motion.div>
      </div>

      {/* --- INFO (Sin cambios) --- */}
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