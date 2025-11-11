import { motion } from "framer-motion";

const WebWork = () => {
  const works = [
    {
      title: "Website Development",
      description: "Built modern, responsive websites for Farmacias Similares and other Mexican businesses, focusing on user experience and performance.",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "Dashboard Solutions",
      description: "Developed comprehensive Power BI and Looker dashboards for Dongfeng, Waldo's, and Farmacias Similares, enabling data-driven decision making.",
      gradient: "from-secondary/20 to-accent/20"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Web & Dashboard <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating digital experiences and insights for businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card rounded-2xl p-8 bg-gradient-to-br ${work.gradient}`}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {work.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {work.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebWork;
