import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  // CORRECCIÓN 1: CONTROL DE LA LÍNEA
  // offset: ["start 80%", "end end"]
  // Significa: "Empieza a llenar la barra cuando el top de la sección esté al 80% de la pantalla
  // y termina cuando el final de la sección llegue al centro".
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const experiences = [
    {
      title: t("experience.roles.current.title"),
      company: t("experience.roles.current.company"),
      period: t("experience.roles.current.period"),
      description: t("experience.roles.current.description"),
      skills: [
        "Python",
        "Machine Learning",
        "SQL",
        "Power BI",
        "Web Development",
        "Data Visualization"
      ],
      current: true
    },
    {
      title: t("experience.roles.french_woods.title"),
      company: t("experience.roles.french_woods.company"),
      period: t("experience.roles.french_woods.period"),
      description: t("experience.roles.french_woods.description"),
      skills: ["Teaching", "Programming", "Web Development", "Leadership", "Mentorship"],
      current: false
    },
    {
      title: t("experience.roles.navigatis.title"),
      company: t("experience.roles.navigatis.company"),
      period: t("experience.roles.navigatis.period"),
      description: t("experience.roles.navigatis.description"),
      skills: ["SQL", "Data Management", "Data Cleaning", "Reporting", "Operational Analytics"],
      current: false
    },
    {
      title: t("experience.roles.unam.title"),
      company: t("experience.roles.unam.company"),
      period: t("experience.roles.unam.period"),
      description: t("experience.roles.unam.description"),
      skills: ["Physics", "Applied Mathematics", "Research", "Analytical Thinking", "Problem Solving"],
      current: false
    }
  ];


  return (
    <section className="py-24 px-4 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Espera a que el 50% del título sea visible
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t("experience.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-0">

          {/* BARRA ESTATICA */}
          <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* BARRA ANIMADA */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 md:left-[50%] top-0 bottom-0 w-[2px] bg-white origin-top -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          />

          {/* INDICADOR QUE SIGUE EL SCROLL (BOLITA) */}
          <motion.div
            style={{
              top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1])
            }}
            className="absolute left-0 md:left-[50%] w-[18px] h-[18px] rounded-full bg-white z-20 -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.8)] border border-white"
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* PUNTO CENTRAL */}
                <div className="absolute left-[-33px] md:left-[50%] top-0 w-4 h-4 rounded-full bg-black border-2 border-white z-10 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  {exp.current && (
                    <div className="absolute inset-0 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                  )}
                </div>

                <div className="flex-1 hidden md:block" />

                {/* CORRECCIÓN 2: ANIMACIÓN DE LAS TARJETAS (DE AFUERA HACIA ADENTRO) */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  // IMPORTANTE: margin negativo mueve la línea de trigger hacia arriba
                  // "-150px" obliga al usuario a scrollear 150px MÁS para que aparezca la tarjeta
                  viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-1"
                >
                  <div className="glass-card p-6 rounded-2xl relative group hover:scale-[1.02] transition-transform duration-300 border-white/10 hover:border-white/30">

                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-white font-medium opacity-90">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Espacio extra para extender la línea al final */}
          <div className="h-40 relative">
            {/* Opcional: algún elemento final o solo espacio */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;