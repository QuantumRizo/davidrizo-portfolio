import { motion } from "framer-motion";


const Experience = () => {

  const experiences = [
    {
      title: "Data Scientist & Web Developer",
      company: "",
      period: "Current",
      description: "Leading the design and development of data-driven products by combining statistical analysis, machine learning, and modern web development. Building scalable data pipelines, analytical models, and interactive web applications that transform complex data into actionable insights and user-focused solutions.",
      skills: ["Python", "Machine Learning", "SQL", "Power BI", "React"],
      current: true,
      color: "bg-yellow-200" // Classic Post-it
    },
    {
      title: "Coding Program Lead",
      company: "French Woods Festival",
      period: "2025 - 2026",
      description: "Directed and delivered a comprehensive coding program, teaching programming fundamentals and web development concepts to students. Designed structured learning materials.",
      skills: ["Teaching", "Web Dev", "Leadership"],
      current: false,
      color: "bg-blue-200" // Blue note
    },
    {
      title: "Data Intern",
      company: "Navigatis Radiance",
      period: "2022",
      description: "Supported data-driven operations by managing and maintaining structured databases to ensure data integrity. Assisted in data cleaning, validation, and basic analysis.",
      skills: ["SQL", "Data Management", "Analytics"],
      current: false,
      color: "bg-green-200" // Green note
    },
    {
      title: "B.Sc. in Physics",
      company: "UNAM",
      period: "2020 - 2024",
      description: "Completed a rigorous undergraduate program in theoretical and experimental physics, developing a strong foundation in mathematics, analytical reasoning, and scientific problem-solving.",
      skills: ["Physics", "Math", "Research"],
      current: false,
      color: "bg-pink-200" // Pink note
    }
  ];

  return (
    <section className="py-24 px-4 relative bg-[#fdfdfd] text-slate-900">

      {/* Background Pattern (Corkboard? or just Graph?) Let's stick to Graph for consistency */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Work Experience</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            A journey from theoretical physics to practical data science
          </p>
        </div>

        {/* STICKY NOTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                  ${exp.color} 
                  p-6 
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] 
                  text-black 
                  flex flex-col 
                  h-full
                  min-h-[300px]
                  transform transition-transform hover:scale-105 hover:rotate-0 hover:z-10
                `}
              style={{
                // Randomize rotation slightly for static look if desired, but hover effect handles interaction
              }}
            >
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm"></div>

              <div className="mt-4 flex-grow">
                <h3 className="text-xl font-black leading-tight mb-1">{exp.title}</h3>
                <p className="font-bold text-sm opacity-70 mb-4">{exp.company}</p>

                <p className="text-sm font-medium leading-relaxed mb-4 opacity-90">
                  {exp.description}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-black/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-black uppercase tracking-widest opacity-60">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold px-2 py-1 bg-black/5 rounded-full">
                      {skill}
                    </span>
                  ))}
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