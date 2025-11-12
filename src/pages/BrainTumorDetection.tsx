import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const BrainTumorDetection = () => {
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
              Brain Tumor Detection
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deep learning pipeline for MRI-based brain tumor classification using advanced CNN architectures and
              medical image preprocessing.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a
                  href="https://github.com/QuantumRizo/Brain-Tumor-Classification"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Repository
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
                <li>• TensorFlow ≥ 2.0 & Keras for model development</li>
                <li>• Python 3.x</li>
                <li>• OpenCV for image preprocessing and augmentation</li>
                <li>• Transfer Learning with ResNet and VGG backbones</li>
                <li>• Model training scripts and architecture export (.json / .h5)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Core Features</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• Multi-class tumor classification (glioma, meningioma, pituitary)</li>
                <li>• Fully automated MRI preprocessing pipeline</li>
                <li>• Ensemble model integration for enhanced performance</li>
                <li>• Grad-CAM heatmap interpretability</li>
                <li>• High accuracy validated on public Kaggle datasets</li>
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
                <strong>QuantumRizo’s Brain Tumor Classification</strong> is a deep learning system designed to assist
                in early and accurate brain tumor diagnosis. Built on state-of-the-art convolutional neural networks,
                it analyzes MRI scans to classify tumors into distinct pathological categories.
              </p>
              <p>
                The pipeline leverages transfer learning from architectures such as <strong>ResNet</strong> and{" "}
                <strong>VGG</strong>, fine-tuned for medical imaging precision. A robust preprocessing stage — including
                normalization, augmentation, and noise reduction — ensures consistent input quality even in heterogeneous
                datasets.
              </p>
              <p>
                Model interpretability is achieved via <strong>Grad-CAM</strong> visualizations, highlighting tumor
                regions that most influence predictions. This bridges the gap between artificial intelligence and
                clinical decision-making, fostering transparency and trust.
              </p>
              <p>
                The project demonstrates how advanced physics-based understanding of imaging signals can combine with
                data-driven neural networks to deliver real medical value — a step toward AI-augmented radiology.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrainTumorDetection;
