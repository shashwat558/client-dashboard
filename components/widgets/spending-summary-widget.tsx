"use client"

import { Card } from "@/components/ui/card"
import { PieChart, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Separator } from "../ui/separator"
import GaugeChart from "react-gauge-chart"
import { ChartRadialStacked } from "../radial-chart"

export function SpendingSummaryWidget() {
  return (
    <Card className="p-4 shadow-2xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Spending Summary</h3>
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
                Last Week
                <ChevronDown className="w-5 h-5 text-[#525866]" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-[160px] border border-[#E1E4EA] rounded-lg shadow-lg bg-white"
            >
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Yesterday</DropdownMenuItem>
              <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
              <DropdownMenuItem>Last Week</DropdownMenuItem>
              <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
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
          <p className="text-3xl font-semibold text-gray-900">$1,800.00</p>
        </div>  
      </div>
      <Separator />

      <div className="grid grid-cols-3">
        <div className="text-center border-r border-gray-200 pr-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-2">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-xs text-gray-600 mb-1">Shopping</p>
          <p className="text-lg font-semibold text-gray-900">$900.00</p>
        </div>
        <div className="text-center border-r border-gray-200 px-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center mx-auto mb-2">
            <Zap className="w-5 h-5 text-cyan-600" />
          </div>
          <p className="text-xs text-gray-600 mb-1">Utilities</p>
          <p className="text-lg font-semibold text-gray-900">$600.00</p>
        </div>
        <div className="text-center pl-4">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-2">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-xs text-gray-600 mb-1">Others</p>
          <p className="text-lg font-semibold text-gray-900">$200.00</p>
        </div>
      </div>

      <div className="mt-2 p-2 border border-gray-200 rounded-md flex items-center justify-between">
        <p className="text-sm text-gray-600">Your weekly spending limit is $2000.</p>
        <button className="text-gray-400 hover:text-gray-600">
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
