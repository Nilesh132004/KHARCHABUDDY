import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Target } from "lucide-react";

interface SpendingInsightCardProps {
  title: string;
  amount: number;
  change: number;
  period: string;
  type: "spending" | "savings" | "budget";
}

export function SpendingInsightCard({ title, amount, change, period, type }: SpendingInsightCardProps) {
  const isPositive = change > 0;
  const formatAmount = (amt: number) => `₹${amt.toLocaleString()}`;
  
  const getGradient = () => {
    switch (type) {
      case "savings": return "bg-gradient-to-br from-success to-success/80";
      case "budget": return "bg-gradient-to-br from-secondary to-secondary/80";
      default: return "bg-gradient-to-br from-primary to-primary/80";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "savings": return Target;
      case "budget": return Target;
      default: return isPositive ? TrendingUp : TrendingDown;
    }
  };

  const Icon = getIcon();

  return (
    <Card className={`relative overflow-hidden card-glow ${getGradient()} text-white p-6`}>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium opacity-90">{title}</h3>
          <Icon className="w-5 h-5 opacity-80" />
        </div>
        
        <div className="space-y-2">
          <p className="text-2xl font-bold">{formatAmount(amount)}</p>
          
          <div className="flex items-center gap-2">
            <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
              isPositive 
                ? "bg-white/20 text-white" 
                : "bg-white/20 text-white"
            }`}>
              {isPositive ? "+" : ""}{change}%
            </span>
            <span className="text-xs opacity-75">{period}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
    </Card>
  );
}