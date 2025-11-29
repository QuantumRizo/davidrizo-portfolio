import React from "react";

// Lista de tecnologías extraída de tus proyectos
const technologies = [
  {
    name: "Python",
    color: "text-yellow-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.4-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.13-.5.2-.41.25-.33.32-.24.35-.16.36-.1.38-.05.37-.01.35v1.98l.05.62.13.55.21.46.26.4.3.31.33.25.35.19.35.14.33.1.3.07.26.04.21.02h5.21l.63-.05.54-.13.48-.2.4-.25.32-.32.25-.35.16-.36.1-.38.04-.37.01-.36V11.2l.16-.01 2.38.02h.16l.3.01.27.04.25.07.23.11.2.14.17.16.14.2.11.22.08.24.05.27.02.29-.02.25-.05.29-.09.31-.13.31-.17.32-.2.3-.25.29-.28.26-.32.22-.35.18-.38.14-.4.1-.42.06-.44.03-.45.01h-2.31l-.57.01-.6.04-.6.08-.59.13-.57.18-.54.23-.5.29-.46.35-.41.41-.35.47-.29.53-.22.58-.15.63-.08.68-.02.72v.26l.04.26.1.3.16.33.25.34.34.34.45.32.59.3.73.26.9.2 1.05.13 1.21.06 1.36-.01 1.5-.09 1.63-.18 1.74-.27 1.83-.37 1.91-.49 1.96-.61 1.99-.74 1.99-.89 1.97-1.05 1.92-1.21 1.85-1.39 1.75-1.58 1.62-1.78 1.47-2 1.29-2.22 1.08-2.46.84-2.7.58-2.95.29-3.21-.02-3.48-.35-3.73-.7-3.97-1.07-4.19-1.46-4.38-1.87-4.55-2.29-4.68-2.73-4.79-3.18-4.85-3.64-4.88-4.11-4.87-4.58-4.82-5.05-4.73-5.51-4.6-5.96-4.43-6.4-4.22-6.82-3.97-7.21-3.68-7.58-3.34-7.91-2.96-8.21-2.54-8.47-2.09-8.68-1.61-8.84-1.09-8.96-.54-9.02.04-9.04.66-9 .01-.01" />
      </svg>
    ),
  },
  {
    name: "React",
    color: "text-cyan-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" opacity="0.1"/>
        <circle cx="12" cy="12" r="2" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
           <ellipse rx="10" ry="4.5" cx="12" cy="12" />
           <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
           <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    color: "text-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.66 4.96l-.87 4.1-1.74 3-2.67-1.34 2.1-4.28 3.18-1.48zM5.9 8.2l-2.08 1.05 3.32 6.64 1.76-.88L5.9 8.2zm12.56-2.58l-5.63 2.63.84 4.09 5.66-2.65-.87-4.07zM11.77 13l-1.63 4.63h3.58l-1.95-4.63zm1.18-8.85L5.73 7.54l1.24 2.5 5.95-2.76-1.24-2.5-.47-.13.56.03h1.17l.55.13 1.83.6 1.8-3.6-4.17-1.39v1.13zm6.3 3.6l1.23 2.5-3.07 1.44-1.23-2.5 3.07-1.44z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "text-blue-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.65 1.5c-4.3 0-6.9 3.5-5.9 8h-4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c-.5 2.5.5 5 3.1 6.3 1.5.8 3.2 1.2 5 1.2 2.5 0 4.8-.8 6.7-2.1l-1.3-1.6c-1.5 1-3.3 1.6-5.2 1.6-2.6 0-4.8-1.5-5.8-3.8h8.8c1.1 0 2-.9 2-2V9.5c0-4.4-3.6-8-9.4-8zM16 9.5v2H8.2c-.3-2.5 1.5-5 4.5-5 2.5 0 4.2 1.3 4.2 3.5-.9 0-.9 0-1 0z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    color: "text-emerald-400",
    icon: (
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
         <path d="M12.924 1.026a.5.5 0 0 1 .866.5l-2.454 8.215 5.864.651a.5.5 0 0 1 .305.862l-9.157 11.23a.5.5 0 0 1-.866-.5l2.454-8.216-5.864-.65a.5.5 0 0 1-.305-.863l9.157-11.23Z" />
       </svg>
    ),
  },
  {
    name: "Scikit-learn",
    color: "text-orange-600",
    icon: (
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
         <path d="M12 1.5l-7 4v9l7 4 7-4v-9l-7-4zm5 12l-5 2.8-5-2.8V6.3l5-2.8 5 2.8v7.2z"/>
         <circle cx="12" cy="9" r="2" />
         <circle cx="8" cy="15" r="1.5" />
         <circle cx="16" cy="15" r="1.5" />
       </svg>
    ),
  },
  {
    name: "OpenCV",
    color: "text-red-500",
    icon: (
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        {/* Simplified OpenCV 3 rings */}
        <path d="M12,5 A7,7 0 0,0 5.6,9.6" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-red-500"/>
        <path d="M5.6,9.6 A7,7 0 0,0 9.8,17.8" fill="none" stroke="#22c55e" strokeWidth="2.5"/>
        <path d="M12,5 A7,7 0 0,1 18.4,9.6" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-red-500"/>
        <path d="M18.4,9.6 A7,7 0 0,1 14.2,17.8" fill="none" stroke="#3b82f6" strokeWidth="2.5"/>
        <path d="M9.8,17.8 A7,7 0 0,0 14.2,17.8" fill="none" stroke="#22c55e" strokeWidth="2.5"/>
       </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "text-cyan-300",
    icon: (
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
         <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
       </svg>
    ),
  },
  {
    name: "Vite",
    color: "text-purple-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0L2.3 2.5 12 24 21.7 2.5 12 0zm0 3.3l5.5 1.4L12 18 6.5 4.7 12 3.3z" fill="#FACC15"/>
        <path d="M12 18L6.5 4.7 4.5 4.2 12 24l7.5-19.8-2 .5L12 18z" fill="#A855F7"/>
      </svg>
    ),
  },
  {
    name: "Astropy",
    color: "text-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
         <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
         <circle cx="12" cy="12" r="2" className="text-black" fill="black" opacity="0.3"/>
      </svg>
    ),
  },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <h2 className="text-center text-white text-3xl font-bold mb-12 tracking-wider">
        TECH ARSENAL
      </h2>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite; /* Un poco más lento para leer bien */
          width: max-content;
        }
        .tech-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Degradados laterales para efecto Fade */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Contenedor principal */}
      <div className="tech-container flex items-center">
        <div className="flex animate-scroll">
          {/* Renderizado triple para asegurar el bucle infinito perfecto en pantallas anchas */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 px-8 min-w-[140px] group transition-all duration-300 hover:scale-110 cursor-default"
            >
              <div className={`transition-all duration-300 drop-shadow-lg ${tech.color} opacity-80 group-hover:opacity-100`}>
                {tech.icon}
              </div>
              <span className="text-gray-500 font-mono text-sm group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;