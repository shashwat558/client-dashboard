"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { RefreshCw, ArrowLeftRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Separator } from "../ui/separator"


export function ExchangeWidget() {
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")

  return (
    <Card className="p-6 shadow-2xs">
      <div className="flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-gray-600" />
        <h3 className="font-semibold text-gray-900">Exchange</h3>
        <button className="ml-auto text-sm text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-sm p-1 px-2">Currencies</button>
      </div>

      <div className="space-y-4 border border-gray-200 rounded-lg ">
        <div className="flex w-full justify-between items-center gap-3 border-b border-gray-200">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <Image src="/usa-flag.png" alt="US Flag" width={16} height={16} />
            </div>

            <span className="text-sm font-medium text-gray-900">{fromCurrency}</span>
            <ChevronDown className="w-6 h-6 text-gray-600 p-1 border-gray-200 border rounded-full shadow-sm" />
            
          </button>
         
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeftRight className="w-6 h-6 text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <Image src="/eur.png" alt="Euro Flag" width={16} height={16} />
            </div>
            <span className="text-sm font-medium text-gray-900">{toCurrency}</span>
            <ChevronDown className="w-6 h-6 text-gray-600 p-1 border-gray-200 border rounded-full shadow-sm" />
          </button>
        </div>

        <div className="text-center py-3">
          <p className="text-4xl text-gray-900 mb-2">$100.00</p>
          <p className="text-sm text-gray-600">
            Available : <span className="font-medium text-gray-900">$16,058.94</span>
          </p>
        </div>

        <div className="text-center text-sm text-gray-600 bg-gray-100 p-2 rounded-b-lg border-t border-gray-200">
          1 USD = <span className="font-medium text-gray-800">0.94 EUR</span>
        </div>
      </div>

      <div className="space-y-2 ">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (2%)</span>
          <span className="text-gray-900 font-medium">$2.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Exchange fee (1%)</span>
          <span className="text-gray-900 font-medium">$1.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total amount</span>
          <span className="text-gray-900 font-medium">€90.7</span>
        </div>
      </div>

      <Button className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50">
        <RefreshCw className="w-4 h-4 mr-2" />
        Exchange
      </Button>
    </Card>
  )
}
