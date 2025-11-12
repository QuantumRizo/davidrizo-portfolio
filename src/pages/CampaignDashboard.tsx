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
              Unified marketing intelligence dashboard integrating multi-channel data, social media insights, and automated competitive tracking using Python and SQL.
            </p>
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
                <li>• Python (API Automation & Data Collection)</li>
                <li>• SQL (Data Modeling & Integration)</li>
                <li>• Looker (Interactive Dashboards)</li>
                <li>• Google Ads API & GA4 API</li>
                <li>• Meta, TikTok & YouTube Data APIs</li>
                <li>• Programmatic Ads & ETL Pipelines</li>
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
                <li>• Real-time cross-platform data consolidation</li>
                <li>• AI-powered social media competitor insights</li>
                <li>• Automated Python bot for API-driven data extraction</li>
                <li>• SQL-based unification of diverse data sources</li>
                <li>• Dynamic Looker dashboard with KPI visualizations</li>
                <li>• ROI, engagement & funnel analytics across channels</li>
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
                This project centralizes fragmented marketing and social data into a single, intelligent dashboard. 
                It automates data extraction from major advertising and social platforms — including Google Ads, GA4, 
                Facebook, Instagram, TikTok, and YouTube — through custom Python scripts and API integrations.
              </p>
              <p>
                A custom-built <strong>Python bot</strong> continuously collects competitor performance metrics such as 
                engagement rates, follower growth, post frequency, and ad activity across platforms. 
                These datasets are stored, cleaned, and integrated using <strong>SQL</strong> pipelines that 
                harmonize multiple schemas into a unified data warehouse.
              </p>
              <p>
                The resulting data is visualized in a powerful <strong>Looker dashboard</strong>, designed for 
                real-time performance tracking and competitive benchmarking. Users can interact with KPIs, filter 
                by channel or campaign, and identify optimization opportunities at a glance.
              </p>
              <p>
                This system bridges marketing analytics and data engineering — turning dispersed social and ad 
                data into actionable intelligence for decision-makers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampaignDashboard;
