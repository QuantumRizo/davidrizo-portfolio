import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Tech Stack", href: "/#stack" }
  ];

  const socialLinks = [
    {
      icon: Phone,
      href: "https://wa.me/525624290009",
      label: "WhatsApp",
      text: "+52 56 2429 0009"
    },
    {
      icon: Mail,
      href: "mailto:davidrizo.phys@gmail.com",
      label: "Email",
      text: "davidrizo.phys@gmail.com"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/david_rizo_136",
      label: "Instagram",
      text: "@david_rizo_136"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/felix-rizo-dev",
      label: "LinkedIn",
      text: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/QuantumRizo",
      label: "GitHub",
      text: "GitHub"
    }
  ];

  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
        
        {/* BRAND COLUMN */}
        <div className="md:col-span-5 space-y-6">
          <Link to="/" className="text-3xl font-bold text-white tracking-tighter font-mono">
            DAVID_RIZO
          </Link>
          <p className="text-lg leading-relaxed max-w-sm text-slate-400">
            Data Scientist & Web Developer. Building intelligent, scalable, and user-centric digital experiences. Let's build something great together.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="md:col-span-3 space-y-6">
          <h3 className="text-white font-bold text-lg tracking-wide">Explore</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-primary transition-colors flex items-center group w-fit"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className="md:col-span-4 space-y-6">
          <h3 className="text-white font-bold text-lg tracking-wide">Connect</h3>
          <ul className="space-y-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{link.text}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 relative z-10">
        <p>&copy; {currentYear} David Rizo. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
