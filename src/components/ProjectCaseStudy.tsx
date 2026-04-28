import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCaseStudyProps {
  title: string;
  description: string;
  imageSrc: string;
  secondaryImageSrc?: string;
  mobileImageSrc?: string;
  CustomVisualElement?: React.ReactNode;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  index: number;
  stickyColor?: string | null;
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
  stickyColor,
}) => {
  return (
    <div
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center py-20 border-b border-black/5 last:border-0 relative`}
    >
      {/* --- SCREENSHOT COMPONENT --- */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
        <div className="relative w-full max-w-[450px] z-10 transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* CUSTOM ELEMENT (Higher Priority) OR MOBILE IMAGE */}
        {CustomVisualElement ? (
          <div className="absolute -bottom-16 -right-6 md:-bottom-20 md:-right-24 w-[180px] md:w-[300px] z-20 transition-transform duration-300 hover:scale-105">
            {CustomVisualElement}
          </div>
        ) : mobileImageSrc ? (
          <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-12 w-[100px] md:w-[160px] z-20 transition-transform duration-300 hover:scale-105">
            <img
              src={mobileImageSrc}
              alt={`${title} Mobile`}
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        ) : null}
      </div>

      {/* --- INFO (Wrapped in Post-it if stickyColor provided) --- */}
      <div className="w-full lg:w-2/5 relative">
        <div className={`
          ${stickyColor ? `${stickyColor} p-8 shadow-lg` : "p-2"}
          relative z-10
        `}>
          {/* Tape Effect for Sticky Note (Simplified without blur to prevent artifacting) */}
          {stickyColor && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 shadow-sm z-20 transform -rotate-2"></div>
          )}

          <div className="flex flex-col gap-6 items-start text-left">
            <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight leading-none">{title}</h3>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">{description}</p>

            <div className="flex flex-wrap gap-2 my-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black bg-white/60 border border-black/10 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              {projectUrl && projectUrl !== "#" && (
                <Link to={projectUrl}>
                  <Button className="rounded-full bg-black text-white hover:bg-gray-800 font-bold px-6 py-4 text-sm shadow-md transition-transform hover:-translate-y-1">
                    View Project <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
              )}

              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full border-2 border-black text-black hover:bg-black/5 font-bold px-6 py-4 text-sm transition-transform hover:-translate-y-1">
                    <Github className="mr-2 size-4" /> GitHub
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;