import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const dailySpendingData = [
  { day: 'Mon', amount: 320 },
  { day: 'Tue', amount: 280 },
  { day: 'Wed', amount: 250 },
  { day: 'Thu', amount: 380 },
  { day: 'Fri', amount: 310 },
  { day: 'Sat', amount: 450 },
  { day: 'Sun', amount: 290 }
];

export function SpendingChart() {
  return (
    <div className="bg-card rounded-xl p-4 card-glow border border-accent/20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Spending Insights</h3>
          <p className="text-sm text-muted-foreground">Daily spending pattern this week</p>
        </div>
        <Button variant="ghost" size="sm" className="text-accent">
          <TrendingUp className="w-4 h-4 mr-1" />
          More Insights
        </Button>
      </div>
      
      <div className="h-32 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailySpendingData}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis hide />
            <Bar 
              dataKey="amount" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <span className="text-sm text-muted-foreground">Daily Expenses</span>
        <div className="ml-auto text-sm font-semibold text-foreground">Avg: ₹422</div>
      </div>
    </div>
  );
}