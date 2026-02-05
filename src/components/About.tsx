export default function About() {
  return (
    <section
      id="about"
      className="pt-12 pb-24 px-6 relative bg-[#276339] text-white overflow-hidden"
    >
      {/* Chalkboard/Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}>
      </div>

      {/* Texture Overlay (Dust) */}
      <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none mix-blend-overlay filter contrast-150 brightness-150"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono tracking-tighter">
              About Me
            </h2>

            <p className="text-lg leading-relaxed text-blue-50/90 font-medium">
              I’m Félix David Rizo Serrano — a Data Scientist and ML Engineer focused on building intelligent, scalable systems. I work at the intersection of machine learning, data engineering, and modern web technologies, turning complex problems into clean and impactful solutions.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-blue-50/90 font-medium">
              From deep learning pipelines and galaxy classification research to cloud-based AI products, I approach every project with clarity, curiosity, and high standards. My goal is simple: build technology that feels thoughtful, efficient, and genuinely useful.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center relative">
            {/* Tape/Sticker effect */}
            <div className="absolute -top-4 -right-4 w-24 h-8 bg-yellow-200/80 rotate-12 z-20 shadow-sm transform-gpu backdrop-blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-24 h-8 bg-yellow-200/80 -rotate-6 z-20 shadow-sm transform-gpu backdrop-blur-sm" />

            <img
              src="/davidrizo.jpeg"
              alt="Félix David Rizo Serrano"
              className="
                w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-sm object-cover
                border-[12px] border-white shadow-2xl rotate-2 grayscale-[20%] sepia-[10%]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}