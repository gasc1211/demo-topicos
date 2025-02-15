import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, ShoppingCart, PhoneCall, Mail, Clock, ThumbsUp } from "lucide-react"

const kpiData = [
  {
    title: "Monthly Revenue",
    value: "$54,321",
    change: "+12%",
    icon: DollarSign,
  },
  {
    title: "New Customers",
    value: "321",
    change: "+18%",
    icon: Users,
  },
  {
    title: "Sales Growth",
    value: "15%",
    change: "+5%",
    icon: TrendingUp,
  },
  {
    title: "Avg. Deal Size",
    value: "$12,500",
    change: "+3%",
    icon: ShoppingCart,
  },
  {
    title: "Customer Lifetime Value",
    value: "$4,800",
    change: "+7%",
    icon: Users,
  },
  {
    title: "Churn Rate",
    value: "2.5%",
    change: "-0.5%",
    icon: Users,
  },
  {
    title: "Deal Win Rate",
    value: "68%",
    change: "+4%",
    icon: TrendingUp,
  },
  {
    title: "Calls Made",
    value: "1,234",
    change: "+22%",
    icon: PhoneCall,
  },
  {
    title: "Emails Sent",
    value: "5,678",
    change: "+15%",
    icon: Mail,
  },
  {
    title: "Avg. Response Time",
    value: "2h 15m",
    change: "-18%",
    icon: Clock,
  },
  {
    title: "Customer Satisfaction",
    value: "94%",
    change: "+2%",
    icon: ThumbsUp,
  },
]

export function KPICards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            <kpi.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <p className="text-xs text-muted-foreground">
              {kpi.change.startsWith("+") ? (
                <span className="text-green-600 dark:text-green-400">{kpi.change}</span>
              ) : (
                <span className="text-red-600 dark:text-red-400">{kpi.change}</span>
              )}
              {" from last month"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

