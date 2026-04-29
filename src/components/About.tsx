import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiRocketFlight, GiAtom, GiObservatory, GiSatelliteCommunication, GiGalaxy } from "react-icons/gi";
import { LuFlaskConical } from "react-icons/lu";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const ic = "text-white/80 pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]";

  return (
    <section
      id="about"
      ref={containerRef}
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

      {/* ═══════════ FLOATING ELEMENTS (SWAPPED L/R) ═══════════ */}
      {/* Atom (was left, now right) */}
      <motion.div style={{ y: y2 }} className={`absolute top-5 right-5 md:top-8 md:right-10 opacity-75 pointer-events-none -rotate-[8deg] z-0 ${ic}`}>
        <GiAtom size={74} />
      </motion.div>

      {/* Observatory (was left, now right) */}
      <motion.div style={{ y: y4 }} className={`hidden md:block absolute top-[15%] right-[25%] opacity-55 pointer-events-none rotate-[6deg] z-0 ${ic}`}>
        <GiObservatory size={66} />
      </motion.div>

      {/* Satellite (was right, now left) */}
      <motion.div style={{ y: y1 }} className={`hidden md:block absolute top-[25%] left-[10%] opacity-55 pointer-events-none -rotate-[10deg] z-0 ${ic}`}>
        <GiSatelliteCommunication size={62} />
      </motion.div>

      {/* Einstein (was right, now left) */}
      <motion.div style={{ y: y3 }} className="absolute top-10 left-4 md:top-20 md:left-10 text-lg md:text-2xl opacity-80 pointer-events-none rotate-[6deg] font-chalk text-white/80 z-0">
        G_μν = 8πT_μν
      </motion.div>

      {/* Schrödinger (was left, now right) */}
      <motion.div style={{ y: y4 }} className="absolute top-[38%] right-2 md:right-8 text-xl md:text-2xl opacity-85 pointer-events-none -rotate-[10deg] font-chalk text-white/85 z-0">
        iℏ ∂Ψ/∂t = ĤΨ
      </motion.div>

      {/* Rocket (was right, now left) */}
      <motion.div style={{ y: y5 }} className={`absolute top-[45%] left-3 md:left-12 opacity-80 pointer-events-none rotate-[18deg] z-0 ${ic}`}>
        <GiRocketFlight size={80} />
      </motion.div>

      {/* Galaxy (was right, now left) */}
      <motion.div style={{ y: y2 }} className={`hidden md:block absolute bottom-[20%] left-[22%] opacity-50 pointer-events-none rotate-[5deg] z-0 ${ic}`}>
        <GiGalaxy size={66} />
      </motion.div>

      {/* Flask (was left, now right) */}
      <motion.div style={{ y: y5 }} className={`hidden md:block absolute bottom-[25%] right-[18%] opacity-55 pointer-events-none rotate-[20deg] z-0 ${ic}`}>
        <LuFlaskConical size={62} />
      </motion.div>

      {/* Euler (was left, now right) */}
      <motion.div style={{ y: y1 }} className="absolute bottom-14 right-3 md:bottom-16 md:right-10 text-xl md:text-2xl opacity-80 pointer-events-none -rotate-[12deg] font-chalk text-white/80 z-0">
        e^iπ + 1 = 0
      </motion.div>

      {/* Hubble (was middle bottom, moved up a bit) */}
      <motion.div style={{ y: y3 }} className="absolute bottom-10 left-[40%] text-lg md:text-xl opacity-55 pointer-events-none -rotate-[3deg] font-chalk text-white/55 z-0">
        v = H₀D
      </motion.div>

      {/* Heisenberg (was right, now left) */}
      <motion.div style={{ y: y3 }} className="absolute bottom-14 left-3 md:bottom-16 md:left-10 text-xl md:text-2xl opacity-80 pointer-events-none -rotate-[8deg] font-chalk text-white/80 z-0">
        ΔxΔp ≥ ℏ/2
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-chalk tracking-widest text-white drop-shadow-md">
              About Me
            </h2>

            <p className="text-1xl md:text-2xl leading-relaxed text-blue-50/90 font-sans drop-shadow-sm">
              I hold a B.Sc. in Physics from UNAM, with additional coursework in Computer Science. My journey began by applying mathematical modeling to machine learning, which naturally led me into full-stack development. Today, I develop internal software tools at Central Simi, where I build robust, efficient solutions to streamline operational workflows.

              Beyond the code, I am a multi-instrumentalist playing guitar, bass, piano, and drums. I believe the blend of structure and creativity found in music mirrors the logic of great engineering, and I bring that same disciplined passion to every project I build.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center relative">
            {/* Tape/Sticker effect */}
            <div className="absolute -top-4 -right-4 w-24 h-8 bg-yellow-200/80 rotate-12 z-20 shadow-sm transform-gpu" />
            <div className="absolute -bottom-4 -left-4 w-24 h-8 bg-yellow-200/80 -rotate-6 z-20 shadow-sm transform-gpu" />

            <img
              src="/davidrizo.webp"
              alt="Félix David Rizo Serrano"
              className="
                w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-sm object-cover
                border-[12px] border-white shadow-2xl rotate-2 grayscale-[20%] sepia-[10%] relative z-10
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}