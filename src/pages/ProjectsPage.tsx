import { motion } from "framer-motion";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const featuredProjects = [
    {
      title: "Central Simi Portal",
      imageSrc: "/simiProject1.png",
      secondaryImageSrc: "/simiProject2.png",
      description:
        "Full-stack legal management platform built with React (Vite) and Supabase. Implements PostgreSQL data modeling, secure authentication, and automated document workflows for uploading, validating, and managing provider records.",
      technologies: ["React", "Vite", "Supabase", "PostgreSQL", "TailwindCSS"],
      projectUrl: "/projects/central-simi",
    },
    {
      title: "Paris Rizo Dental",
      imageSrc: "/dentistProject1.png",
      secondaryImageSrc: "/dentistProject2.png",
      description:
        "Dental appointment platform featuring a custom backend powered by Supabase and Google Calendar API integration. Handles secure patient scheduling, automated syncing of events, data validation workflows, and a streamlined UI that enhances booking reliability and real-time availability management.",
      technologies: ["React", "Vite", "Supabase", "Google Calendar API", "TailwindCSS"],
      projectUrl: "https://paris-rizo-dental.vercel.app/",
    },
    {
      title: "Natalia Muñoz Industrial Portfolio",
      imageSrc: "/nataliaPortfolio1.png",
      secondaryImageSrc: "/nataliaPortfolio2.png",
      description:
        "High-fidelity industrial design portfolio with a strong visual identity, dynamic hero animation, and responsive UI. Built with modern front-end tooling to deliver smooth transitions, an immersive presentation layer, and optimized asset handling for a premium designer showcase experience.",
      technologies: ["React", "Vite", "GSAP", "TailwindCSS", "Responsive Design"],
      projectUrl: "https://nataliamunoz.art",
    },
    {
      title: "Galaxy Classification",
      imageSrc: "/galaxyProject1.jpg",
      secondaryImageSrc: "/galaxyProject2.jpg",
      description:
        "Deep learning system that classifies galaxies as Active Galactic Nuclei (AGN) or Starburst using FITS spectroscopic data from SDSS. Combines Python, Astropy, and scikit-learn to extract spectral features and achieve high-precision astrophysical classification.",
      technologies: ["Python", "Astropy", "scikit-learn", "Deep Learning"],
      githubUrl: "https://github.com/QuantiumRizo/agn-starburst-galaxy-classifier",
      projectUrl: "/projects/galaxy-classification",
    },
  ];

  return (
    <section className="py-20 px-4 relative bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Project Archives</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A complete showcase of my work across data science, AI, and web development.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {featuredProjects.map((project, index) => (
            <ProjectCaseStudy key={project.title} {...project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <Link to="/">
            <Button
              variant="outline"
              className="group text-lg px-6 py-3 rounded-full border-neutral-700 text-white hover:bg-neutral-900 transition-all"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
