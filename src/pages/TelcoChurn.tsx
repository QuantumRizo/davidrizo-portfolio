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
            <div className="text-6xl mb-6">📉</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Telco Churn Prediction
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Predictive analytics solution to identify at-risk customers and reduce churn using advanced ML techniques
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button className="glass-card" asChild>
                <a href="https://github.com/davidrizo/telco-churn" target="_blank" rel="noopener noreferrer">
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
                <li>• Python & TensorFlow</li>
                <li>• Keras for neural networks</li>
                <li>• Pandas & NumPy</li>
                <li>• scikit-learn</li>
                <li>• XGBoost</li>
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
                <li>• Customer behavior analysis</li>
                <li>• Feature importance ranking</li>
                <li>• Real-time predictions</li>
                <li>• Model interpretability</li>
                <li>• A/B testing framework</li>
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
                This customer churn prediction system helps telecommunications companies identify subscribers 
                at risk of leaving, enabling proactive retention strategies. The model analyzes customer demographics, 
                service usage patterns, billing history, and support interactions to predict churn probability.
              </p>
              <p>
                Built with TensorFlow and ensemble methods, the solution combines deep learning with traditional 
                ML approaches to achieve superior prediction accuracy. The system provides interpretable results, 
                helping business teams understand the key factors driving customer attrition.
              </p>
              <p>
                The implementation includes comprehensive feature engineering, handling imbalanced datasets through 
                SMOTE, and hyperparameter optimization. The model has been validated on real-world telco data and 
                shows significant improvement over baseline approaches in identifying high-risk customers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TelcoChurn;
