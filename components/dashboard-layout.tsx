"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MyCardsWidget } from "@/components/widgets/my-cards-widget"
import { SpendingSummaryWidget } from "@/components/widgets/spending-summary-widget"
import { TotalExpensesWidget } from "@/components/widgets/total-expenses-widget"
import { ExchangeWidget } from "@/components/widgets/exchange-widget"
import { RecentTransactionsWidget } from "@/components/widgets/recent-transactions-widget"
import { MySubscriptionsWidget } from "@/components/widgets/my-subscriptions-widget"
import { CreditScoreWidget } from "@/components/widgets/credit-score-widget"
import { Inter } from "next/font/google"

const inter = Inter({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
 })

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [shouldToggle, setShouldToggle] = useState(true) // Start with true to avoid flash

  useEffect(() => {
    const checkWidth = () => {
      const needsToggle = window.innerWidth < 1540
      setShouldToggle(needsToggle)
      // Auto-open sidebar when resizing above 1540px
      if (!needsToggle) {
        setSidebarOpen(false) // Keep sidebar state clean, but it will always show via CSS
      }
    }
    // Check immediately on mount
    if (typeof window !== 'undefined') {
      checkWidth()
    }
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <div className={`flex gap-3 h-screen ${inter.className} bg-white relative overflow-hidden`}>
      {sidebarOpen && shouldToggle && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar isOpen={shouldToggle ? sidebarOpen : true} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} shouldShowMenu={shouldToggle} />
        <main className="flex-1 overflow-y-auto p-3 lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="md:col-span-1 space-y-4 lg:space-y-6">
              <MyCardsWidget />
              <RecentTransactionsWidget />
            </div>
            <div className="md:col-span-1 space-y-4 lg:space-y-6">
              <SpendingSummaryWidget />
              <MySubscriptionsWidget />
            </div>
            <div className="md:col-span-2 lg:col-span-1 space-y-4 lg:space-y-6">
              <TotalExpensesWidget />
              <ExchangeWidget />
              <CreditScoreWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
