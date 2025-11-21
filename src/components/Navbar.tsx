import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // CAMBIO 1: Quitamos 'w-full' y 'bg-background'.
    // Usamos 'w-fit' para que se ajuste al tamaño de los botones.
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        // CAMBIO 2: El color y el blur van AQUI, en la cápsula interna.
        // Ajusté los colores para que combinen con tu fondo dark/purple.
        className="flex items-center gap-6 px-6 py-2.5 
                   bg-black/20 backdrop-blur-md 
                   border border-white/10 rounded-full shadow-2xl"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`relative text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === link.path
                ? "text-white"
                : "text-gray-400"
            }`}
          >
            {link.name}
            {/* Indicador activo (opcional, puntito brillante debajo) */}
            {location.pathname === link.path && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 mx-auto h-[2px] w-4 bg-[hsl(var(--primary))]
 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              />
            )}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;