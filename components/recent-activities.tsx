import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivities() {
  const activities = [
    { id: 1, description: "John Doe added a new contact", time: "2 hours ago" },
    { id: 2, description: "Sarah Smith closed a deal", time: "4 hours ago" },
    { id: 3, description: "New lead assigned to Mike Johnson", time: "Yesterday" },
    { id: 4, description: "Team meeting scheduled", time: "2 days ago" },
    { id: 5, description: "Emma Watson updated a proposal", time: "3 days ago" },
  ]

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex justify-between items-center">
              <span className="text-sm">{activity.description}</span>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

