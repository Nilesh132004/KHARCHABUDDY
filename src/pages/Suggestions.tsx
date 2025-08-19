import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "@/components/BottomNavigation";
import { 
  RefreshCw, 
  Banknote, 
  Coffee, 
  Ticket, 
  Gift,
  Zap,
  TrendingDown,
  Calendar,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Suggestion {
  id: string;
  icon: any;
  iconColor: string;
  title: string;
  description: string;
  savingsAmount?: string;
  actionType: "savings" | "discount" | "earning" | "tip";
}

const smartSuggestions: Suggestion[] = [
  {
    id: "metro-card",
    icon: Banknote,
    iconColor: "text-green-500",
    title: "Switch to Metro Card",
    description: "You take 16 metro rides/month. A monthly card could save you 30%.",
    savingsAmount: "Save ₹150/month",
    actionType: "savings"
  },
  {
    id: "cafe-spending",
    icon: Coffee,
    iconColor: "text-purple-500",
    title: "Café Spending High",
    description: "You've spent ₹950 on coffee this month. Try campus tea for ₹15!",
    savingsAmount: "Potential savings: ₹750/month",
    actionType: "savings"
  },
  {
    id: "bookmyshow-discount",
    icon: Ticket,
    iconColor: "text-orange-500",
    title: "Student Discount at BookMyShow",
    description: "Student tickets are 40% off every Thursday. You visit the movies twice a month.",
    actionType: "discount"
  },
  {
    id: "refer-friends",
    icon: Gift,
    iconColor: "text-blue-500",
    title: "Refer Friends, Earn ₹50 Each",
    description: "Share the app, support your friends' savings, and earn rewards together!",
    actionType: "earning"
  }
];

const aiTips: Suggestion[] = [
  {
    id: "emergency-fund",
    icon: Zap,
    iconColor: "text-yellow-500",
    title: "Build Your Emergency Fund",
    description: "Start with just ₹50/week. Small amounts compound into big security!",
    actionType: "tip"
  },
  {
    id: "autopay-setup",
    icon: Calendar,
    iconColor: "text-green-500",
    title: "Set Up Auto-Transfers",
    description: "Automate ₹200/month to savings. You won't even notice it's gone!",
    actionType: "tip"
  },
  {
    id: "group-buying",
    icon: Users,
    iconColor: "text-purple-500",
    title: "Try Group Buying",
    description: "Buy snacks, supplies in bulk with friends. Save 20-30% on essentials!",
    actionType: "tip"
  },
  {
    id: "track-subscriptions",
    icon: TrendingDown,
    iconColor: "text-red-500",
    title: "Review Your Subscriptions",
    description: "Cancel unused apps and services. Students often save ₹500+/month!",
    actionType: "tip"
  }
];

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(smartSuggestions);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  // Auto-refresh every 12 hours
  useEffect(() => {
    const interval = setInterval(() => {
      refreshSuggestions(false);
    }, 12 * 60 * 60 * 1000); // 12 hours

    return () => clearInterval(interval);
  }, []);

  const refreshSuggestions = async (manual: boolean = true) => {
    setIsRefreshing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (manual) {
      // Show AI financial literacy tips
      setSuggestions(aiTips);
      toast({
        title: "Fresh Tips Loaded! 🧠",
        description: "Here are some AI-powered financial literacy tips just for you!",
      });
    } else {
      // Auto-refresh with spending-based suggestions
      setSuggestions(smartSuggestions);
    }
    
    setLastRefresh(new Date());
    setIsRefreshing(false);
  };

  const SuggestionCard = ({ suggestion }: { suggestion: Suggestion }) => {
    const Icon = suggestion.icon;
    
    return (
      <Card className="p-4 bg-card hover:shadow-md transition-all duration-300 border border-border/50">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
              <Icon className={`w-5 h-5 ${suggestion.iconColor}`} />
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-foreground text-sm">
              {suggestion.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {suggestion.description}
            </p>
            
            {suggestion.savingsAmount && (
              <div className="inline-block">
                <span className="text-xs font-medium bg-success/10 text-success px-2 py-1 rounded-full">
                  {suggestion.savingsAmount}
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: '#fff69a' }}>
      {/* Header */}
      <div className="mobile-container pt-6 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary mb-1">Smart Suggestions</h1>
            <p className="text-sm text-accent font-medium">Personalized for you</p>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => refreshSuggestions(true)}
            disabled={isRefreshing}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Last Updated */}
        <div className="text-xs text-muted-foreground mb-6">
          Last updated: {lastRefresh.toLocaleTimeString()} • Auto-refresh in 12h
        </div>

        {/* Suggestions Grid */}
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <SuggestionCard key={suggestion.id} suggestion={suggestion} />
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">AI-Powered Insights</h3>
              <p className="text-xs text-muted-foreground">
                Our AI analyzes your spending patterns to give you personalized money-saving tips
              </p>
            </div>
          </div>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Suggestions;