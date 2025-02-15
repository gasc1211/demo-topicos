'use client'

import { Bell, Moon, Sun } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center">
        <SidebarTrigger />
        <Input type="search" placeholder="Search..." className="w-[300px] ml-4" />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <img src="/placeholder.svg?height=32&width=32" alt="User" className="rounded-full" />
        </Button>
      </div>
    </header>
  )
}

