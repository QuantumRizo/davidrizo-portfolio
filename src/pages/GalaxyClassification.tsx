import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const GalaxyClassification = () => {
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
            <div className="text-6xl mb-6">🪐</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Galaxy Classification
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Machine learning model to classify galaxies as Active Galactic Nuclei (AGN) or Starburst galaxies using FITS spectral data
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a href="https://github.com/davidrizo/galaxy-classification" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </a>
              </Button>
              <Button variant="outline" className="glass-card" asChild>
                <a href="#demo" target="_blank" rel="noopener noreferrer">
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
                <li>• Python & NumPy</li>
                <li>• scikit-learn</li>
                <li>• Astropy for FITS data</li>
                <li>• Pandas for data processing</li>
                <li>• Matplotlib & Seaborn</li>
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
                <li>• Spectral line analysis</li>
                <li>• Feature extraction pipeline</li>
                <li>• Multiple ML classifiers</li>
                <li>• Cross-validation</li>
                <li>• Performance metrics</li>
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
                This project tackles the challenge of automated galaxy classification using spectroscopic data. 
                By analyzing emission line ratios and spectral features from FITS files, the model can distinguish 
                between galaxies dominated by star formation (Starburst) and those powered by supermassive black holes (AGN).
              </p>
              <p>
                The classification pipeline includes sophisticated data preprocessing, feature engineering from spectral 
                lines, and ensemble machine learning techniques. The model achieves high accuracy by leveraging physical 
                properties of galactic spectra combined with modern ML algorithms.
              </p>
              <p>
                Key challenges included handling noisy astronomical data, dealing with redshift corrections, and 
                extracting meaningful features from complex spectral distributions. The solution implements robust 
                preprocessing steps and multiple classification algorithms to ensure reliable predictions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalaxyClassification;
