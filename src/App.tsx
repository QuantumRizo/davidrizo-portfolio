import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GalaxyClassification from "./pages/GalaxyClassification";
import TelcoChurn from "./pages/TelcoChurn";
import BrainTumorDetection from "./pages/BrainTumorDetection";
import CentralSimi from "./pages/CentralSimi";
import SummerCamp from "./pages/SummerCamp";
import CampaignDashboard from "./pages/CampaignDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/galaxy-classification" element={<GalaxyClassification />} />
          <Route path="/projects/telco-churn" element={<TelcoChurn />} />
          <Route path="/projects/brain-tumor-detection" element={<BrainTumorDetection />} />
          <Route path="/projects/central-simi" element={<CentralSimi />} />
          <Route path="/projects/campaign-dashboard" element={<CampaignDashboard />} />
          <Route path="/projects/summer-camp" element={<SummerCamp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
