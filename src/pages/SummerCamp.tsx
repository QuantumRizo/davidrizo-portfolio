import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const SummerCamp = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/projects">
            <Button variant="ghost" className="mb-8 glass-card">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Summer Camp Landing Page
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A vibrant, responsive landing page concept built to showcase a summer camp experience. Designed with modern UI principles, fluid animations, and a playful color palette to engage families and young campers alike.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a href="https://github.com/QuantumRizo/summercamp-webpage" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </a>
              </Button>
              <Button variant="outline" className="glass-card" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Tech Stack</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• React — Component-based architecture</li>
                <li>• Tailwind CSS — Utility-first styling</li>
                <li>• Framer Motion — Smooth, natural animations</li>
                <li>• Responsive Design — Mobile-first approach</li>
                <li>• React Router — Seamless navigation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Key Features</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• Animated hero section with call-to-action</li>
                <li>• Interactive photo carousel</li>
                <li>• Engaging “Join Now” section for signups</li>
                <li>• Fully adaptive mobile and tablet layout</li>
                <li>• Scroll-triggered motion effects</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Project Overview</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                The <strong>Summer Camp Landing Page</strong> was designed as a creative front-end project focused purely on visual design, user engagement, and motion interaction. Every section was crafted to evoke a sense of adventure and warmth through color, layout, and subtle animation.
              </p>
              <p>
                Developed entirely with <strong>React</strong> and <strong>Tailwind CSS</strong>, the page leverages <strong>Framer Motion</strong> for smooth transitions and scroll-based interactions. It’s a showcase of front-end craftsmanship — prioritizing responsive design, visual flow, and emotional connection with the user.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SummerCamp;
