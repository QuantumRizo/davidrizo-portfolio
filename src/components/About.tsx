export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto relative"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          
          {/* AQUI ESTÁ EL CAMBIO: text-lg y leading-relaxed */}
          <p className="text-lg leading-relaxed text-gray-300">
            I’m Félix David Rizo Serrano — a Data Scientist and ML Engineer focused on
            building intelligent, scalable systems. I work at the intersection of machine
            learning, data engineering, and modern web technologies, turning complex 
            problems into clean and impactful solutions.
          </p>

          {/* AQUI TAMBIÉN */}
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            From deep learning pipelines and galaxy classification research to
            cloud-based AI products, I approach every project with clarity, curiosity,
            and high standards. My goal is simple: build technology that feels thoughtful,
            efficient, and genuinely useful.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/davidrizo.jpeg"
            alt="Félix David Rizo Serrano"
            className="
              w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-2xl object-cover
              gradient-border
            "
          />
        </div>
      </div>
    </section>
  );
}