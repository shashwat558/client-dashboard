"use client"

import { Card } from "@/components/ui/card"
import { ArrowDown } from "lucide-react"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from "recharts"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "blue",
  },
} satisfies ChartConfig

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

export function TotalExpensesWidget(

) {
  return (
    <Card className="p-3 px-4 shadow-2xs">
      <div className="flex items-center justify-between">
        <button className="p-3 border border-gray-300 rounded-full transition-colors">
          <ArrowDown className="w-5 h-5 text-gray-600 rotate-45" />
        </button>

        <div className="w-[240px] h-[100px]">
          <ChartContainer config={chartConfig}>
            <LineChart
              data={chartData}
              margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Total Expenses</p>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-normal text-gray-900">$6,240.28</p>
          <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-lg">
            -2%
          </span>
        </div>
      </div>
    </Card>
  )
}
