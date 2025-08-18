import { BottomNavigation } from "@/components/BottomNavigation";
import { SavingsGoalCard } from "@/components/SavingsGoalCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Zap, Trophy, TrendingUp } from "lucide-react";

const savingsStats = [
  { label: "Total Saved", value: "₹18,500", change: "+15%", icon: TrendingUp },
  { label: "Goals Achieved", value: "3", change: "+2", icon: Trophy },
  { label: "Streak", value: "12 days", change: "Personal best!", icon: Zap },
];

export default function Savings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20">
      {/* Header */}
      <div className="mobile-container pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gradient-success">Savings Goals</h1>
            <p className="text-sm text-muted-foreground">You're doing amazing! Keep it up! 🎯</p>
          </div>
          <Button className="bg-gradient-to-r from-success to-green-400 text-white btn-bounce">
            <Plus className="w-4 h-4 mr-1" />
            New Goal
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mobile-container space-y-6">
        <section>
          <div className="grid grid-cols-3 gap-3">
            {savingsStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-glow p-4 text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-success" />
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-success font-medium mt-1">{stat.change}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Micro-saving Challenge */}
        <section>
          <Card className="card-glow bg-gradient-to-r from-success/10 to-green-400/10 border-success/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-success to-green-400 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">7-Day Micro-saving Challenge</h3>
                <p className="text-sm text-muted-foreground">Save ₹50 daily, earn badges!</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <Progress value={71} className="progress-glow" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Day 5 of 7</span>
                <span className="text-sm font-semibold text-success">₹250 saved</span>
              </div>
              <div className="flex gap-2 mt-3">
                {[1,2,3,4,5,6,7].map((day) => (
                  <div
                    key={day}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      day <= 5 
                        ? "bg-success text-white" 
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {day <= 5 ? "✓" : day}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Goals List */}
        <section>
          <SavingsGoalCard />
        </section>

        {/* Smart Suggestions */}
        <section>
          <Card className="card-glow p-4">
            <h3 className="font-semibold text-foreground mb-3">💡 Smart Saving Tips</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="text-lg">🎬</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">Try Netflix Party instead of theater</p>
                  <p className="text-xs text-muted-foreground">Save ₹400 per movie</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">Try</Button>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="text-lg">🚌</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">Take bus instead of auto to college</p>
                  <p className="text-xs text-muted-foreground">Save ₹150 daily</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">Enable</Button>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <BottomNavigation />
    </div>
  );
}