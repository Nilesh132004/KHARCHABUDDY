import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Savings from "./pages/Savings";
import Expenses from "./pages/Expenses";
import More from "./pages/More";
import Loans from "./pages/Loans";
import GroupExpenses from "./pages/GroupExpenses";
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
          <Route path="/savings" element={<Savings />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/suggestions" element={<Index />} />
          <Route path="/more" element={<More />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/group-expenses" element={<GroupExpenses />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
