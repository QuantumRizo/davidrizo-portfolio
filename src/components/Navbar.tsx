// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector"; // Importar el selector
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll para cambiar el estilo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? "py-4 bg-background/70 backdrop-blur-md border-b border-white/5 shadow-lg" // Estilo al bajar
        : "py-6 bg-transparent border-transparent" // Estilo inicial (transparente)
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* LOGO O NOMBRE (Opcional, izquierda) */}
        <Link to="/" className="text-2xl font-bold font-mono tracking-tighter hover:text-primary transition-colors">
          DAVID_RIZO
        </Link>

        {/* LINKS (Derecha) */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path} // Changed key to path since name changes with language
              to={link.path}
              className="relative group py-1"
            >
              <span
                className={`text-base font-medium transition-colors duration-300 ${location.pathname === link.path
                  ? "text-primary" // Color verde activo
                  : "text-foreground/70 hover:text-primary" // Gris a Verde
                  }`}
              >
                {link.name}
              </span>

              {/* Línea animada debajo del link activo */}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;