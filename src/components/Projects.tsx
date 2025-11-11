import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import {
  Globe,
  BarChart3,
  Brain,
  DatabaseZap,
  Tent,
  LayoutDashboard,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Globe className="size-8 text-primary" />,
      title: "Galaxy Classification",
      description:
        "Classifies galaxies as AGN or Starburst using machine learning and FITS spectral data. Built with Python, scikit-learn, and astronomical data processing.",
      githubUrl: "https://github.com/davidrizo/galaxy-classification",
      projectUrl: "/projects/galaxy-classification",
    },
    {
      icon: <DatabaseZap className="size-8 text-primary" />,
      title: "CentralSimi (Provider Portal)",
      description:
        "Full-stack platform built with React (Vite) and Supabase for secure legal document management. Implements PostgreSQL relational modeling, role-based access control, and dynamic file workflows for upload, validation, and transformation of legal records.",
    //  githubUrl: "#",
      projectUrl: "/projects/central-simi",
    },
    {
      icon: <BarChart3 className="size-8 text-primary" />,
      title: "Telco Churn Prediction",
      description:
        "Predicts customer churn with Python and TensorFlow. Analyzes customer behavior patterns to identify at-risk subscribers and optimize retention strategies.",
      githubUrl: "https://github.com/davidrizo/telco-churn",
      projectUrl: "/projects/telco-churn",
    },
    {
      icon: <LayoutDashboard className="size-8 text-primary" />,
      title: "Marketing Campaign Dashboard",
      description:
        "Consolidated analytics dashboard. Connects and visualizes data from Programmatic, Google Ads, and GA4 to track KPI performance.",
    //  githubUrl: "#",
      projectUrl: "/projects/campaign-dashboard",
    },
    {
      icon: <Brain className="size-8 text-primary" />,
      title: "Brain Tumor Detection",
      description:
        "Classifies MRI scans using deep learning models. Implements CNN architectures for accurate medical image analysis and tumor identification.",
      githubUrl: "https://github.com/davidrizo/brain-tumor-detection",
      projectUrl: "/projects/brain-tumor-detection",
    },
    {
      icon: <Tent className="size-8 text-primary" />,
      title: "Summer Camp Web Page",
      description:
        "Responsive and engaging landing page for a summer camp, built with modern web technologies to attract and inform visitors.",
    //  githubUrl: "#",
      projectUrl: "/projects/summer-camp",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring the intersection of physics, data science, and artificial
            intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title}>
              <ProjectCard {...project} delay={index * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
