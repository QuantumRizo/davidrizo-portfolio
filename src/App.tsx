import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import MainLayout from "./components/MainLayout";

// Páginas
import Index from "@/pages/Index";
import GalaxyClassification from "@/pages/GalaxyClassification";
import TelcoChurn from "@/pages/TelcoChurn";
import BrainTumorDetection from "@/pages/BrainTumorDetection";
import CentralSimi from "@/pages/CentralSimi";
import SummerCamp from "@/pages/SummerCamp";
import CampaignDashboard from "@/pages/CampaignDashboard";
import ProjectsPage from "@/pages/ProjectsPage";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* ✅ Todas las páginas pasan por MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/galaxy-classification" element={<GalaxyClassification />} />
            <Route path="/projects/telco-churn" element={<TelcoChurn />} />
            <Route path="/projects/brain-tumor-detection" element={<BrainTumorDetection />} />
            <Route path="/projects/central-simi" element={<CentralSimi />} />
            <Route path="/projects/campaign-dashboard" element={<CampaignDashboard />} />
            <Route path="/projects/summer-camp" element={<SummerCamp />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Página 404 fuera del layout */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
