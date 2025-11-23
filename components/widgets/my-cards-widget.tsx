"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Plus, ChevronLeft, ChevronRight, CreditCard, CheckCircle2, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export interface CardData {
  id: string
  name: string
  balance: number
  logo?: string
  cardType?: string
  status?: "Active" | "Inactive" | "Expired"
}

export interface SpendingLimit {
  current: number
  limit: number
  period: string
  percentage: number
}

export interface MyCardsWidgetProps {
  title?: string
  cards?: CardData[]
  tabs?: string[]
  spendingLimit?: SpendingLimit
  onAddCard?: () => void
  onCardChange?: (direction: "prev" | "next") => void
  onTabChange?: (tab: string) => void
  onSpendingLimitClick?: () => void
}

const defaultCards: CardData[] = [
  {
    id: "1",
    name: "Savings Card",
    balance: 16058.94,
    logo: "/apex-logo.png",
    cardType: "/mastercard.png",
    status: "Active"
  }
]

const defaultTabs = ["Daily", "Weekly", "Monthly"]

const defaultSpendingLimit: SpendingLimit = {
  current: 1500,
  limit: 2000,
  period: "week",
  percentage: 75
}

export function MyCardsWidget({
  title = "My Cards",
  cards = defaultCards,
  tabs = defaultTabs,
  spendingLimit = defaultSpendingLimit,
  onAddCard,
  onCardChange,
  onTabChange,
  onSpendingLimitClick
}: MyCardsWidgetProps) {
  const [activeTab, setActiveTab] = useState(tabs[0] || "Weekly")
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  
  const currentCard = cards[currentCardIndex] || cards[0]

  return (
    <Card className="p-4 px-6 shadow-2xs">
  
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <button 
          onClick={onAddCard}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-sm hover:bg-gray-200 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Card
        </button>
      </div>

     
      <div className="flex flex-col gap-6 h-full border border-gray-200 border-solid rounded-2xl p-4 relative overflow-hidden mt-3">
        
          <div className="absolute -top-20 right-10 w-32 h-32 opacity-100">
            <svg width="168" height="159" viewBox="0 0 48 129" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M129.193 -79.5H288.862C296.814 -79.4998 301.727 -70.8272 297.64 -64.0059L188.407 118.309C184.619 124.631 177.789 128.5 170.419 128.5H10.7504C2.79848 128.5 -2.11493 119.827 1.97205 113.006L111.205 -69.3086C114.993 -75.6307 121.823 -79.5 129.193 -79.5Z" stroke="#E1E4EA"/>
            </svg>
            
            
          </div>
          <svg className="absolute top-0 right-0" width="48" height="129" viewBox="0 0 48 129" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M129.193 -79.5H288.862C296.814 -79.4998 301.727 -70.8272 297.64 -64.0059L188.407 118.309C184.619 124.631 177.789 128.5 170.419 128.5H10.7504C2.79848 128.5 -2.11493 119.827 1.97205 113.006L111.205 -69.3086C114.993 -75.6307 121.823 -79.5 129.193 -79.5Z" stroke="#E1E4EA"/>
            </svg>

        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
            
            {currentCard.logo && (
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <Image src={currentCard.logo} alt="Card Logo" width={32} height={32} />
              </div>
            )}
            
            <Wifi className="w-6 h-6 text-gray-400 rotate-90" />
            {currentCard.status && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-gray-300 border border-solid rounded-sm">
                <CheckCircle2 className="w-4 h-4 bg-green-500 rounded-full text-white" />
                <span className="text-xs font-medium">{currentCard.status}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3">        
            {currentCard.cardType && (
              <Image src={currentCard.cardType} alt="Card Type" width={58} height={58} />
            )}
          </div>
        </div>

        
        <div className="mb-4 relative z-10">
          <div>
            <p className="text-sm text-gray-600 mb-2">{currentCard.name}</p>
            <p className="text-4xl text-gray-900">
              ${currentCard.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        
        {cards.length > 1 && (
          <div className="absolute bottom-4 right-4 flex items-center z-10">
            <button 
              onClick={() => {
                const newIndex = currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1
                setCurrentCardIndex(newIndex)
                onCardChange?.("prev")
              }}
              className="w-8 h-8 rounded-l-sm border border-gray-200 border-solid bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={() => {
                const newIndex = currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1
                setCurrentCardIndex(newIndex)
                onCardChange?.("next")
              }}
              className="w-8 h-8 border border-gray-200 border-solid bg-white rounded-r-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        )}
        
      </div>

      
      <div className="flex rounded-sm border border-gray-200 overflow-hidden bg-white mt-1">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              onTabChange?.(tab)
            }}
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

      
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
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
                strokeDashoffset={125.66 - (125.66 * spendingLimit.percentage) / 100}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-0.5">Spending Limit</p>
            <p className="text-lg font-semibold text-gray-900">
              ${spendingLimit.current.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm text-gray-500 font-normal">/ {spendingLimit.period}</span>
            </p>
          </div>
        </div>
        <button 
          onClick={onSpendingLimitClick}
          className="w-8 h-8 border border-solid bg-white rounded-sm flex items-center justify-center hover:bg-gray-100 transition-colors shrink-0"
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </Card>
  )
}
