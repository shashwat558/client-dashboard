"use client"

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
  return (
    <div className={`flex gap-3 h-screen ${inter.className} bg-white`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <MyCardsWidget />
              <RecentTransactionsWidget />
            </div>
            <div className="lg:col-span-1 space-y-6">
              <SpendingSummaryWidget />
              <MySubscriptionsWidget />
            </div>
            <div className="lg:col-span-1 space-y-6">
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
