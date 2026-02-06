import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCaseStudyProps {
  title: string;
  description: string;
  imageSrc: string;
  secondaryImageSrc?: string;
  mobileImageSrc?: string; // Nuevo prop opcional
  CustomVisualElement?: React.ReactNode; // Nuevo prop para visuales personalizados (SVG, canvas, etc.)
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  title,
  description,
  imageSrc,
  mobileImageSrc,
  CustomVisualElement,
  technologies,
  projectUrl,
  githubUrl,
  index,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center py-10 border-b border-black/10 last:border-0`}
    >
      {/* --- SCREENSHOT COMPONENT --- */}
      <div className="w-full lg:w-1/2 relative group perspective-1000 flex justify-center items-center">
        <div className="relative w-full max-w-[450px] transition-transform duration-500 hover:scale-105 hover:rotate-1 z-10">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto drop-shadow-2xl filter contrast-110"
          />
        </div>

        {/* CUSTOM ELEMENT (Higher Priority) OR MOBILE IMAGE */}
        {CustomVisualElement ? (
          <div className="absolute -bottom-16 -right-6 md:-bottom-20 md:-right-24 w-[180px] md:w-[300px] z-20 transition-transform duration-500 hover:scale-110 hover:-rotate-3">
            {CustomVisualElement}
          </div>
        ) : mobileImageSrc ? (
          <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-12 w-[100px] md:w-[160px] z-20 transition-transform duration-500 hover:scale-110 hover:-rotate-3">
            <img
              src={mobileImageSrc}
              alt={`${title} Mobile`}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        ) : null}
      </div>

      {/* --- INFO --- */}
      <div className="w-full lg:w-2/5 flex flex-col gap-6 items-start text-left">
        <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">{title}</h3>

        <p className="text-slate-700 text-lg leading-relaxed font-medium">{description}</p>

        <div className="flex flex-wrap gap-2 my-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-white border border-black rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {projectUrl && (
            <Link to={projectUrl}>
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 font-bold px-8 py-6 text-lg shadow-lg">
                View Case Study <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          )}

          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full border-2 border-black text-black hover:bg-black/5 font-bold px-8 py-6 text-lg">
                <Github className="mr-2 size-5" /> GitHub
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCaseStudy;