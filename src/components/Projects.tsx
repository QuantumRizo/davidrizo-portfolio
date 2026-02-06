// pages/Home/Projects.jsx
import { motion } from "framer-motion";
import ProjectCaseStudy from "@/components/ProjectCaseStudy.tsx";
import SectionConnector from "@/components/SectionConnector";
import NeuralNetworkDiagram from "@/components/NeuralNetworkDiagram";

const Projects = () => {
  // Datos de los 3 proyectos seleccionados
  const featuredProjects = [
    {
      title: "Central Simi Portal",
      imageSrc: "/simiPC.png",
      mobileImageSrc: "/simiphone.png",
      secondaryImageSrc: "/simiProject2.png",
      description: "Full-stack legal management platform built with React (Vite) and Supabase. Implements PostgreSQL data modeling, secure authentication, and automated document workflows for uploading, validating, and managing provider records.",
      technologies: ["React", "Vite", "Supabase", "PostgreSQL", "TailwindCSS"],
      projectUrl: "/projects/central-simi",
    },
    {
      title: "Dr. Marco Alvarado",
      imageSrc: "/marcoPC.png",
      secondaryImageSrc: "/marco2.png",
      mobileImageSrc: "/marcoPhone.png",
      description: "Comprehensive clinical management platform for multiple hospitals. Centralizes patient administration with detailed medical histories, an advanced scheduling system, and a robust administrative panel, optimizing operational workflows and patient care.",
      technologies: ["React", "Vite", "Supabase", "TailwindCSS", "Admin Panel"],
      projectUrl: "https://drmarcoalvarado.com",
    },
    {
      title: "Paris Rizo: Clinical Management",
      imageSrc: "/parisPC.png",
      secondaryImageSrc: "/dentistProject2.png",
      mobileImageSrc: "/parisPhone.png",
      description: "Dental appointment platform featuring a custom backend powered by Supabase and Google Calendar API integration. Handles secure patient scheduling, automated syncing of events, data validation workflows, and a streamlined UI that enhances booking reliability and real-time availability management.",
      technologies: ["React", "Vite", "Supabase", "Google Calendar API", "TailwindCSS"],
      projectUrl: "https://paris-rizo-dental.vercel.app/",
    },
    {
      title: "Natalia Muñoz: Industrial Design",
      imageSrc: "/nataliaPC.png",
      secondaryImageSrc: "/nataliaPortfolio2.png",
      mobileImageSrc: "/nataliaPhone.png",
      description: "High-fidelity industrial design portfolio with a strong visual identity, dynamic hero animation, and responsive UI. Built with modern front-end tooling to deliver smooth transitions, an immersive presentation layer, and optimized asset handling for a premium designer showcase experience.",
      technologies: ["React", "Vite", "GSAP", "TailwindCSS", "Responsive Design"],
      projectUrl: "https://nataliamunoz.art",
    },
    {
      title: "Galaxy Classification: ML",
      imageSrc: "/galaxy.jpg",
      CustomVisualElement: <NeuralNetworkDiagram />,
      description: "Machine Learning project focused on the automatic classification of galaxies (AGN vs Starburst) using spectroscopic data from SDSS. Implements 1D Convolutional Neural Networks (CNNs) to analyze spectral flux arrays, achieving high accuracy in astrophysical categorization.",
      technologies: ["Python", "TensorFlow", "Astropy", "Scikit-learn", "CNN"],
      projectUrl: "https://github.com/QuantumRizo/agn-starburst-galaxy-classifier",
    },
  ];

  return (
    <section id="projects" className="pt-0 pb-40 relative bg-[#276339] text-slate-900 overflow-hidden">

      {/* Chalkboard/Blueprint Grid Pattern (Transition Area) */}
      <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}>
      </div>

      {/* WHITE NOTEBOOK CONTAINER */}
      <div className="bg-[#fdfdfd] rounded-b-[3rem] md:rounded-b-[5rem] pb-12 px-4 relative z-10 shadow-2xl overflow-hidden">

        {/* Notebook Graph Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Encabezado de la Sección */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black">
              Featured Projects
            </h2>
          </motion.div>

          {/* Lista Vertical de Estudios de Caso */}
          <div className="flex flex-col gap-0">
            {featuredProjects.map((project, index) => (
              <ProjectCaseStudy key={project.title} {...project} index={index} />
            ))}
          </div>

        </div>
      </div>

      {/* CONNECTOR: Cursor (Transition to About - Left) */}
      <SectionConnector
        imageSrc="/Cursor.png"
        altText="Cursor"
        className="absolute bottom-10 left-10 md:left-20 w-[60px] md:w-[100px] -rotate-12 z-20 drop-shadow-xl"
      />

      {/* CONNECTOR: Pencil (Transition to About - Right) */}
      <SectionConnector
        imageSrc="/Pencil.png"
        altText="Pencil"
        className="absolute bottom-10 -right-5 md:right-10 w-[120px] md:w-[200px] z-20 drop-shadow-xl scale-x-[-1] rotate-12"
      />

    </section>
  );
};

export default Projects;