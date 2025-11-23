"use client"

import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { Separator } from "../ui/separator"

export function CreditScoreWidget() {
  
  const filledBars = 28
  const totalBars = 40

  return (
    <Card className="p-6 shadow-2xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8 13.2439C18.8 15.1203 18.0389 16.819 16.8084 18.0488L18.0104 19.25C19.5486 17.7129 20.5 15.5894 20.5 13.2439C20.5 8.55284 16.6944 4.75 12 4.75C7.30558 4.75 3.5 8.55284 3.5 13.2439C3.5 15.5894 4.4514 17.7129 5.98959 19.25L7.19168 18.0488C5.96112 16.819 5.2 15.1203 5.2 13.2439C5.2 9.49105 8.24446 6.44878 12 6.44878C15.7556 6.44878 18.8 9.49105 18.8 13.2439ZM14.7991 9.24579L10.9741 13.0681L12.1761 14.2693L16.0011 10.447L14.7991 9.24579Z" fill="#525866"/>
            </svg>

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

        <div className="relative h-5 bg-gray-100 rounded-none overflow-hidden">
          <div className="absolute inset-0 flex gap-1">
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
