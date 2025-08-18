import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Share2 } from "lucide-react";

const dailyTips = [
  {
    tip: "Try the 50-30-20 rule: 50% needs, 30% wants, 20% savings!",
    category: "Budgeting",
    emoji: "💡"
  },
  {
    tip: "Skip one coffee this week and save ₹150. That's ₹7,800 per year!",
    category: "Micro-saving",
    emoji: "☕"
  },
  {
    tip: "Use UPI QR codes instead of cash - easier to track your spending!",
    category: "Tracking",
    emoji: "📱"
  },
  {
    tip: "Cook one extra meal at home this week. Save money and eat healthier!",
    category: "Lifestyle",
    emoji: "🍝"
  }
];

export function DailyTipCard() {
  // Get tip of the day (based on day of year)
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const todaysTip = dailyTips[dayOfYear % dailyTips.length];

  return (
    <Card className="card-glow bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white text-xl">
            {todaysTip.emoji}
          </div>
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
              Daily Money Tip
            </span>
          </div>
          
          <p className="text-sm font-medium text-foreground leading-relaxed">
            {todaysTip.tip}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {todaysTip.category}
            </span>
            
            <Button variant="ghost" size="sm" className="h-8 px-3 text-accent hover:bg-accent/10">
              <Share2 className="w-3 h-3 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}