import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 opacity-30 blur-3xl animate-glow"
        style={{
          background:
            "radial-gradient(circle, hsl(193 100% 50% / 0.3), hsl(250 70% 60% / 0.2), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">David Rizo</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Physicist • Data Scientist • Software Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            I build intelligent systems, data dashboards, and modern web apps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button
            size="lg"
            variant="outline"
            className="glass-card hover:scale-105 transition-transform"
            asChild
          >
            <a
              href="https://github.com/QuantumRizo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass-card hover:scale-105 transition-transform"
            asChild
          >
            <a
              href="https://linkedin.com/in/david-rizo-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass-card hover:scale-105 transition-transform"
            asChild
          >
            <a href="mailto:davidrizo.phys@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
