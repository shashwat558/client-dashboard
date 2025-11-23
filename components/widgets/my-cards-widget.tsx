"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Plus, ChevronLeft, ChevronRight, CreditCard, CheckCircle2, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"

export function MyCardsWidget() {
  const [activeTab, setActiveTab] = useState("Weekly")

  return (
    <Card className="p-4 px-6 shadow-2xs">
  
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-900">My Cards</h3>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-sm hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" />
          Add Card
        </button>
      </div>

     
      <div className="flex flex-col gap-10 h-full border border-gray-200 border-solid rounded-2xl p-4 relative overflow-hidden">
        
        {/* <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 20L100 60H28L64 20Z" fill="gray" />
            <path d="M64 108L100 68H28L64 108Z" fill="gray" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 16L76 48H20L48 16Z" fill="gray" />
            <path d="M48 80L76 48H20L48 80Z" fill="gray" />
          </svg>
        </div> */}

        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-3">
            
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#335CFF"/>
                <path opacity="0.48" d="M12.3395 20.2554C12.0441 20.2554 11.768 20.4021 11.6027 20.647L9.73545 23.4139C9.33702 24.0042 9.76001 24.8 10.4722 24.8H19.609C19.9044 24.8 20.1805 24.6532 20.3458 24.4083L27.0645 14.4528C27.4629 13.8624 27.04 13.0667 26.3277 13.0667H20.146C19.8506 13.0667 19.5745 13.2134 19.4092 13.4583L15.4828 19.2763C15.0697 19.8884 14.3794 20.2554 13.6408 20.2554H12.3395Z" fill="url(#paint0_linear_294_238)"/>
                <path d="M10.9333 8.0242C11.2595 7.51091 11.8255 7.2 12.4337 7.2H19.9818C20.683 7.2 21.1081 7.97389 20.732 8.56567L14.6667 18.1091C14.3405 18.6224 13.7745 18.9333 13.1663 18.9333H5.61814C4.91696 18.9333 4.49184 18.1594 4.86794 17.5677L10.9333 8.0242Z" fill="url(#paint1_linear_294_238)"/>
                <defs>
                <linearGradient id="paint0_linear_294_238" x1="18.4" y1="13.0667" x2="18.4" y2="30.8585" gradientUnits="userSpaceOnUse">
                <stop offset="0.313079" stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_294_238" x1="12.8001" y1="7.2" x2="12.8001" y2="22.7155" gradientUnits="userSpaceOnUse">
                <stop offset="0.38239" stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            
            <Wifi className="w-6 h-6 text-gray-400 rotate-90" />
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-gray-300 border border-solid rounded-sm">
              <CheckCircle2 className="w-4 h-4 bg-green-500 rounded-full text-white" />
              <span className="text-xs font-medium">Active</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">        
            
            
            <div className="flex gap-0.5">
              <div className="w-8 h-8 rounded-full bg-red-500 opacity-90" />
              <div className="w-8 h-8 rounded-full bg-orange-400 opacity-90 -ml-2" />
            </div>
          </div>
        </div>

        
        <div className="mb-6 relative z-10 flex items-center justify-between">
          <div >
          <p className="text-sm text-gray-600 mb-2">Savings Card</p>
          <p className="text-4xl text-gray-900">$16,058.94</p>
          </div>
          <div className="flex items-center relative z-10 mt-4">
          <button className="w-8 h-8 rounded-l-sm border border-gray-200 border-solid bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
            <button className="w-8 h-8 border border-gray-200 border-solid bg-white rounded-r-sm flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        </div>
        
      </div>

      
      <div className="flex rounded-sm border border-gray-200 overflow-hidden bg-white">
        {["Daily", "Weekly", "Monthly"].map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 py-2 px-4 text-sm font-medium transition-colors text-center relative",
              activeTab === tab 
                ? "bg-gray-100 text-gray-900" 
                : "bg-white text-gray-600 hover:bg-gray-50",
              index > 0 && "border-l border-gray-200"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-4">
          
          <div className="relative w-12 h-12 shrink-0">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
              <circle 
                cx="24" 
                cy="24" 
                r="20" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="4" 
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeDasharray="125.66"
                strokeDashoffset="31.42"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-0.5">Spending Limit</p>
            <p className="text-lg font-semibold text-gray-900">
              $1,500.00 <span className="text-sm text-gray-500 font-normal">/ week</span>
            </p>
          </div>
        </div>
        <button className="w-8 h-8 border border-solid bg-white rounded-sm flex items-center justify-center hover:bg-gray-100 transition-colors shrink-0">
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </Card>
  )
}
