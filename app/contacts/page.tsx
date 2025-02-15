import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ContactsTable } from "@/components/contacts-table"

export default function ContactsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-secondary/10 p-6">
          <h1 className="text-3xl font-bold mb-6">Contacts</h1>
          <ContactsTable />
        </main>
      </div>
    </div>
  )
}

