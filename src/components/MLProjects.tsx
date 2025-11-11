import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const MLProjects = () => {
  const projects = [
    {
      icon: "🪐",
      title: "Galaxy Classification",
      description: "Classifies galaxies as AGN or Starburst using machine learning and FITS spectral data. Built with Python, scikit-learn, and astronomical data processing.",
      githubUrl: "https://github.com/davidrizo/galaxy-classification",
      projectUrl: "/projects/galaxy-classification"
    },
    {
      icon: "📉",
      title: "Telco Churn Prediction",
      description: "Predicts customer churn with Python and TensorFlow. Analyzes customer behavior patterns to identify at-risk subscribers and optimize retention strategies.",
      githubUrl: "https://github.com/davidrizo/telco-churn",
      projectUrl: "/projects/telco-churn"
    },
    {
      icon: "🧬",
      title: "Brain Tumor Detection",
      description: "Classifies MRI scans using deep learning models. Implements CNN architectures for accurate medical image analysis and tumor identification.",
      githubUrl: "https://github.com/davidrizo/brain-tumor-detection",
      projectUrl: "/projects/brain-tumor-detection"
    }
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
            Machine Learning <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring the intersection of physics, data science, and artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLProjects;
