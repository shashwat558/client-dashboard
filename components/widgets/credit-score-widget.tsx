"use client"

import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { Separator } from "../ui/separator"

export function CreditScoreWidget() {
  
  const filledBars = 71
  const totalBars = 100

  return (
    <Card className="p-6 shadow-2xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-900">Credit Score</h3>
        </div>
        <button className="text-sm border border-gray-300 rounded-sm px-2 py-1 text-gray-600 hover:text-gray-900">Details</button>
      </div>
      <Separator />
      <div>
        <div className="flex items-center justify-between">
        <p className="text-lg text-gray-900">
          
          <span className="text-gray-500">Your</span> credit score <span className="text-gray-500">is</span> <span className=" text-gray-900">710</span>
          <p className="text-sm text-gray-600">This score is considered to be Excellent.</p>
          
          
          
        </p>
        <span className="text-xl ml-2 p-2 rounded-full bg-[#FFF1EB]">😎</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          
          
        </div>

        <div className="relative h-4 bg-gray-100 rounded overflow-hidden">
          <div className="absolute inset-0 flex">
            {Array.from({ length: filledBars }).map((_, i) => (
              <div key={i} className="flex-1 h-full bg-green-500 border-r border-gray-100" />
            ))}
            {Array.from({ length: totalBars - filledBars }).map((_, i) => (
              <div key={i + filledBars} className="flex-1 h-full bg-gray-200 border-r border-gray-100" />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
