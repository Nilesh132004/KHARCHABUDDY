import { BottomNavigation } from "@/components/BottomNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Calendar, Coffee, Car, ShoppingBag, Gamepad2 } from "lucide-react";

const expenseCategories = [
  { name: "Food", icon: Coffee, amount: 1200, color: "from-orange-400 to-red-400", budget: 1500 },
  { name: "Transport", icon: Car, amount: 800, color: "from-blue-400 to-indigo-400", budget: 1000 },
  { name: "Shopping", icon: ShoppingBag, amount: 450, color: "from-pink-400 to-purple-400", budget: 800 },
  { name: "Entertainment", icon: Gamepad2, amount: 320, color: "from-green-400 to-teal-400", budget: 500 },
];

const recentExpenses = [
  { id: 1, description: "Chai & Samosa", category: "Food", amount: 45, time: "2 hours ago", emoji: "☕" },
  { id: 2, description: "Auto to Mall", category: "Transport", amount: 120, time: "4 hours ago", emoji: "🚗" },
  { id: 3, description: "Movie Ticket", category: "Entertainment", amount: 280, time: "Yesterday", emoji: "🎬" },
  { id: 4, description: "Lunch at Cafeteria", category: "Food", amount: 85, time: "Yesterday", emoji: "🍽️" },
];

export default function Expenses() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20">
      {/* Header */}
      <div className="mobile-container pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gradient-primary">Expense Tracking</h1>
            <p className="text-sm text-muted-foreground">Every rupee counts! 💰</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Calendar className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mobile-container space-y-6">
        {/* Quick Add Expense */}
        <section>
          <Card className="card-glow p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <Button className="w-full h-14 bg-gradient-to-r from-primary to-accent text-white btn-bounce text-lg font-semibold">
              <Plus className="w-6 h-6 mr-2" />
              Add New Expense
            </Button>
          </Card>
        </section>

        {/* Category Breakdown */}
        <section>
          <h3 className="text-lg font-semibold mb-3 text-foreground">This Month's Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            {expenseCategories.map((category) => {
              const Icon = category.icon;
              const percentage = (category.amount / category.budget) * 100;
              const isOverBudget = percentage > 100;
              
              return (
                <Card key={category.name} className="card-glow p-4 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{category.name}</h4>
                      <p className="text-xs text-muted-foreground">₹{category.amount} / ₹{category.budget}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} ${isOverBudget ? 'animate-pulse' : ''}`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-xs ${isOverBudget ? 'text-destructive font-semibold' : 'text-muted-foreground'}`}>
                        {Math.round(percentage)}%
                      </span>
                      {isOverBudget && (
                        <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded-full">
                          Over budget!
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Recent Expenses */}
        <section>
          <h3 className="text-lg font-semibold mb-3 text-foreground">Recent Expenses</h3>
          <div className="space-y-3">
            {recentExpenses.map((expense) => (
              <Card key={expense.id} className="card-glow p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{expense.emoji}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{expense.description}</h4>
                    <p className="text-xs text-muted-foreground">{expense.category} • {expense.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">₹{expense.amount}</p>
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs text-primary">
                      Edit
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Weekly Summary */}
        <section>
          <Card className="card-glow p-4 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <h3 className="font-semibold text-foreground mb-2">This Week's Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-xl font-bold text-foreground">₹2,450</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Daily Average</p>
                <p className="text-xl font-bold text-foreground">₹350</p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-success-light rounded-lg">
              <p className="text-sm text-success font-medium">
                🎉 You spent 12% less than last week! Keep it up!
              </p>
            </div>
          </Card>
        </section>
      </div>

      <BottomNavigation />
    </div>
  );
}