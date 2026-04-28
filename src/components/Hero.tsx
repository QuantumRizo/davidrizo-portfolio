// src/components/Hero.tsx
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import SectionConnector from "./SectionConnector";
import { GiRocketFlight, GiAtom, GiObservatory, GiSatelliteCommunication, GiGalaxy } from "react-icons/gi";
import { LuFlaskConical } from "react-icons/lu";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const links = [
    { icon: <Github className="size-5" />, label: "GitHub", href: "https://github.com/QuantumRizo" },
    { icon: <Mail className="size-5" />, label: "Email", href: "mailto:davidrizo.phys@gmail.com" },
    { icon: <MessageCircle className="size-5" />, label: "WhatsApp", href: "https://wa.me/525624290009" },
    { icon: <Linkedin className="size-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/felix-rizo-dev/" },
  ]

  const ic = "text-white/80 pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]";

  return (
    <div ref={containerRef} className="relative w-full bg-[#fdfdfd] pb-20 overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* ═══════════ BLUEPRINT CONTAINER ═══════════ */}
      <div className="relative w-full h-[80dvh] bg-[#0055FF] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl z-10 border-b-8 border-blue-900">

        {/* Grid */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Dashed border */}
        <div className="absolute inset-4 md:inset-8 border-2 border-dashed border-white/30 rounded-b-[2.5rem] md:rounded-b-[4.5rem] pointer-events-none z-0" />

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
          {/* UPDATED BADGE */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="mb-6 bg-yellow-400 text-black font-black px-6 py-2 rounded-sm -rotate-3 shadow-lg border-2 border-black flex flex-col leading-tight"
          >
            <span className="text-sm md:text-base uppercase tracking-wider">David Rizo</span>
            <span className="text-[10px] md:text-xs opacity-80 border-t border-black/20 mt-1 pt-1">
              SOFTWARE ENGINEER | PHYSICIST
            </span>
          </motion.div>

          {/* CHALKBOARD STYLE TITLE */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-chalk text-white tracking-widest leading-[1.1] drop-shadow-2xl">
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="block">WELCOME</motion.span>
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="block">TO MY</motion.span>
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="block">SPACE</motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl font-medium">
            Building digital experiences that connect &amp; inspire.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center gap-3 mt-8">
            {links.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black border-2 border-black rounded-full px-5 py-2.5 font-bold text-sm md:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ═══════════ FLOATING ELEMENTS ═══════════ */}

        {/* Atom */}
        <motion.div style={{ y: y2 }} className={`absolute top-5 left-5 md:top-8 md:left-10 opacity-75 pointer-events-none -rotate-[8deg] ${ic}`}>
          <GiAtom size={74} />
        </motion.div>

        {/* Observatory */}
        <motion.div style={{ y: y4 }} className={`hidden md:block absolute top-10 left-[30%] opacity-55 pointer-events-none rotate-[6deg] ${ic}`}>
          <GiObservatory size={66} />
        </motion.div>

        {/* Satellite */}
        <motion.div style={{ y: y1 }} className={`hidden md:block absolute top-14 right-[30%] opacity-55 pointer-events-none -rotate-[10deg] ${ic}`}>
          <GiSatelliteCommunication size={62} />
        </motion.div>

        {/* Einstein */}
        <motion.div style={{ y: y3 }} className="absolute top-5 right-4 md:top-8 md:right-10 text-lg md:text-2xl opacity-80 pointer-events-none rotate-[6deg] font-chalk text-white/80">
          G_μν = 8πT_μν
        </motion.div>

        {/* Schrödinger */}
        <motion.div style={{ y: y4 }} className="absolute top-[38%] left-2 md:left-8 text-xl md:text-2xl opacity-85 pointer-events-none -rotate-[10deg] font-chalk text-white/85">
          iℏ ∂Ψ/∂t = ĤΨ
        </motion.div>

        {/* Rocket */}
        <motion.div style={{ y: y5 }} className={`absolute top-[32%] right-3 md:right-12 opacity-80 pointer-events-none rotate-[18deg] ${ic}`}>
          <GiRocketFlight size={80} />
        </motion.div>

        {/* Galaxy */}
        <motion.div style={{ y: y2 }} className={`hidden md:block absolute top-[55%] right-[22%] opacity-50 pointer-events-none rotate-[5deg] ${ic}`}>
          <GiGalaxy size={66} />
        </motion.div>

        {/* Flask */}
        <motion.div style={{ y: y5 }} className={`hidden md:block absolute top-[58%] left-[18%] opacity-55 pointer-events-none rotate-[20deg] ${ic}`}>
          <LuFlaskConical size={62} />
        </motion.div>

        {/* Euler */}
        <motion.div style={{ y: y1 }} className="absolute bottom-14 left-3 md:bottom-16 md:left-10 text-xl md:text-2xl opacity-80 pointer-events-none -rotate-[12deg] font-chalk text-white/80">
          e^iπ + 1 = 0
        </motion.div>

        {/* Hubble */}
        <motion.div style={{ y: y3 }} className="absolute bottom-5 left-1/2 -translate-x-1/2 text-lg md:text-xl opacity-55 pointer-events-none -rotate-[3deg] font-chalk text-white/55">
          v = H₀D
        </motion.div>

        {/* Heisenberg */}
        <motion.div style={{ y: y3 }} className="absolute bottom-14 right-3 md:bottom-16 md:right-10 text-xl md:text-2xl opacity-80 pointer-events-none -rotate-[8deg] font-chalk text-white/80">
          ΔxΔp ≥ ℏ/2
        </motion.div>

      </div>

      {/* CONNECTOR: Pencil */}
      <SectionConnector
        imageSrc="/Pencil.webp"
        altText="Pencil"
        className="absolute bottom-10 left-[-20px] md:left-10 w-[180px] md:w-[350px] rotate-12 z-20 drop-shadow-2xl"
      />

      {/* CONNECTOR: Computer */}
      <SectionConnector
        imageSrc="/Computer.webp"
        altText="Computer"
        className="absolute bottom-5 right-[-30px] md:right-10 w-[200px] md:w-[400px] rotate-[-5deg] z-20 drop-shadow-lg"
      />

    </div>
  )
}

export default Hero
