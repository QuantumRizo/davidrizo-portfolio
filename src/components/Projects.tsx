// pages/Home/Projects.jsx
import { motion } from "framer-motion";
import ProjectCaseStudy from "@/components/ProjectCaseStudy.tsx";
import SectionConnector from "@/components/SectionConnector";
import NeuralNetworkDiagram from "@/components/NeuralNetworkDiagram";

const Projects = () => {
  const featuredProjects = [
    {
      title: "MUYMUY Beauty Studio",
      imageSrc: "/muymuy_mac.webp",
      mobileImageSrc: "/muymuy_phone.webp",
      description: "MUYMUY Beauty Studio is a comprehensive digital ecosystem designed to unify administrative operations and the end-user experience through a highly organized and scalable codebase. I developed both an administrative web platform and a native mobile application, utilizing a strategic technical isolation approach to ensure stable, conflict-free deployment cycles.",
      technologies: ["React", "Full-Stack", "iOS & Android", "PostgreSQL", "Admin System"],
      projectUrl: "#", // Internal page removed
      stickyColor: "bg-rose-100",
    },
    {
      title: "MedicAdmin: Clinical CMS",
      imageSrc: "/medicadmin_mac.webp",
      mobileImageSrc: "/medicadmin_phone.webp",
      description: "A comprehensive Clinical Management System (CMS) designed for high-performance medical practices. It centralizes patient data through secure Electronic Health Records (EHR), manages complex scheduling across multiple hospitals, and features automated WhatsApp integration for appointment confirmations.",
      technologies: ["React", "Full-Stack", "Healthcare Tech", "WhatsApp API", "Relational DB"],
      projectUrl: "#",
      stickyColor: "bg-blue-100",
    },
    {
      title: "Central Simi Media Match",
      imageSrc: "/mediamatch_mac.webp",
      mobileImageSrc: "/mediamatch_phone.webp",
      description: "A specialized PR platform connecting media outlets with the Central Simi team for interview scheduling and press management. Integrates Microsoft Graph API for seamless Outlook calendar synchronization and Resend for automated, high-deliverability email notifications.",
      technologies: ["React", "Microsoft Graph", "Cloud Architecture", "Node.js", "Enterprise Mail"],
      projectUrl: "#",
      stickyColor: "bg-amber-100",
    },
    {
      title: "Color Studio: Industrial Design",
      imageSrc: "/colorstudio_mac.webp",
      mobileImageSrc: "/colorstudio_phone.webp",
      description: "Premium Industrial Design showcase platform. Engineered for visual impact, it combines high-performance asset loading with an editorial layout to present design portfolios with technical precision and artistic flair.",
      technologies: ["React", "UI/UX Design", "Motion Graphics", "Frontend Architecture", "GSAP"],
      projectUrl: "https://nataliamunoz.art",
      stickyColor: "bg-purple-100",
    },
    {
      title: "Galaxy Classification: ML",
      imageSrc: "/galaxy.webp",
      CustomVisualElement: <NeuralNetworkDiagram />,
      description: "Machine Learning project focused on the automatic classification of galaxies (AGN vs Starburst) using spectroscopic data from SDSS. Implements 1D Convolutional Neural Networks (CNNs) to analyze spectral flux arrays, achieving high accuracy in astrophysical categorization.",
      technologies: ["Deep Learning", "TensorFlow", "Astrophysics", "CNN Architecture", "Big Data"],
      projectUrl: "https://github.com/QuantumRizo/agn-starburst-galaxy-classifier",
      stickyColor: null, // No sticky for ML
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

      {/* YELLOW LEGAL PAD CONTAINER */}
      <div className="bg-[#fdf9bd] rounded-b-[3rem] md:rounded-b-[5rem] pb-12 px-4 relative z-10 shadow-2xl overflow-hidden">

        {/* PUNCHED HOLES EFFECT (Top) */}
        <div className="absolute top-6 left-0 right-0 flex justify-around px-4 opacity-20 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-black shadow-inner" />
          ))}
        </div>

        {/* Legal Pad Patterns: Red vertical margin (Thickened to 4px) + Gray horizontal lines */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 79px, #ff7e7e 4px, transparent 83px),
              linear-gradient(#d1d5db 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 32px'
          }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-chalk tracking-widest text-black/90 drop-shadow-sm">
              Featured Projects
            </h2>
          </motion.div>

          {/* Vertical Case Study List */}
          <div className="flex flex-col gap-0">
            {featuredProjects.map((project, index) => (
              <ProjectCaseStudy key={project.title} {...project} index={index} />
            ))}
          </div>

        </div>
      </div>

      {/* CONNECTOR: Cursor (Transition to About - Left) */}
      <SectionConnector
        imageSrc="/Cursor.webp"
        altText="Cursor"
        className="absolute bottom-10 left-10 md:left-20 w-[60px] md:w-[100px] -rotate-12 z-20 drop-shadow-xl"
      />

      {/* CONNECTOR: Pencil (Transition to About - Right) */}
      <SectionConnector
        imageSrc="/Pencil.webp"
        altText="Pencil"
        className="absolute bottom-10 -right-5 md:right-10 w-[120px] md:w-[200px] z-20 drop-shadow-xl scale-x-[-1] rotate-12"
      />

    </section>
  );
};

export default Projects;