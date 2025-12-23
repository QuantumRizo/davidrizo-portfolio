// src/components/Hero.tsx
import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

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
    this.resolve = () => {}
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
  const elementRef = useRef<HTMLHeadingElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted && scramblerRef.current) {
      const phrases = [
        "Hello, I'm David Rizo",
        "Software Engineer & Data Scientist",
        "Turning ideas into reliable software",
      ]

      let counter = 0
      const next = () => {
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
  const links = [
    {
      icon: <Github className="size-5 text-primary" />,
      label: "GitHub",
      href: "https://github.com/QuantumRizo",
    },
    {
      icon: <Mail className="size-5 text-primary" />,
      label: "Email",
      href: "mailto:davidrizo.phys@gmail.com",
    },
    {
      icon: <MessageCircle className="size-5 text-primary" />,
      label: "WhatsApp",
      href: "https://wa.me/525624290009",
    },
    {
      icon: <Linkedin className="size-5 text-primary" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/felix-rizo-dev/",
    },
  ]

  return (
    <div className="relative w-full h-[66vh] flex flex-col items-center overflow-hidden justify-start pt-20 md:pt-20">
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
    </div>
  )
}

export default Hero
