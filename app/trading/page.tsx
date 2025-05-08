import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TradingInterface from "@/components/trading-interface"
import TradingHero from "@/components/trading-hero"

export const metadata: Metadata = {
  title: "Advanced Trading | Trady",
  description:
    "Professional-grade crypto trading platform with advanced charts, order types, and real-time market data.",
}

export default function TradingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <TradingHero />
        <TradingInterface />
      </main>
      <Footer />
    </>
  )
}
