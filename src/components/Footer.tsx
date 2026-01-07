import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next"; // AQUI

const Footer = () => {
  const { t } = useTranslation(); // HOOK
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/QuantumRizo",
      label: t("hero.github") // Reusing hero keys as they are the same
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/felix-rizo-dev",
      label: t("hero.linkedin")
    },
    {
      icon: Mail,
      href: "mailto:davidrizo.phys@gmail.com",
      label: t("hero.email")
    }
  ];

  return (
    <footer className="py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Gradient divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-full mb-8"
          style={{
            background: "linear-gradient( transparent, hsla(0, 0%, 100%, 1.00)"
          }}
        />

        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5 text-primary" />
                </a>
              );
            })}
          </motion.div>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground/70 text-xs"
          >
            {t("footer.text")}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
