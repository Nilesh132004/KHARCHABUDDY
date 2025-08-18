import { Home, Target, Lightbulb, Receipt, MoreHorizontal } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "dashboard", label: "Home", icon: Home, path: "/" },
  { id: "savings", label: "Goals", icon: Target, path: "/savings" },
  { id: "suggestions", label: "Tips", icon: Lightbulb, path: "/suggestions" },
  { id: "expenses", label: "Track", icon: Receipt, path: "/expenses" },
  { id: "more", label: "More", icon: MoreHorizontal, path: "/more" },
];

export function BottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/40 safe-area-bottom">
      <div className="mobile-container">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10 scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className={`w-5 h-5 mb-1 ${isActive ? "animate-bounce" : ""}`} />
                <span className={`text-xs font-medium ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}