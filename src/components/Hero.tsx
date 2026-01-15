// src/components/Hero.tsx
import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle, ArrowRight, Calendar, Globe, Monitor, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

// --- CLASE PARA EL TEXTO ENCRIPTADO (SCRAMBLE) ---
class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{
    from: string
    to: string
    start: number
    end: number
    char?: string
  }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = '!<>-_\\/[]{}ñ—=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => { }
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}


// --- COMPONENTE DEL TÍTULO ---
const ScrambledTitle: React.FC = () => {
  const { t, i18n } = useTranslation(); // HOOK
  const elementRef = useRef<HTMLHeadingElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  // Use a ref to store phrases so the animation loop always accesses the latest translation
  // without needing to restart the effect/loop.
  const phrasesRef = useRef([
    t("hero.title_1"),
    t("hero.title_2"),
    t("hero.title_3"),
  ]);

  // Update phrases when language changes
  useEffect(() => {
    phrasesRef.current = [
      t("hero.title_1"),
      t("hero.title_2"),
      t("hero.title_3"),
    ];
  }, [t, i18n.language]);

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted && scramblerRef.current) {
      let counter = 0
      const next = () => {
        const phrases = phrasesRef.current; // Read from ref
        scramblerRef.current!.setText(phrases[counter]).then(() => {
          setTimeout(next, 2500)
        })
        counter = (counter + 1) % phrases.length
      }
      next()
    }
  }, [mounted])

  return (
    <h1
      ref={elementRef}
      className="text-white text-4xl md:text-6xl font-bold tracking-wider text-center z-30"
      style={{ fontFamily: "monospace" }}
    >
      LOADING_
    </h1>
  )
}


// --- HERO PRINCIPAL --- 
const Hero: React.FC = () => {
  const { t } = useTranslation();

  const links = [
    {
      icon: <Github className="size-5 text-primary" />,
      label: t("hero.github"),
      href: "https://github.com/QuantumRizo",
    },
    {
      icon: <Mail className="size-5 text-primary" />,
      label: t("hero.email"),
      href: "mailto:davidrizo.phys@gmail.com",
    },
    {
      icon: <MessageCircle className="size-5 text-primary" />,
      label: t("hero.whatsapp"),
      href: "https://wa.me/525624290009",
    },
    {
      icon: <Linkedin className="size-5 text-primary" />,
      label: t("hero.linkedin"),
      href: "https://www.linkedin.com/in/felix-rizo-dev/",
    },
  ]

  return (
    // CAMBIO: min-h-screen -> min-h-[70vh] para ocupar ~70% de la pantalla
    <div className="relative w-full min-h-[70vh] flex flex-col items-center overflow-x-hidden justify-start pt-20 md:pt-20">
      <style>{`.dud { color: rgba(94, 255, 0, 1); opacity: 0.7; }`}</style>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/heroFondo.jpg"
          alt="Background Hero"
          className="w-full h-full object-cover object-center md:object-bottom"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-4 flex flex-col items-center gap-8">
        <ScrambledTitle />

        {/* --- BOTONES DE CONTACTO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex items-center gap-2 
                bg-card/40 backdrop-blur 
                border border-border 
                rounded-xl px-4 py-2 
                hover:bg-accent/30 
                transition-colors
              "
            >
              {link.icon}
              <span className="text-white font-medium">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* 
       * SECCIÓN AGREGADA: Antes en BuildWebsiteSection.tsx
       * Contenido movido al Hero para unificar.
       */}
      <div className="relative z-10 flex flex-col items-center gap-8 mt-12 pb-24 px-4 w-full max-w-5xl text-center">

        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          {t("build_website.title")}
        </h2>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          {t("build_website.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
            <Monitor className="size-5 text-primary" /> <span className="font-medium">{t("build_website.modern_design")}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
            <Smartphone className="size-5 text-primary" /> <span className="font-medium">{t("build_website.fully_responsive")}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
            <Globe className="size-5 text-primary" /> <span className="font-medium">{t("build_website.seo_optimized")}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
            <MessageCircle className="size-5 text-primary" /> <span className="font-medium">{t("build_website.floating_whatsapp")}</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
            <Calendar className="size-5 text-primary" /> <span className="font-medium">{t("build_website.booking_system")}</span>
          </div>
        </div>

        <Link
          to="/contact"
          className="
             mt-10 group relative inline-flex items-center gap-3 
             px-8 py-4 bg-primary text-black font-bold rounded-full 
             hover:bg-primary/90 transition-all transform hover:scale-105
             shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]
             "
        >
          {t("build_website.cta")}
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>

      </div>

    </div>
  )
}

export default Hero
