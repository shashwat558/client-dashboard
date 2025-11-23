"use client"

import { Card } from "@/components/ui/card"
import { Menu, MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const subscriptions = [
  {
    name: "Salary Deposit",
    price: "$7.99",
    period: "/month",
    status: "Paid",
    statusBg: "bg-green-100",
    statusText: "text-green-400",
    
    icon: "spotify",
  },
  {
    name: "Youtube Music",
    price: "$79.99",
    period: "/year",
    status: "Expiring",
    statusBg: "bg-gray-100",
    statusText: "text-gray-600",
   
    icon: "youtube",
  },
  {
    name: "Prime Video",
    price: "$9.99",
    period: "/month",
    status: "Paused",
    statusBg: "bg-orange-100",
    statusText: "text-orange-400",

    icon: "prime",
  },
]

export function MySubscriptionsWidget() {
  return (
    <Card className="p-4 px-6 shadow-2xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2 21H4.80002C4.56133 21 4.33241 20.9052 4.16363 20.7364C3.99485 20.5676 3.90002 20.3387 3.90002 20.1V3.9C3.90002 3.66131 3.99485 3.43239 4.16363 3.2636C4.33241 3.09482 4.56133 3 4.80002 3H19.2C19.4387 3 19.6676 3.09482 19.8364 3.2636C20.0052 3.43239 20.1 3.66131 20.1 3.9V20.1C20.1 20.3387 20.0052 20.5676 19.8364 20.7364C19.6676 20.9052 19.4387 21 19.2 21ZM18.3 19.2V4.8H5.70002V19.2H18.3ZM8.40002 7.5H15.6V9.3H8.40002V7.5ZM8.40002 11.1H15.6V12.9H8.40002V11.1ZM8.40002 14.7H15.6V16.5H8.40002V14.7Z" fill="#525866"/>
            </svg>

          <h3 className="text-lg text-gray-900">My Subscriptions</h3>
        </div>
        <button className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors shadow-xs">
          See All
        </button>
      </div>
      <div className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0">
          <Image src="/image.png" alt="Apple Music" width={100} height={100} />
        </div>

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <Image src="/apple-music.png" alt="Apple Music" width={100} height={100} />
          </div>
          
          <div className="flex-1">
            <h4 className="text-base font-semibold text-gray-900 mb-1">50% discount on Apple Music</h4>
            <p className="text-sm text-gray-600 mb-2">For only $4.99 per month! <span className="text-sm text-gray-700 underline hover:text-gray-900">Learn More</span></p>
            
          </div>
        </div>
      </div>

      <div className="space-y-0">
        {subscriptions.map((subscription, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 py-3 hover:bg-gray-50 transition-colors">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 p-[6px] border border-gray-200")}>
                {subscription.icon === "spotify" && <SpotifyIcon className="w-5 h-5 text-white" />}
                {subscription.icon === "youtube" && <YoutubeIcon className="w-5 h-5 text-white" />}
                {subscription.icon === "prime" && <PrimeVideoIcon className="w-5 h-5 text-white" />}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-medium text-gray-500">{subscription.name}</p>
                <p className="text-sm text-gray-900">
                  {subscription.price}{" "}<span className="text-gray-400">{subscription.period}</span>
                </p>
              </div>
              
              <span className={cn("px-3 py-1 rounded-full text-xs font-medium", subscription.statusBg, subscription.statusText)}>
                {subscription.status}
              </span>
              
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            {index < subscriptions.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </Card>
  )
}



function SpotifyIcon({ className }: { className?: string }) {
  return (
    <Image src="/spotify.png" alt="Spotify" width={70} height={70} />
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <Image src="/youtube.png" alt="Youtube" width={70} height={70} />
  )
}

function PrimeVideoIcon({ className }: { className?: string }) {
  return (
    <Image src="/amazon.png" alt="Prime Video" width={70} height={70} />
  )
}
