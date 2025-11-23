"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronRight, LucideIcon, Building2, TrendingUp, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export interface Transaction {
  id?: string
  icon?: LucideIcon | string
  iconBg?: string
  title: string
  description: string
  amount: string | number
  date: string
  onClick?: () => void
}

export interface RecentTransactionsWidgetProps {
  title?: string
  transactions?: Transaction[]
  tabs?: string[]
  defaultTab?: string
  onSeeAll?: () => void
  onTransactionClick?: (transaction: Transaction) => void
  onTabChange?: (tab: string) => void
}

const defaultTransactions: Transaction[] = [
  {
    id: "1",
    icon: "Building2",
    iconBg: "",
    title: "Salary Deposit",
    description: "Monthly salary from Apex...",
    amount: "$3,500.00",
    date: "Sep 18"
  },
  {
    id: "2",
    icon: "TrendingUp",
    iconBg: "",
    title: "Stock Dividend",
    description: "Payment from stock investm...",
    amount: "$846.14",
    date: "Sep 18",
  },
  {
    id: "3",
    icon: "Home",
    iconBg: "bg-green-100",
    title: "Rental Income",
    description: "Rental payment from Mr. Du...",
    amount: "$100.00",
    date: "Sep 17",
  },
  {
    id: "4",
    icon: "amazon",
    iconBg: "",
    title: "Refund from Amazon",
    description: "Refund of Order No #124235",
    amount: "$36.24",
    date: "Sep 15",
  },
]

const defaultTabs = ["Incoming", "Outgoing", "Pending"]

export function RecentTransactionsWidget({
  title = "Recent Transactions",
  transactions = defaultTransactions,
  tabs = defaultTabs,
  defaultTab = "Incoming",
  onSeeAll,
  onTransactionClick,
  onTabChange
}: RecentTransactionsWidgetProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <Card className="p-4 px-6 shadow-2xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.92631 4.56693C9.69673 1.47667 15.2688 1.69171 18.7887 5.21205C22.5371 8.96086 22.5371 15.0396 18.7887 18.7884C15.0404 22.5372 8.96242 22.5372 5.21408 18.7884C4.06379 17.6395 3.22432 16.2171 2.7745 14.6548C2.32468 13.0924 2.27928 11.4413 2.64256 9.85654L2.71647 9.55606L4.57288 10.0457C4.11266 11.795 4.28462 13.6507 5.05846 15.2857C5.83231 16.9207 7.15836 18.2301 8.80292 18.983C10.4475 19.7359 12.305 19.8841 14.0481 19.4014C15.7912 18.9188 17.3081 17.8363 18.3313 16.3446C19.3545 14.853 19.8185 13.0481 19.6413 11.2478C19.4642 9.44761 18.6575 7.76769 17.3632 6.50412C16.0689 5.24055 14.3702 4.47444 12.5665 4.34081C10.7627 4.20718 8.96971 4.7146 7.5034 5.77365L7.29127 5.93301L8.26747 6.90933L3.85585 7.92694L4.87332 3.51476L5.92535 4.56693H5.92631ZM12.9613 6.24021V8.16022H15.361V10.0802H10.0816C9.96171 10.08 9.84604 10.1247 9.75741 10.2055C9.66878 10.2863 9.61362 10.3974 9.60278 10.5169C9.59195 10.6363 9.62622 10.7555 9.69886 10.8509C9.7715 10.9464 9.87724 11.0112 9.99526 11.0325L10.0816 11.0402H13.9212C14.5576 11.0402 15.168 11.2931 15.618 11.7432C16.0681 12.1933 16.3209 12.8037 16.3209 13.4402C16.3209 14.0768 16.0681 14.6872 15.618 15.1373C15.168 15.5874 14.5576 15.8402 13.9212 15.8402H12.9613V17.7603H11.0415V15.8402H8.64182V13.9202H13.9212C14.0411 13.9205 14.1568 13.8758 14.2454 13.795C14.334 13.7141 14.3892 13.6031 14.4 13.4836C14.4109 13.3642 14.3766 13.245 14.304 13.1495C14.2313 13.0541 14.1256 12.9893 14.0076 12.9679L13.9212 12.9602H10.0816C9.4452 12.9602 8.83483 12.7074 8.3848 12.2573C7.93476 11.8072 7.68194 11.1967 7.68194 10.5602C7.68194 9.9237 7.93476 9.31325 8.3848 8.86316C8.83483 8.41308 9.4452 8.16022 10.0816 8.16022H11.0415V6.24021H12.9613Z" fill="#525866"/>
              </svg>

          </div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <button 
          onClick={onSeeAll}
          className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          See All
        </button>
      </div>
      <div className="flex gap-2 bg-gray-100 rounded-md p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              onTabChange?.(tab)
            }}
            className={cn(
              "flex-1 py-1 rounded-md text-sm font-medium transition-colors cursor-pointer",
              activeTab === tab
                ? "bg-white text-gray-900 border border-gray-200 shadow-sm"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {transactions.map((transaction, index) => {
          const IconComponent = typeof transaction.icon === 'string' 
            ? null 
            : transaction.icon
          
          return (
            <div
              key={transaction.id || index}
              onClick={() => {
                transaction.onClick?.()
                onTransactionClick?.(transaction)
              }}
              className="flex items-center gap-3 p-2 hover:px-4 transition-all duration-300 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", transaction.iconBg)}>
                {transaction.icon === "amazon" ? (
                  <AmazonIcon className={cn("w-5 h-5")} />
                ) : IconComponent ? (
                  <IconComponent className={cn("w-5 h-5")} />
                ) : null}
              </div>
            
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 truncate">{transaction.title}</p>
                <p className="text-xs text-gray-500 truncate">{transaction.description}</p>
              </div>
              <div className="text-right shrink-0 mr-2">
                <p className="text-sm text-gray-900">
                  {typeof transaction.amount === 'number' 
                    ? `$${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    : transaction.amount}
                </p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-700 shrink-0" />
            </div>
          )
        })}
      </div>
    </Card>
  )
}

function DollarSignArrowsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12" strokeLinecap="round" />
      <path d="M10 10h4M10 14h4" strokeLinecap="round" />
      <path d="M8 9a4 4 0 0 1 8 0" fill="none" />
      <path d="M16 15a4 4 0 0 1-8 0" fill="none" />
      <path d="M8 9l1.5-1.5M16 9l-1.5-1.5" strokeLinecap="round" />
      <path d="M16 15l1.5 1.5M8 15l-1.5 1.5" strokeLinecap="round" />
    </svg>
  )
}

function AmazonIcon({ className }: { className?: string }) {
  return (
    <Image src="/amazon1.png" alt="Amazon" width={24} height={24} />
  )
}
