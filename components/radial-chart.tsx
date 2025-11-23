"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [{ desktop: 1260, mobile: 570, tablet: 300 }]

const chartConfig = {

  desktop: {
    label: "Desktop",
    color: "hsl(220 100% 50%)", 
  },
  mobile: {
    label: "Mobile",
    color: "hsl(210 40% 90%)", 
  },
  tablet: {
    label: "Tablet",
    color: "hsl(210 100% 70%)"
  },
} satisfies ChartConfig

export function ChartRadialStacked() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    <div className="w-full flex items-center justify-center">
      <ChartContainer
        config={chartConfig}
        className="w-[310px] h-[310px]"
      >
        <RadialBarChart
          data={chartData}
          endAngle={180}
          innerRadius={140}
          outerRadius={210}
        >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              
            </PolarRadiusAxis>
            
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)" 
              stackId="a"
              cornerRadius={1}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="tablet"
              fill="var(--color-tablet)" 
              stackId="a"
              cornerRadius={1}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={1}
              fill="var(--color-desktop)" 
              className="stroke-transparent stroke-2"
            />
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}