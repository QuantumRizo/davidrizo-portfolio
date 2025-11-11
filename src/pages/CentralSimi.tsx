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
          <Link to="/projects">
            <Button variant="ghost" className="mb-8 glass-card">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              CentralSimi (Provider Portal)
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              React (Vite) and Supabase portal for secure legal file management, including upload, update, and transformation features.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
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
                <li>• React (Vite)</li>
                <li>• Supabase (Auth & Database)</li>
                <li>• Supabase Storage</li>
                <li>• Tailwind CSS</li>
                <li>• Zustand (State Management)</li>
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
                <li>• Secure Provider Authentication</li>
                <li>• Drag-and-Drop File Uploads</li>
                <li>• File Transformation Logic</li>
                <li>• Document Version Control</li>
                <li>• Real-time Data Sync</li>
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
                This project provides a secure, internal-facing portal for legal providers. Built on React and Supabase, it allows authenticated users to upload, manage, and update sensitive legal documents.
              </p>
              <p>
                The system utilizes Supabase's row-level security for robust data protection and Supabase Storage for handling file uploads. The primary feature includes logic to transform and update existing files in the database, ensuring data integrity and version control.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CentralSimi;