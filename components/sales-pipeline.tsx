import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const stages = [
  { name: "Lead", value: 100, color: "bg-blue-500" },
  { name: "Qualified", value: 80, color: "bg-green-500" },
  { name: "Proposal", value: 60, color: "bg-yellow-500" },
  { name: "Negotiation", value: 40, color: "bg-orange-500" },
  { name: "Closed", value: 20, color: "bg-red-500" },
]

export function SalesPipeline() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Sales Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage) => (
            <div key={stage.name} className="flex items-center">
              <span className="w-24 text-sm">{stage.name}</span>
              <div className="flex-1 ml-2">
                <Progress value={stage.value} className={`h-2 ${stage.color}`} />
              </div>
              <span className="w-12 text-right text-sm">{stage.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

