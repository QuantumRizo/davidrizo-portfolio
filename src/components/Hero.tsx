// src/components/Hero.tsx
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import SectionConnector from "./SectionConnector";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for stickers
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]); // Coffee
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -40]); // Book
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -120]); // Apple

  const links = [
    { icon: <Github className="size-5" />, label: "GitHub", href: "https://github.com/QuantumRizo" },
    { icon: <Mail className="size-5" />, label: "Email", href: "mailto:davidrizo.phys@gmail.com" },
    { icon: <MessageCircle className="size-5" />, label: "WhatsApp", href: "https://wa.me/525624290009" },
    { icon: <Linkedin className="size-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/felix-rizo-dev/" },
  ]

  return (
    <div ref={containerRef} className="relative w-full bg-[#fdfdfd] pb-20 overflow-hidden">

      {/* --- BACKGROUND: NOTEBOOK STYLE --- */}
      {/* Notebook Graph Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}>
      </div>
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none mix-blend-multiply filter contrast-125 brightness-100"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}
      />

      {/* 
        BLUEPRINT CONTAINER 
        - Fit to screen height (90dvh)
        - Flexbox centering
      */}
      <div className="relative w-full h-[80dvh] bg-[#0055FF] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl z-10 border-b-8 border-blue-900">

        {/* CSS Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}>
        </div>

        {/* Dashed Border Overlay */}
        <div className="absolute inset-4 md:inset-8 border-2 border-dashed border-white/30 rounded-b-[2.5rem] md:rounded-b-[4.5rem] pointer-events-none z-0" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">

          {/* Badge / Sticker */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="mb-6 bg-yellow-400 text-black font-black text-xs md:text-sm px-4 py-1.5 rounded-sm -rotate-3 shadow-lg border-2 border-black"
          >
            FULL STACK DEV | PHYSICIST
          </motion.div>

          {/* Big Typography - Scaled with viewport width/height to fit */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-xl">
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              WELCOME
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
            >
              TO MY
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              SPACE
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl font-medium"
          >
            Building digital experiences that connect & inspire.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2 
                  bg-white text-black 
                  border-2 border-black
                  rounded-full px-5 py-2.5
                  font-bold text-sm md:text-base
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                  hover:translate-x-[2px] hover:translate-y-[2px]
                  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                  transition-all
                "
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Floating Stickers */}
        {/* NEW: Einstein-Rosen Bridge / Field Eq (Top Right) */}
        <motion.div style={{ y: y3 }} className="absolute top-16 right-4 md:right-16 text-2xl md:text-3xl opacity-90 pointer-events-none rotate-[15deg] font-chalk text-white/90">
          G_μν = 8πT_μν
        </motion.div>

        {/* NEW: Schrödinger Equation (Middle Left) */}
        <motion.div style={{ y: y4 }} className="absolute top-[35%] left-2 md:left-16 text-2xl md:text-4xl opacity-90 pointer-events-none -rotate-12 font-chalk text-white/90">
          iℏ ∂Ψ/∂t = ĤΨ
        </motion.div>

        {/* NEW: Mass-Energy (Middle/Lower Right) */}
        <motion.div style={{ y: y5 }} className="absolute top-[35%] right-4 md:right-20 text-2xl md:text-5xl opacity-90 pointer-events-none rotate-[20deg] font-chalk text-white/90">
          E = mc²
        </motion.div>

        {/* NEW: Euler's Identity (Bottom Left) */}
        <motion.div style={{ y: y1 }} className="absolute bottom-40 left-6 md:left-24 text-2xl md:text-4xl opacity-80 pointer-events-none -rotate-[15deg] font-chalk text-white/80">
          e^iπ + 1 = 0
        </motion.div>

        {/* NEW: Calculus/Integral (Top Left) */}
        <motion.div style={{ y: y2 }} className="absolute top-20 left-[15%] md:left-[20%] text-2xl md:text-4xl opacity-80 pointer-events-none rotate-[10deg] font-chalk text-white/80">
          ∫ e^x dx
        </motion.div>

        {/* NEW: Heisenberg Uncertainty (Bottom Right) */}
        <motion.div style={{ y: y3 }} className="absolute bottom-24 right-4 md:right-28 text-2xl md:text-4xl opacity-80 pointer-events-none -rotate-[10deg] font-chalk text-white/80">
          ΔxΔp ≥ ℏ/2
        </motion.div>

        {/* NEW: Maxwell's Equations (Top Center-Right) */}
        <motion.div style={{ y: y4 }} className="absolute top-8 right-[25%] md:right-[30%] text-xl md:text-3xl opacity-70 pointer-events-none -rotate-[5deg] font-chalk text-white/70">
          ∇ ⋅ B = 0
        </motion.div>

        {/* NEW: Hubble's Law (Lower Left) */}
        <motion.div style={{ y: y5 }} className="absolute bottom-16 left-8 md:left-48 text-2xl md:text-3xl opacity-70 pointer-events-none rotate-[25deg] font-chalk text-white/70">
          v = H₀D
        </motion.div>

      </div>

      {/* CONNECTOR: Pencil (Left) */}
      <SectionConnector
        imageSrc="/Pencil.png"
        altText="Pencil"
        className="absolute bottom-10 left-[-20px] md:left-10 w-[180px] md:w-[350px] rotate-12 z-20 drop-shadow-2xl"
      />

      {/* CONNECTOR: Computer (Right) */}
      <SectionConnector
        imageSrc="/Computer.png"
        altText="Computer"
        className="absolute bottom-5 right-[-30px] md:right-10 w-[200px] md:w-[400px] rotate-[-5deg] z-20 drop-shadow-lg"
      />

    </div>
  )
}

export default Hero

