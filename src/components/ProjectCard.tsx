import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  githubUrl: string;
  projectUrl: string;
  delay?: number;
}

const ProjectCard = ({ icon, title, description, githubUrl, projectUrl, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl p-6 group flex flex-col"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="space-y-3">
        <Button
          className="glass-card w-full group-hover:border-primary transition-all"
          asChild
        >
          <Link to={projectUrl}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;
