import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function UpcomingTasks() {
  const tasks = [
    { id: 1, title: "Follow up with client", due: "Today" },
    { id: 2, title: "Prepare presentation", due: "Tomorrow" },
    { id: 3, title: "Send proposal", due: "In 2 days" },
    { id: 4, title: "Schedule team meeting", due: "Next week" },
    { id: 5, title: "Review Q2 performance", due: "Next week" },
  ]

  return (
    <Card className="col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center">
              <Checkbox id={`task-${task.id}`} className="mr-2" />
              <label htmlFor={`task-${task.id}`} className="flex-1 text-sm">
                {task.title}
              </label>
              <span className="text-xs text-muted-foreground">{task.due}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

