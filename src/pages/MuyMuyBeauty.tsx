import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Shield, Smartphone, Globe, Database } from "lucide-react";
import { Link } from "react-router-dom";

const MuyMuyBeauty = () => {
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
              MUYMUY Beauty Studio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive digital ecosystem designed for branch management and premium customer experience. 
              Built as a modern Monorepo, it integrates a powerful administrative web platform with a native mobile application.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button variant="outline" className="glass-card" asChild>
                <a
                  href="https://github.com/QuantumRizo/muy_muy_beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  GitHub Repository
                </a>
              </Button>
            </div>
          </div>

          {/* Screenshot Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
               <img 
                src="/muymuyPC.webp" 
                alt="MUYMUY Admin Platform" 
                className="rounded-2xl shadow-2xl border border-white/10"
              />
              <p className="mt-2 text-center text-sm text-muted-foreground">Administrative Platform</p>
            </div>
            <div className="relative group flex justify-center">
               <img 
                src="/muymuyPhone.webp" 
                alt="MUYMUY Client App" 
                className="rounded-2xl shadow-2xl border border-white/10 max-h-[500px] w-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="text-blue-500" /> Web Module
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• <strong>React + Vite</strong> — High-performance SPA</li>
                <li>• <strong>TailwindCSS</strong> — Cutting-edge styling</li>
                <li>• <strong>Zustand & React Query</strong> — Efficient state management</li>
                <li>• <strong>Vercel Deployment</strong> — Optimized cloud routing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Smartphone className="text-purple-500" /> Mobile Module
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• <strong>React Native + Expo SDK</strong> — Native performance</li>
                <li>• <strong>Expo Router</strong> — Type-safe navigation</li>
                <li>• <strong>Real-time Agenda</strong> — Instant booking sync</li>
                <li>• <strong>Offline Support</strong> — Local persistence with Supabase</li>
              </ul>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Database className="text-green-500" /> Backend & Infrastructure
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Powered by <strong>Supabase</strong>, providing a robust PostgreSQL database, secure authentication, 
                and Row Level Security (RLS) to protect sensitive customer and business data across all 4 branches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-red-500" /> Monorepo Architecture
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Utilizes <strong>npm workspaces</strong> for shared logic and dependencies, while maintaining 
                a deliberate isolation for the mobile module to ensure native stability and avoid dependency conflicts.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MuyMuyBeauty;
