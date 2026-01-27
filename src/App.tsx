import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Integrations from "./pages/Integrations";
import Innovations from "./pages/Innovations";
import Fmcg from "./pages/Solutions/Fmcg";
import Textiles from "./pages/Solutions/Textiles";
import Explosives from "./pages/Solutions/Explosives";
import RetailsDistribution from "./pages/Solutions/RetailsDistribution";
import Defence from "./pages/Solutions/Defence";
import Agriculture from "./pages/Solutions/Agriculture";
import Automobiles from "./pages/Solutions/Automobiles";
import Aluminium from "./pages/Solutions/Aluminium";
import PharmaHealthcare from "./pages/Solutions/PharmaHealthcare";
import Mining from "./pages/Solutions/Mining";
import Gas from "./pages/Solutions/Gas";
import TowersSteel from "./pages/Solutions/TowersSteel";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Industries from "./pages/Industries";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions" element={<Industries />} />
          <Route path="/solutions/fmcg" element={<Fmcg />} />
          <Route path="/solutions/textiles" element={<Textiles />} />
          <Route path="/solutions/explosives" element={<Explosives />} />
          <Route path="/solutions/retails-distribution" element={<RetailsDistribution />} />
          <Route path="/solutions/defence" element={<Defence />} />
          <Route path="/solutions/agriculture" element={<Agriculture />} />
          <Route path="/solutions/automobiles" element={<Automobiles />} />
          <Route path="/solutions/aluminium" element={<Aluminium />} />
          <Route path="/solutions/pharma-healthcare" element={<PharmaHealthcare />} />
          <Route path="/solutions/mining" element={<Mining />} />
          <Route path="/solutions/gas" element={<Gas />} />
          <Route path="/solutions/towers-steel" element={<TowersSteel />} />
          <Route path="/blog/:slug" element={<Blog />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
