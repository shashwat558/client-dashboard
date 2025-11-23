"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { PieChart, ChevronDown, LucideIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Separator } from "../ui/separator"
import { ChartRadialStacked } from "../radial-chart"
import { cn } from "@/lib/utils"

export interface SpendingCategory {
  name: string
  amount: number
  icon?: LucideIcon | React.ComponentType<{ className?: string }>
  iconBg?: string
  iconColor?: string
}

export interface SpendingSummaryWidgetProps {
  title?: string
  totalSpent?: number
  spendingLimit?: number
  limitPeriod?: string
  categories?: SpendingCategory[]
  timePeriods?: string[]
  defaultPeriod?: string
  onPeriodChange?: (period: string) => void
  onInfoClick?: () => void
}

const defaultCategories: SpendingCategory[] = [
  {
    name: "Shopping",
    amount: 900,
    icon: ShoppingBag,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    name: "Utilities",
    amount: 600,
    icon: Zap,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600"
  },
  {
    name: "Others",
    amount: 200,
    icon: MoreHorizontal,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600"
  }
]

const defaultTimePeriods = ["Today", "Yesterday", "Last 7 Days", "Last Week", "Last 30 Days", "This Month"]

export function SpendingSummaryWidget({
  title = "Spending Summary",
  totalSpent = 1800,
  spendingLimit = 2000,
  limitPeriod = "week",
  categories = defaultCategories,
  timePeriods = defaultTimePeriods,
  defaultPeriod = "Last Week",
  onPeriodChange,
  onInfoClick
}: SpendingSummaryWidgetProps) {
  const [selectedPeriod, setSelectedPeriod] = useState(defaultPeriod)
  return (
    <Card className="p-4 shadow-2xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="
                  flex items-center gap-1
                  px-[10px] py-[6px]
                  bg-white border border-[#E1E4EA] rounded-sm
                  shadow-[0px_1px_2px_rgba(10,13,20,0.03)]
                  text-[14px] leading-[20px] tracking-[-0.006em]
                  text-[#0E121B] font-inter
                  whitespace-nowrap   
                  min-w-[120px]
                "
              >
                {selectedPeriod}
                <ChevronDown className="w-5 h-5 text-[#525866]" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-[160px] border border-[#E1E4EA] rounded-lg shadow-lg bg-white"
            >
              {timePeriods.map((period) => (
                <DropdownMenuItem
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period)
                    onPeriodChange?.(period)
                  }}
                >
                  {period}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>


      </div>
      
      <Separator />
      <div className="relative w-full h-[150px] flex flex-col items-center justify-center">
        <div className="w-full h-full">
          <ChartRadialStacked />
        </div>
        <div className="absolute inset-0 top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">SPEND</p>
          <p className="text-3xl font-semibold text-gray-900">
            ${totalSpent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>  
      </div>
      <Separator />

      <div className="grid grid-cols-3">
        {categories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <div 
              key={category.name}
              className={cn(
                "text-center",
                index < categories.length - 1 && "border-r border-gray-200 pr-4",
                index === categories.length - 1 && "pl-4",
                index > 0 && index < categories.length - 1 && "px-4"
              )}
            >
              {IconComponent && (
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2", category.iconBg || "bg-gray-100")}>
                  <IconComponent className={cn("w-5 h-5", category.iconColor || "text-gray-600")} />
                </div>
              )}
              <p className="text-xs text-gray-600 mb-1">{category.name}</p>
              <p className="text-lg font-semibold text-gray-900">
                ${category.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-2 p-2 border border-gray-200 rounded-md flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Your {limitPeriod}ly spending limit is ${spendingLimit.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}.
        </p>
        <button 
          onClick={onInfoClick}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </Card>
  )
}

function ShoppingBag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function Zap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function MoreHorizontal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
