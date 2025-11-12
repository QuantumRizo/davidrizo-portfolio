import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import {
  Globe,
  BarChart3,
  Brain,
  DatabaseZap,
  Tent,
  LayoutDashboard,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
  {
    icon: <Globe className="size-8 text-primary" />,
    title: "Galaxy Classification",
    imageSrc: "/galaxy.jpg",
    description:
      "Deep learning system that classifies galaxies as Active Galactic Nuclei (AGN) or Starburst using FITS spectroscopic data from SDSS. Combines Python, Astropy, and scikit-learn to extract spectral features and achieve high-precision astrophysical classification.",
    githubUrl: "https://github.com/QuantumRizo/agn-starburst-galaxy-classifier",
    projectUrl: "/projects/galaxy-classification",
  },
  {
    icon: <DatabaseZap className="size-8 text-primary" />,
    title: "CentralSimi (Provider Portal)",
    imageSrc: "/centralsimi.jpg",
    description:
      "Full-stack legal management platform built with React (Vite) and Supabase. Implements PostgreSQL data modeling, secure authentication, and automated document workflows for uploading, validating, and managing provider records.",
    projectUrl: "/projects/central-simi",
  },
  {
    icon: <BarChart3 className="size-8 text-primary" />,
    title: "Telco Churn Prediction",
    imageSrc: "/churn.jpg",
    description:
      "AI-driven model to predict customer churn in telecom datasets using TensorFlow and scikit-learn. Features advanced preprocessing, neural networks, and performance optimization to identify high-risk clients and enhance retention strategies.",
    githubUrl: "https://github.com/QuantumRizo/Telco_Churn",
    projectUrl: "/projects/telco-churn",
  },
  {
    icon: <LayoutDashboard className="size-8 text-primary" />,
    title: "Marketing Campaign Dashboard",
    imageSrc: "/dashboard.jpg",
    description:
      "Interactive data visualization dashboard integrating Google Ads, Programmatic, and GA4 metrics. Designed to monitor marketing KPIs, optimize campaigns, and present performance insights in real time.",
    projectUrl: "/projects/campaign-dashboard",
  },
  {
    icon: <Brain className="size-8 text-primary" />,
    title: "Brain Tumor Detection",
    imageSrc: "/brain.jpg",
    description:
      "Convolutional Neural Network that classifies MRI brain scans for tumor detection. Utilizes TensorFlow, OpenCV, and data augmentation to achieve high diagnostic accuracy and support medical image analysis workflows.",
    githubUrl: "https://github.com/QuantumRizo/Brain-Tumor-Classification",
    projectUrl: "/projects/brain-tumor-detection",
  },
  {
    icon: <Tent className="size-8 text-primary" />,
    title: "Summer Camp Web Page",
    imageSrc: "/summercamp.jpg",
    description:
      "Modern and responsive landing page developed with React and TailwindCSS. Combines dynamic visuals and clean UX to showcase camp programs, drive engagement, and facilitate online registration.",
    projectUrl: "/projects/summer-camp",
  },
];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete showcase of my work across data science, AI, and web
            development.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>

        {/* Back to Home button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <Link to="/">
            <Button
              variant="outline"
              className="group text-lg px-6 py-3 rounded-xl border-primary text-primary hover:bg-primary hover:text-background transition-all"
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
