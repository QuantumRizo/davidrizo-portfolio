import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Central de Negocios MX",
      period: "Current",
      description: "Leading data science initiatives, developing ML models, and creating actionable insights from complex datasets.",
      current: true
    },
    {
      title: "Coding Program Lead",
      company: "French Woods Festival of the Performing Arts",
      period: "2025 - 2026",
      description: "Led comprehensive coding program, teaching programming fundamentals and web development to students.",
      current: false
    },
    {
      title: "Licenciatura en Física",
      company: "Universidad Nacional Autónoma de México (UNAM)",
      period: "– 2025",
      description: "Completed a rigorous program in theoretical and experimental physics, building a strong foundation in mathematics, data analysis, and problem-solving.",
      current: false
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card opacity-50" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">About</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey from theoretical physics to practical data science
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 relative"
            >
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                    Current
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                  {exp.title.charAt(0)}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
