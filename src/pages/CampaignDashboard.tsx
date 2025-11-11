import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CampaignDashboard = () => {
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
              Marketing Campaign Dashboard
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Consolidated analytics dashboard. Connects and visualizes data from Programmatic, Google Ads, and GA4 to track KPI performance.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button variant="outline" className="glass-card" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Private Demo
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
                <li>• Data Visualization Tool (Power BI / Looker)</li>
                <li>• Google Ads API</li>
                <li>• Google Analytics 4 (GA4) API</li>
                <li>• Programmatic Ads API Integration</li>
                <li>• Data Blending & ETL</li>
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
                <li>• Cross-Platform Data Consolidation</li>
                <li>• KPI & ROI Visualization</li>
                <li>• Programmatic Campaign Tracking</li>
                <li>• Funnel Analysis (Google Ads & GA4)</li>
                <li>• Automated Reporting</li>
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
                This project addresses the challenge of fragmented marketing data by creating a single, unified dashboard. It connects directly to multiple advertising platforms, including Google Ads, GA4, and various programmatic sources.
              </p>
              <p>
                The dashboard automatically pulls, cleans, and blends data to provide a comprehensive view of campaign performance. This allows stakeholders to move from platform-specific silos to a holistic understanding of marketing ROI, tracking KPIs from initial impression to final conversion.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampaignDashboard;