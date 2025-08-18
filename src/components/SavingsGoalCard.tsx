import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface SavingsGoal {
  id: string;
  title: string;
  currentAmount: number;
  targetAmount: number;
  emoji: string;
  deadline: string;
}

const sampleGoals: SavingsGoal[] = [
  {
    id: "1",
    title: "New Phone",
    currentAmount: 15000,
    targetAmount: 25000,
    emoji: "📱",
    deadline: "Dec 2024"
  },
  {
    id: "2", 
    title: "Trip to Goa",
    currentAmount: 3500,
    targetAmount: 8000,
    emoji: "🏖️",
    deadline: "Jan 2025"
  }
];

export function SavingsGoalCard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Savings Goals</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
          <Plus className="w-4 h-4 mr-1" />
          Add Goal
        </Button>
      </div>

      <div className="space-y-3">
        {sampleGoals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          const isNearlyComplete = progress >= 80;
          
          return (
            <Card key={goal.id} className="card-glow p-4 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{goal.emoji}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{goal.title}</h4>
                  <p className="text-xs text-muted-foreground">Target by {goal.deadline}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">
                    ₹{goal.currentAmount.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    of ₹{goal.targetAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Progress 
                  value={progress} 
                  className={`progress-glow ${isNearlyComplete ? "animate-pulse" : ""}`}
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {Math.round(progress)}% complete
                  </span>
                  {isNearlyComplete && (
                    <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded-full animate-pulse">
                      Almost there! 🎉
                    </span>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}