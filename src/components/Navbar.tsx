import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { name: t("nav.projects"), path: "/#projects" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? "py-4 bg-background/70 backdrop-blur-md border-b border-white/5 shadow-lg"
        : "py-6 bg-transparent border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold font-mono tracking-tighter hover:text-primary transition-colors z-50 relative"
        >
          DAVID_RIZO
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group py-1"
            >
              <span
                className={`text-base font-medium transition-colors duration-300 ${location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
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

        {/* MOBILE MENU TOGGLE & LANGUAGE */}
        <div className="md:hidden flex items-center gap-4 z-50 relative">
          <div className="scale-90">
            <LanguageSelector />
          </div>
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-medium ${location.pathname === link.path ? "text-primary" : "text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}


        </div>
      </div>
    </nav>
  );
};

export default Navbar;