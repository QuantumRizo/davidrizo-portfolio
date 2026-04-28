import { motion } from "framer-motion";

const Experience = () => {

  const experiences = [
    {
      title: "Software Engineer",
      company: "Central de Negocios",
      period: "Apr 2026 - Present",
      description: "Architecting and developing full-stack digital ecosystems. Currently leading the development of a complex monorepo for MUYMUY Beauty Studio, featuring a React-based administrative platform and a native Expo mobile application integrated with Supabase for real-time data management.",
      skills: ["React", "Expo", "Supabase", "Monorepo", "Node.js"],
      current: true,
      color: "bg-cyan-200" // Cyan note
    },
    {
      title: "Data Analyst",
      company: "Central de Negocios",
      period: "Sep 2025 - Apr 2026",
      description: "Applied statistical modeling and data engineering to drive business intelligence. Focused on building automated data pipelines and analytical dashboards to optimize operational workflows and deliver actionable insights for decision-makers.",
      skills: ["Python", "SQL", "Power BI", "Statistics", "Data Pipelines"],
      current: false,
      color: "bg-yellow-200" // Classic Post-it
    },
    {
      title: "Coding Program Leader",
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
    <section id="experience" className="py-24 px-4 relative bg-[#fdfdfd] text-slate-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-chalk tracking-widest text-slate-900 drop-shadow-sm">
            Work Experience
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            A journey from theoretical physics to practical software engineering
          </p>
        </div>

        {/* STICKY NOTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                  min-h-[320px]
                  relative
                  transform transition-transform hover:scale-105 hover:rotate-0 hover:z-10
                `}
            >
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm"></div>

              <div className="mt-4 flex-grow">
                <h3 className="text-xl font-black leading-tight mb-1">{exp.title}</h3>
                <p className="font-bold text-xs opacity-70 mb-4">{exp.company}</p>

                <p className="text-xs font-medium leading-relaxed mb-4 opacity-90">
                  {exp.description}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-black/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[9px] font-bold px-2 py-0.5 bg-black/5 rounded-full">
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