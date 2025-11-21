// src/components/Hero.tsx
import React, { useState, useEffect, useCallback, useRef } from "react"

interface Character {
  char: string
  x: number
  y: number
  speed: number
}

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
    this.chars = '!<>-_\\/[]{}—=+*^?#'
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

// --- COMPONENTE DEL TÍTULO CAMBIANTE ---
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
      // TUS FRASES PERSONALIZADAS
      const phrases = [
        'Hello, I\'m David Rizo',
        'Software Developer',
        'Physicist & Data Scientist',
        'Building the Future',
      ]
      
      let counter = 0
      const next = () => {
        if (scramblerRef.current) {
          scramblerRef.current.setText(phrases[counter]).then(() => {
            setTimeout(next, 2500) // 2.5 segundos entre cambio
          })
          counter = (counter + 1) % phrases.length
        }
      }
      next()
    }
  }, [mounted])

  return (
    <h1 
      ref={elementRef}
      className="text-white text-4xl md:text-6xl font-bold tracking-wider text-center z-30"
      style={{ fontFamily: 'monospace' }}
    >
      LOADING_
    </h1>
  )
}

// --- COMPONENTE PRINCIPAL HERO ---
const Hero: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set())

  // 1. Crear las gotas de lluvia
  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    const charCount = 250 // Cantidad de letras cayendo
    const newCharacters: Character[] = []

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.4,
      })
    }
    return newCharacters
  }, [])

  useEffect(() => {
    setCharacters(createCharacters())
  }, [createCharacters])

  // 2. Efecto de parpadeo (letras brillantes)
  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>()
      const numActive = Math.floor(Math.random() * 5) + 3
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length))
      }
      setActiveIndices(newActiveIndices)
    }
    const flickerInterval = setInterval(updateActiveIndices, 50)
    return () => clearInterval(flickerInterval)
  }, [characters.length])

  // 3. Loop de animación (Caída)
  useEffect(() => {
    let animationFrameId: number
    const updatePositions = () => {
      setCharacters(prevChars => 
        prevChars.map(char => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && { // Si llega al fondo, reinicia arriba
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"[
              Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".length)
            ],
          }),
        }))
      )
      animationFrameId = requestAnimationFrame(updatePositions)
    }
    animationFrameId = requestAnimationFrame(updatePositions)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    // bg-black es CRUCIAL aquí para ver las letras
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
      <style>{`
        .dud { color: #0f0; opacity: 0.7; }
      `}</style>

      {/* Contenedor del Título */}
      <div className="relative z-20 px-4">
        <ScrambledTitle />
      </div>

      {/* Renderizado de la Lluvia de Letras */}
      {characters.map((char, index) => (
        <span
          key={index}
          className={`absolute transition-colors duration-100 pointer-events-none select-none ${
            activeIndices.has(index)
              ? "text-[#00ff00] font-bold animate-pulse z-10" // Letra brillante
              : "text-slate-700 font-light opacity-40"         // Letra normal (oscura)
          }`}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            fontSize: activeIndices.has(index) ? '4rem' : '1.5rem', // Tamaño dinámico
            transform: `translate(-50%, -50%)`,
            textShadow: activeIndices.has(index) 
              ? '0 0 8px rgba(0,255,0,0.8)' 
              : 'none',
            fontFamily: 'monospace'
          }}
        >
          {char.char}
        </span>
      ))}
    </div>
  )
}

export default Hero