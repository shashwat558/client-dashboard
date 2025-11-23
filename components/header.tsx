"use client"

import { Search, Bell, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/profile.png" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Arthur Taylor</h2>
            <p className="text-sm text-gray-500">Welcome back to Apex 👋</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
            Move Money
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
