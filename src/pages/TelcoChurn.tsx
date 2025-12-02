import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const TelcoChurn = () => {
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
              Telco Churn Prediction
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Machine Learning system designed to predict customer churn for a
              telecom company using deep learning and advanced data
              preprocessing — enabling data-driven retention strategies.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a
                  href="https://github.com/QuantumRizo/Telco_Churn"
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
              <h2 className="text-2xl font-bold mb-4 gradient-text">
                Tech Stack
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• Python 3.x</li>
                <li>• TensorFlow & Keras</li>
                <li>• Scikit-learn</li>
                <li>• Pandas & NumPy</li>
                <li>• Matplotlib & Seaborn</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">
                Key Features
              </h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• End-to-end ML pipeline for churn prediction</li>
                <li>• Neural network with dropout regularization</li>
                <li>• Feature scaling and one-hot encoding</li>
                <li>• Precision-Recall curve optimization</li>
                <li>• Integration-ready outputs for Power BI dashboards</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Project Overview
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                This project delivers a robust churn prediction model that
                empowers telecom companies to anticipate customer attrition and
                take preventive action. By leveraging deep learning models built
                with TensorFlow and optimized data pipelines, the system
                identifies high-risk users with remarkable precision.
              </p>
              <p>
                The workflow includes automated preprocessing, one-hot
                encoding, and feature scaling using scikit-learn. A
                fully-connected neural network trained with dropout and ReLU
                activations ensures resilience against overfitting and captures
                nonlinear customer behavior patterns.
              </p>
              <p>
                Evaluation metrics such as ROC-AUC (0.82) and F1-score (0.62)
                confirm the model’s business utility. The Precision-Recall curve
                visualization highlights the optimal threshold for maximizing
                retention efficiency while minimizing false positives.
              </p>
              <p>
                This implementation exemplifies an **AI-driven decision support
                tool**—bridging data science and strategy to reduce churn rates
                and enhance customer lifetime value.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TelcoChurn;
