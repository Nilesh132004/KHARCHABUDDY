import { SpendingInsightCard } from "@/components/SpendingInsightCard";
import { DailyTipCard } from "@/components/DailyTipCard";
import { QuickActions } from "@/components/QuickActions";
import { SavingsGoalCard } from "@/components/SavingsGoalCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20">
      {/* Header */}
      <div className="mobile-container pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gradient-primary">KharchaBuddy</h1>
            <p className="text-sm text-muted-foreground">Hey Rahul! Ready to be smart with money? 💸</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mobile-container space-y-6">
        {/* Spending Insights */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-foreground">This Week's Overview</h2>
          <div className="grid grid-cols-1 gap-4">
            <SpendingInsightCard
              title="Total Spending"
              amount={2450}
              change={-12}
              period="vs last week"
              type="spending"
            />
            <div className="grid grid-cols-2 gap-3">
              <SpendingInsightCard
                title="Saved"
                amount={800}
                change={25}
                period="this month"
                type="savings"
              />
              <SpendingInsightCard
                title="Budget Left"
                amount={1200}
                change={-8}
                period="this month"
                type="budget"
              />
            </div>
          </div>
        </section>

        {/* Daily Tip */}
        <section>
          <DailyTipCard />
        </section>

        {/* Quick Actions */}
        <section>
          <QuickActions />
        </section>

        {/* Savings Goals Preview */}
        <section>
          <SavingsGoalCard />
        </section>

        {/* Peer Benchmark */}
        <section className="bg-card rounded-xl p-4 card-glow border border-accent/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center">
              <span className="text-white text-sm font-bold">👥</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Peer Benchmark</h3>
              <p className="text-sm text-muted-foreground">
                Students like you spent <span className="font-semibold text-accent">₹2,800</span> this week
              </p>
            </div>
            <div className="text-xs bg-success-light text-success px-2 py-1 rounded-full font-medium">
              You saved 12% more! 🎉
            </div>
          </div>
        </section>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
