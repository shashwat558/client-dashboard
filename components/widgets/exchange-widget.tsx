"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { RefreshCw, ArrowLeftRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export interface Currency {
  code: string
  name: string
  flag: string
  symbol: string
}

export interface ExchangeRates {
  [fromCurrency: string]: {
    [toCurrency: string]: number
  }
}

export interface ExchangeWidgetProps {
  title?: string
  currencies?: Record<string, Currency>
  exchangeRates?: ExchangeRates
  defaultFromCurrency?: string
  defaultToCurrency?: string
  defaultAmount?: number
  availableBalance?: number
  taxRate?: number
  feeRate?: number
  onExchange?: (from: string, to: string, amount: number) => void
  onCurrenciesClick?: () => void
  onFromCurrencyChange?: (currency: string) => void
  onToCurrencyChange?: (currency: string) => void
}

const defaultCurrencies: Record<string, Currency> = {
  USD: { code: "USD", name: "US Dollar", flag: "/usa-flag.png", symbol: "$" },
  EUR: { code: "EUR", name: "Euro", flag: "/eur.png", symbol: "€" },
  GBP: { code: "GBP", name: "British Pound", flag: "/gbp.png", symbol: "£" },
  JPY: { code: "JPY", name: "Japanese Yen", flag: "/jpy.png", symbol: "¥" },
  CAD: { code: "CAD", name: "Canadian Dollar", flag: "/cad.png", symbol: "C$" },
  AUD: { code: "AUD", name: "Australian Dollar", flag: "/aud.png", symbol: "A$" },
}

const defaultExchangeRates: ExchangeRates = {
  USD: { EUR: 0.94, GBP: 0.82, JPY: 149.50, CAD: 1.36, AUD: 1.52 },
  EUR: { USD: 1.06, GBP: 0.87, JPY: 159.20, CAD: 1.45, AUD: 1.62 },
  GBP: { USD: 1.22, EUR: 1.15, JPY: 183.10, CAD: 1.66, AUD: 1.86 },
}

export function ExchangeWidget({
  title = "Exchange",
  currencies = defaultCurrencies,
  exchangeRates = defaultExchangeRates,
  defaultFromCurrency = "USD",
  defaultToCurrency = "EUR",
  defaultAmount = 100,
  availableBalance = 16058.94,
  taxRate = 0.02,
  feeRate = 0.01,
  onExchange,
  onCurrenciesClick,
  onFromCurrencyChange,
  onToCurrencyChange
}: ExchangeWidgetProps) {
  const [fromCurrency, setFromCurrency] = useState(defaultFromCurrency)
  const [toCurrency, setToCurrency] = useState(defaultToCurrency)
  const [amount, setAmount] = useState(defaultAmount)

  const getExchangeRate = (from: string, to: string): number => {
    if (from === to) return 1
    return exchangeRates[from]?.[to] || 0
  }

  const exchangeRate = getExchangeRate(fromCurrency, toCurrency)
  const taxAmount = amount * taxRate
  const feeAmount = amount * feeRate
  const convertedAmount = (amount - taxAmount - feeAmount) * exchangeRate

  const swapCurrencies = () => {
    const newFrom = toCurrency
    const newTo = fromCurrency
    setFromCurrency(newFrom)
    setToCurrency(newTo)
    onFromCurrencyChange?.(newFrom)
    onToCurrencyChange?.(newTo)
  }

  const fromCurrencyData = currencies[fromCurrency]
  const toCurrencyData = currencies[toCurrency]

  const handleExchange = () => {
    onExchange?.(fromCurrency, toCurrency, amount)
  }

  return (
    <Card className="p-6 shadow-2xs">
      <div className="flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-gray-600" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <button 
          onClick={onCurrenciesClick}
          className="ml-auto text-sm text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-sm p-1 px-2"
        >
          Currencies
        </button>
      </div>

      <div className="space-y-4 border border-gray-200 rounded-lg">
        <div className="flex w-full justify-between items-center gap-3 border-b border-gray-200">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <Image 
                src={fromCurrencyData.flag} 
                alt={`${fromCurrencyData.name} Flag`} 
                width={16} 
                height={16} 
              />
            </div>
            <span className="text-sm font-medium text-gray-900">{fromCurrency}</span>
            <ChevronDown className="w-6 h-6 text-gray-600 p-1 border-gray-200 border rounded-full shadow-sm" />
          </button>

          <div className="h-7 w-px bg-gray-200" />

          <button 
            onClick={swapCurrencies}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeftRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="h-7 w-px bg-gray-200" />

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <Image 
                src={toCurrencyData.flag} 
                alt={`${toCurrencyData.name} Flag`} 
                width={16} 
                height={16} 
              />
            </div>
            <span className="text-sm font-medium text-gray-900">{toCurrency}</span>
            <ChevronDown className="w-6 h-6 text-gray-600 p-1 border-gray-200 border rounded-full shadow-sm" />
          </button>
        </div>

        <div className="text-center py-3">
          <p className="text-4xl text-gray-900 mb-2">
            {fromCurrencyData.symbol}{amount.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">
            Available : <span className="font-medium text-gray-900">
              {fromCurrencyData.symbol}{availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </p>
        </div>

        <div className="text-center text-sm text-gray-600 bg-gray-100 p-2 rounded-b-lg border-t border-gray-200">
          1 {fromCurrency} = <span className="font-medium text-gray-800">
            {exchangeRate.toFixed(2)} {toCurrency}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax ({(taxRate * 100).toFixed(0)}%)</span>
          <span className="text-gray-900 font-medium">
            {fromCurrencyData.symbol}{taxAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Exchange fee ({(feeRate * 100).toFixed(0)}%)</span>
          <span className="text-gray-900 font-medium">
            {fromCurrencyData.symbol}{feeAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total amount</span>
          <span className="text-gray-900 font-medium">
            {toCurrencyData.symbol}{convertedAmount.toFixed(1)}
          </span>
        </div>
      </div>

      <Button 
        onClick={handleExchange}
        className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Exchange
      </Button>
    </Card>
  )
}