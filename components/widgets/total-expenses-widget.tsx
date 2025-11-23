"use client"

import { Card } from "@/components/ui/card"
import { ArrowBigDown, ArrowDown, Minimize2 } from "lucide-react"

export function TotalExpensesWidget() {
  return (
    <Card className="p-3 px-4 shadow-2xs">
      <div className="flex items-center justify-between">
        <button className="p-2 border border-gray-300 rounded-full transition-colors">
          <ArrowDown className="w-5 h-5 text-gray-600 rotate-45" />
        </button>
        <div className="">
        <svg className="w-full h-24" viewBox="0 0 300 96" preserveAspectRatio="none">
          <path
            d="M 0,48 Q 30,30 60,45 T 120,40 Q 150,35 180,50 T 240,45 Q 270,40 300,50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        </svg>
      </div>

      </div>

      

      <div>
        <p className="text-sm text-gray-600 mb-2">Total Expenses</p>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold text-gray-900">$6,240.28</p>
          <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded">-2%</span>
        </div>
      </div>
    </Card>
  )
}
