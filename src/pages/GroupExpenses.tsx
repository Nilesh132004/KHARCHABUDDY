import { BottomNavigation } from "@/components/BottomNavigation";
import { ArrowLeft, Plus, Users, Home, Coffee, Car, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const GroupExpenses = () => {
  const navigate = useNavigate();

  const groups = [
    {
      id: 1,
      name: "Room 305 Gang",
      members: ["You", "Rohit", "Aman", "Deepak"],
      totalExpense: 12450,
      yourShare: 3112,
      yourBalance: -850, // negative means you owe
      recentActivity: "Electricity bill added",
      icon: Home,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      name: "Weekend Squad",
      members: ["You", "Priya", "Neha", "Kartik", "Vishal"],
      totalExpense: 4200,
      yourShare: 840,
      yourBalance: 340, // positive means others owe you
      recentActivity: "Movie night settled",
      icon: Coffee,
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      name: "Goa Trip 2024",
      members: ["You", "Rahul", "Ankit", "Sarthak"],
      totalExpense: 28900,
      yourShare: 7225,
      yourBalance: -1200,
      recentActivity: "Hotel booking split",
      icon: Car,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      group: "Room 305 Gang",
      description: "Electricity Bill - February",
      amount: 1200,
      splitWith: 4,
      addedBy: "Rohit",
      date: "2 hours ago",
      yourShare: 300
    },
    {
      id: 2,
      group: "Weekend Squad",
      description: "Pizza & Drinks",
      amount: 850,
      splitWith: 5,
      addedBy: "You",
      date: "1 day ago",
      yourShare: 170
    },
    {
      id: 3,
      group: "Goa Trip 2024",
      description: "Taxi to Airport",
      amount: 600,
      splitWith: 4,
      addedBy: "Ankit",
      date: "2 days ago",
      yourShare: 150
    }
  ];

  const settlements = [
    {
      id: 1,
      name: "Rohit K.",
      amount: -450,
      group: "Room 305 Gang",
      avatar: "🧑‍💻"
    },
    {
      id: 2,
      name: "Priya S.",
      amount: 200,
      group: "Weekend Squad",
      avatar: "👩‍🎓"
    },
    {
      id: 3,
      name: "Aman P.",
      amount: -400,
      group: "Room 305 Gang",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20">
      {/* Header */}
      <div className="mobile-container pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gradient-primary">Group Expenses</h1>
              <p className="text-sm text-muted-foreground">Split smart, stay friends 🤝</p>
            </div>
          </div>
          <Button size="sm" className="bg-gradient-primary">
            <Plus className="w-4 h-4 mr-1" />
            Add Expense
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mobile-container">
        <Tabs defaultValue="groups" className="space-y-6">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="balances">Balances</TabsTrigger>
          </TabsList>

          {/* Groups Tab */}
          <TabsContent value="groups" className="space-y-4">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.id} className="card-glow border-accent/20 transition-all duration-300 hover:scale-[1.01]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground">{group.name}</h3>
                          <Badge variant={group.yourBalance >= 0 ? "default" : "destructive"} className="text-xs">
                            {group.yourBalance >= 0 ? `+₹${group.yourBalance}` : `₹${Math.abs(group.yourBalance)}`}
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-2">
                          {group.members.join(" • ")}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Total spent: ₹{group.totalExpense.toLocaleString()}</span>
                          <span className="text-xs text-muted-foreground">{group.recentActivity}</span>
                        </div>
                        
                        <div className="text-sm mt-2">
                          <span className="text-muted-foreground">Your share: </span>
                          <span className="font-semibold">₹{group.yourShare.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                        View Details
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 text-xs">
                        Settle Up
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            
            <Button variant="outline" className="w-full h-12 border-dashed border-accent/40">
              <Plus className="w-4 h-4 mr-2" />
              Create New Group
            </Button>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-3">
            {recentTransactions.map((transaction) => (
              <Card key={transaction.id} className="card-glow border-accent/20">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm">{transaction.description}</h3>
                      <p className="text-xs text-muted-foreground">{transaction.group} • Added by {transaction.addedBy}</p>
                      <p className="text-xs text-muted-foreground mt-1">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">₹{transaction.amount}</div>
                      <div className="text-xs text-muted-foreground">Your share: ₹{transaction.yourShare}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Balances Tab */}
          <TabsContent value="balances" className="space-y-3">
            <div className="text-center mb-4">
              <div className="text-lg font-semibold text-foreground">Net Balance</div>
              <div className="text-3xl font-bold text-red-600">-₹710</div>
              <p className="text-sm text-muted-foreground">You owe in total</p>
            </div>
            
            {settlements.map((person) => (
              <Card key={person.id} className="card-glow border-accent/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-lg">{person.avatar}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{person.name}</h3>
                        <p className="text-xs text-muted-foreground">{person.group}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`text-sm font-semibold ${person.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {person.amount >= 0 ? `owes you ₹${person.amount}` : `you owe ₹${Math.abs(person.amount)}`}
                      </div>
                      {person.amount < 0 && (
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          Pay
                        </Button>
                      )}
                      {person.amount >= 0 && (
                        <Button size="sm" variant="ghost" className="h-7 text-xs">
                          Remind
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default GroupExpenses;