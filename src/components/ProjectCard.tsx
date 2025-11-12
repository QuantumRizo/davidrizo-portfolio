import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  imageSrc: string; // <-- nueva prop
  githubUrl?: string;
  projectUrl: string;
  delay?: number;
}

const ProjectCard = ({
  icon,
  title,
  description,
  imageSrc,
  githubUrl,
  projectUrl,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl flex flex-col h-full"
    >
      {/* Icono y título en la misma línea */}
      <div className="flex items-center space-x-3 p-6">
        <div className="text-4xl">{icon}</div>
        <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
          {title}
        </h3>
      </div>

      {/* Imagen del proyecto */}
      <div className="w-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-b-2xl"
        />
      </div>

      {/* Descripción */}
      <p className="text-muted-foreground p-6 pt-4 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Botones */}
      <div className="p-6 pt-0 space-y-3">
        <Button
          className="glass-card w-full group-hover:border-primary transition-all"
          asChild
        >
          <Link to={projectUrl}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        {githubUrl && (
          <Button
            variant="outline"
            className="glass-card w-full group-hover:border-primary transition-all"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
