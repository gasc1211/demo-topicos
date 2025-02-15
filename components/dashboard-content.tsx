import { KPICards } from "@/components/kpi-cards"
import { RecentActivities } from "@/components/recent-activities"
import { UpcomingTasks } from "@/components/upcoming-tasks"
import { SalesPipeline } from "@/components/sales-pipeline"

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-secondary/10 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <KPICards />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <RecentActivities />
        <UpcomingTasks />
        <SalesPipeline />
      </div>
    </main>
  )
}

