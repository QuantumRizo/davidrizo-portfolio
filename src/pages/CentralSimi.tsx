import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const CentralSimi = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <Button variant="ghost" className="mb-8 glass-card">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              CentralSimi – Provider Portal
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A full-stack web application for secure document management. Built with React (Vite) and Supabase, it streamlines legal file operations through real-time collaboration, versioning, and transformation logic.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button variant="outline" className="glass-card" asChild>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <li>• React (Vite) — Fast client-side rendering</li>
                <li>• Supabase — Authentication, Database & Storage</li>
                <li>• PostgreSQL — Secure and scalable data layer</li>
                <li>• Tailwind CSS — Clean, responsive UI</li>
                <li>• Zustand — Lightweight state management</li>
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
                <li>• Secure Provider Authentication with Supabase Auth</li>
                <li>• Drag-and-drop file uploads with progress tracking</li>
                <li>• Automated file transformation and data validation</li>
                <li>• Version-controlled document management</li>
                <li>• Real-time sync across authenticated sessions</li>
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
                <strong>CentralSimi</strong> is a secure, internal portal designed for legal providers to manage sensitive files and documentation.
                Developed with <strong>React (Vite)</strong> for a lightning-fast frontend and <strong>Supabase</strong> for backend services,
                it integrates authentication, database, and file storage within a single, seamless environment.
              </p>
              <p>
                Built with a focus on **data integrity and scalability**, the system employs <strong>PostgreSQL row-level security</strong> and
                encrypted storage for confidential records. Users can upload, modify, and version documents in real time, supported by dynamic
                state management and automated transformation logic.
              </p>
              <p>
                The result is a modern, cloud-native infrastructure that transforms how providers interact with critical legal data —
                blending usability, security, and performance in a single platform.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CentralSimi;
