// pages/Home/Projects.jsx (o donde lo tengas)
import { motion } from "framer-motion";
import ProjectCaseStudy from "@/components/ProjectCaseStudy.tsx"; // Asegúrate de importar el nuevo componente
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  // Datos de los 3 proyectos seleccionados
  const featuredProjects = [
    {
      title: t("projects.items.central_simi.title"),
      imageSrc: "/simiProject1.png",
      secondaryImageSrc: "/simiProject2.png",
      description: t("projects.items.central_simi.description"),
      technologies: ["React", "Vite", "Supabase", "PostgreSQL", "TailwindCSS"],
      projectUrl: "/projects/central-simi",
    },
    {
      title: t("projects.items.dental.title"),
      imageSrc: "/dentistProject1.png",
      secondaryImageSrc: "/dentistProject2.png",
      description: t("projects.items.dental.description"),
      technologies: ["React", "Vite", "Supabase", "Google Calendar API", "TailwindCSS"],
      projectUrl: "https://paris-rizo-dental.vercel.app/",
    },
    {
      title: t("projects.items.natalia.title"),
      imageSrc: "/nataliaPortfolio1.png",
      secondaryImageSrc: "/nataliaPortfolio2.png",
      description: t("projects.items.natalia.description"),
      technologies: ["React", "Vite", "GSAP", "TailwindCSS", "Responsive Design"],
      projectUrl: "https://nataliamunoz.art",
    },
    {
      title: t("projects.items.galaxy.title"),
      imageSrc: "/galaxyProject1.jpg",
      secondaryImageSrc: "/galaxyProject2.jpg",
      description: t("projects.items.galaxy.description"),
      technologies: ["Python", "Astropy", "scikit-learn", "Deep Learning"],
      githubUrl: "https://github.com/QuantiumRizo/agn-starburst-galaxy-classifier",
      projectUrl: "/projects/galaxy-classification",
    },
  ];

  return (
    <section className="py-10 px-4 relative bg-black text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t("projects.title")}
          </h2>
        </motion.div>

        {/* Lista Vertical de Estudios de Caso */}
        <div className="flex flex-col">
          {featuredProjects.map((project, index) => (
            <ProjectCaseStudy key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* Botón "Ver Más" al final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-24"
        >
          <Link to="/projects">
            <Button
              variant="outline"
              className="group text-lg px-8 py-4 rounded-full border-neutral-700 text-white hover:bg-neutral-900 transition-all"
            >
              {t("projects.cta")}
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;