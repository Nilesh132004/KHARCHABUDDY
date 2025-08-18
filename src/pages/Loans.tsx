import { BottomNavigation } from "@/components/BottomNavigation";
import { ArrowLeft, Plus, AlertCircle, Calendar, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Loans = () => {
  const navigate = useNavigate();

  const loanData = [
    {
      id: 1,
      type: "peer",
      lender: "Arjun K.",
      amount: 5000,
      paid: 2000,
      dueDate: "2024-02-15",
      purpose: "Birthday party expenses",
      urgent: false
    },
    {
      id: 2,
      type: "formal",
      lender: "Education Loan",
      amount: 80000,
      paid: 12000,
      dueDate: "2024-02-10",
      purpose: "Semester fees",
      urgent: true
    },
    {
      id: 3,
      type: "peer",
      lender: "Priya S.",
      amount: 1500,
      paid: 500,
      dueDate: "2024-02-20",
      purpose: "Textbooks",
      urgent: false
    }
  ];

  const totalOutstanding = loanData.reduce((sum, loan) => sum + (loan.amount - loan.paid), 0);
  const totalLoans = loanData.reduce((sum, loan) => sum + loan.amount, 0);
  const totalPaid = loanData.reduce((sum, loan) => sum + loan.paid, 0);

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
              <h1 className="text-2xl font-bold text-gradient-primary">Loan Tracker</h1>
              <p className="text-sm text-muted-foreground">Stay on top of your debts 💪</p>
            </div>
          </div>
          <Button size="sm" className="bg-gradient-primary">
            <Plus className="w-4 h-4 mr-1" />
            Add Loan
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mobile-container space-y-6">
        <section>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card className="card-glow border-red-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">₹{totalOutstanding.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Outstanding</div>
              </CardContent>
            </Card>
            <Card className="card-glow border-green-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Repaid</div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="card-glow border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-muted-foreground">{Math.round((totalPaid / totalLoans) * 100)}%</span>
              </div>
              <Progress value={(totalPaid / totalLoans) * 100} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">
                ₹{totalPaid.toLocaleString()} of ₹{totalLoans.toLocaleString()} repaid
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Active Loans */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Active Loans</h2>
            <Badge variant="secondary" className="text-xs">
              {loanData.length} loans
            </Badge>
          </div>
          
          <div className="space-y-3">
            {loanData.map((loan) => {
              const progress = (loan.paid / loan.amount) * 100;
              const remaining = loan.amount - loan.paid;
              const daysUntilDue = Math.ceil((new Date(loan.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
              
              return (
                <Card key={loan.id} className={`card-glow transition-all duration-300 hover:scale-[1.01] ${loan.urgent ? 'border-red-300 bg-red-50/50' : 'border-accent/20'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${loan.type === 'peer' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                          {loan.type === 'peer' ? (
                            <Users className="w-5 h-5 text-blue-600" />
                          ) : (
                            <TrendingUp className="w-5 h-5 text-purple-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{loan.lender}</h3>
                          <p className="text-xs text-muted-foreground">{loan.purpose}</p>
                        </div>
                      </div>
                      {loan.urgent && (
                        <div className="flex items-center gap-1 text-red-600 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          Due soon
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Amount</span>
                        <span className="font-semibold">₹{loan.amount.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Remaining</span>
                        <span className="font-semibold text-red-600">₹{remaining.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-xs">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-1.5" />
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          Due in {daysUntilDue} days
                        </div>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          Pay Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Smart Tips */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-sm">💡</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Smart Tip</h3>
              <p className="text-sm text-muted-foreground">
                Pay off your peer loans first to maintain good relationships. Consider setting up automatic reminders 2 days before due dates.
              </p>
            </div>
          </div>
        </section>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Loans;