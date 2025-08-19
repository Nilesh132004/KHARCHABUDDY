import { Button } from "@/components/ui/button";
import { Plus, Send, Zap, FileText } from "lucide-react";

const quickActions = [
  {
    id: "add-expense",
    label: "Add Expense",
    icon: Plus,
    gradient: "from-primary to-primary-glow",
    action: () => console.log("Add expense")
  },
  {
    id: "split-bill",
    label: "Split Bill",
    icon: Send,
    gradient: "from-secondary to-orange-400",
    action: () => console.log("Split bill")
  },
  {
    id: "quick-save",
    label: "Quick Save",
    icon: Zap,
    gradient: "from-success to-green-400",
    action: () => console.log("Quick save")
  },
  {
    id: "expense-report",
    label: "Expense Report",
    icon: FileText,
    gradient: "from-accent to-blue-400",
    action: () => console.log("Generate expense report")
  }
];

export function QuickActions() {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          
          return (
            <Button
              key={action.id}
              onClick={action.action}
              className={`h-16 btn-bounce bg-gradient-to-r ${action.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{action.label}</span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}