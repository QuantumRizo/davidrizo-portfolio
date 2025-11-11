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
              Deep learning model for automated brain tumor classification from MRI scans using CNN architectures
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a href="https://github.com/QuantumRizo/Brain-Tumor-Classification" target="_blank" rel="noopener noreferrer">
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
                <li>• TensorFlow & Keras</li>
                <li>• OpenCV for image processing</li>
                <li>• ResNet & VGG architectures</li>
                <li>• Transfer learning</li>
                <li>• Data augmentation</li>
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
                <li>• Multi-class classification</li>
                <li>• Image preprocessing pipeline</li>
                <li>• Model ensembling</li>
                <li>• Grad-CAM visualization</li>
                <li>• High accuracy metrics</li>
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
                This medical imaging project applies state-of-the-art deep learning techniques to detect and classify 
                brain tumors from MRI scans. The system can identify different tumor types including gliomas, meningiomas, 
                and pituitary tumors, providing a valuable diagnostic aid for healthcare professionals.
              </p>
              <p>
                Using convolutional neural networks (CNNs) with transfer learning from pre-trained models like ResNet 
                and VGG, the system achieves high accuracy while maintaining computational efficiency. The architecture 
                includes custom layers optimized for medical image analysis and extensive data augmentation to handle 
                limited training samples.
              </p>
              <p>
                The project emphasizes model interpretability through Grad-CAM visualizations, allowing medical 
                professionals to understand which regions of the MRI influenced the prediction. This transparency is 
                crucial for clinical adoption and building trust in AI-assisted diagnosis. The model has been validated 
                on public medical imaging datasets and shows promise for real-world deployment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrainTumorDetection;
