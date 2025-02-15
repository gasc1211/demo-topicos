'use client'

import { BarChart, Users, Calendar, Settings, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-4">
        <h2 className="text-2xl font-bold">CRM Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" passHref legacyBehavior>
              <SidebarMenuButton>
                <BarChart className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/contacts" passHref legacyBehavior>
              <SidebarMenuButton>
                <Users className="mr-2 h-4 w-4" />
                <span>Contacts</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/calendar" passHref legacyBehavior>
              <SidebarMenuButton>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

