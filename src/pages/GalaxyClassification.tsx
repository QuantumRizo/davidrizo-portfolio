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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Galaxy Classification (AGN vs. Starburst)
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deep learning pipeline for classifying galaxies into Active Galactic Nuclei (AGN) or Starburst types using spectroscopic FITS data from the Sloan Digital Sky Survey (SDSS). Developed in collaboration with the Institute of Astronomy at UNAM.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a
                  href="https://github.com/QuantumRizo/agn-starburst-galaxy-classifier"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </a>
              </Button>
              <Button variant="outline" className="glass-card" asChild>
                <a href="#demo" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Project Docs
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
                <li>• Python, NumPy, Pandas</li>
                <li>• TensorFlow (1D CNN)</li>
                <li>• Scikit-learn</li>
                <li>• Astropy (FITS Data Handling)</li>
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
                <li>• Automated galaxy classification from FITS spectra</li>
                <li>• 1D Convolutional Neural Network (CNN) architecture</li>
                <li>• Redshift correction and spectral normalization</li>
                <li>• Ensemble model evaluation with high accuracy (&gt;90%)</li>
                <li>• Confusion matrix and learning curve visualization</li>
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
                This project aims to automate the classification of galaxies into <strong>Active Galactic Nuclei (AGN)</strong> and <strong>Starburst</strong> categories using spectral data from the <strong>Sloan Digital Sky Survey (SDSS)</strong>. 
                It leverages <strong>1D Convolutional Neural Networks</strong> to detect key emission patterns and physical features in galactic spectra.
              </p>
              <p>
                The data preprocessing pipeline — built with <strong>Astropy</strong> and <strong>NumPy</strong> — handles FITS file parsing, flux normalization, and redshift correction. The model training phase integrates multiple ML techniques, 
                including data augmentation, ensemble learning, and cross-validation, achieving strong classification performance on unseen data.
              </p>
              <p>
                The system was developed as part of a research collaboration at the <strong>Instituto de Astronomía (UNAM)</strong> under the supervision of <strong>Dr. José Antonio de Diego Onsurbe</strong>. 
                The results demonstrate how deep learning can accelerate large-scale astrophysical data analysis and galaxy taxonomy.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalaxyClassification;
