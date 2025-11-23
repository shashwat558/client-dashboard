"use client"

import { useState } from "react"
import {
  Grid3x3,
  CreditCard,
  ArrowLeftRight,
  Clock,
  FileText,
  RefreshCw,
  Settings,
  Headphones,
  ChevronRight,
  ArrowUpDown,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "./ui/separator"

const navItems = [
  { icon: Grid3x3, label: "Dashboard", active: true },
  { icon: CreditCard, label: "My Cards" },
  { icon: ArrowLeftRight, label: "Transfer" },
  { icon: Clock, label: "Transactions" },
  { icon: FileText, label: "Payments" },
  { icon: RefreshCw, label: "Exchange" },
]

const otherItems = [
  { icon: Settings, label: "Settings" },
  { icon: Headphones, label: "Support" },
]

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <div className="w-[320px] bg-white border-r border-gray-200 flex flex-col h-full relative">
      
      <div className="p-6">
        <div className="flex items-center gap-3">
          
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8L14 6L16 12L8 14L6 8Z" fill="white" fillOpacity="0.85"/>
              <path d="M8 10L16 8L18 14L10 16L8 10Z" fill="white"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-gray-900 text-base">Apex</h1>
            <p className="text-xs text-gray-500">Finance & Banking</p>
          </div>
        
          <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center shrink-0 transition-colors">
            <ArrowUpDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto py-4 relative">
        <div className="px-3">
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mb-2">MAIN</div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeItem === item.label
              return (
                <div key={item.label} className="relative">
                  {isActive && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-600 rounded-r-full z-10" />
                  )}
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-gray-100 text-gray-900" 
                        : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto shrink-0" />}
                  </button>
                </div>
              )
            })}
          </nav>
        </div>

        <div className="px-3 mt-6">
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mb-2">OTHERS</div>
          <nav className="space-y-1">
            {otherItems.map((item) => {
              const isActive = activeItem === item.label
              return (
                <div key={item.label} className="relative">
                  {isActive && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-600 rounded-r-full z-10" />
                  )}
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-gray-100 text-gray-900" 
                        : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span className="flex-1 text-left">{item.label}</span>
                  </button>
                </div>
              )
            })}
          </nav>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 shrink-0">
            <AvatarImage src="/man.jpg" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-gray-900 truncate">Arthur Taylor</p>
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            </div>
            <p className="text-xs text-gray-500 truncate">arthur@alignui.com</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
        </div>
      </div>
    </div>
  )
}
