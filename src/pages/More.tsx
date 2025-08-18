import { BottomNavigation } from "@/components/BottomNavigation";
import { Bell, User, CreditCard, Users, Calculator, Shield, Briefcase, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate();

  const toolCategories = [
    {
      title: "Money Management",
      tools: [
        {
          icon: CreditCard,
          title: "Loan Tracker",
          description: "Track all your loans & debts",
          path: "/loans",
          color: "from-red-400 to-red-600"
        },
        {
          icon: Users,
          title: "Group Expenses",
          description: "Split bills & rent with friends",
          path: "/group-expenses",
          color: "from-blue-400 to-blue-600"
        },
        {
          icon: Calculator,
          title: "EMI Calculator",
          description: "Calculate loan EMIs & interest",
          path: "/calculator",
          color: "from-green-400 to-green-600"
        }
      ]
    },
    {
      title: "Safety & Income",
      tools: [
        {
          icon: Shield,
          title: "Emergency Fund",
          description: "Build your safety net",
          path: "/emergency",
          color: "from-orange-400 to-orange-600"
        },
        {
          icon: Briefcase,
          title: "Side Income Board",
          description: "Find part-time opportunities",
          path: "/income",
          color: "from-purple-400 to-purple-600"
        },
        {
          icon: HeadphonesIcon,
          title: "Parent Portal",
          description: "Connect with family finances",
          path: "/parent-portal",
          color: "from-pink-400 to-pink-600"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20">
      {/* Header */}
      <div className="mobile-container pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gradient-primary">More Tools</h1>
            <p className="text-sm text-muted-foreground">Everything you need to manage money like a pro 💼</p>
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
        {toolCategories.map((category, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h2>
            <div className="grid grid-cols-1 gap-3">
              {category.tools.map((tool, toolIndex) => {
                const Icon = tool.icon;
                return (
                  <Card 
                    key={toolIndex}
                    className="card-glow border-accent/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => navigate(tool.path)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{tool.title}</h3>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </div>
                        <div className="text-muted-foreground">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}

        {/* Quick Stats */}
        <section className="bg-card rounded-xl p-4 card-glow border border-accent/20">
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Your Financial Health Score</h3>
            <div className="text-3xl font-bold text-gradient-primary mb-1">82/100</div>
            <p className="text-sm text-muted-foreground">Great progress! Keep it up 🚀</p>
          </div>
        </section>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default More;