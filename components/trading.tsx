"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Trading() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const canvas = chartRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Generate random data points
    const dataPoints = Array.from({ length: 100 }, (_, i) => ({
      x: i,
      y: 150 + Math.random() * 100 - 50 + Math.sin(i / 10) * 30,
    }))

    // Draw chart
    const drawChart = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(107, 33, 168, 0.1)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i < canvas.height; i += 30) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      // Draw line chart
      ctx.beginPath()
      ctx.moveTo(0, dataPoints[0].y)

      for (let i = 1; i < dataPoints.length; i++) {
        const x = (i / dataPoints.length) * canvas.width
        const y = dataPoints[i].y
        ctx.lineTo(x, y)
      }

      // Create gradient for line
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "#9333ea")
      gradient.addColorStop(1, "#ec4899")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 3
      ctx.stroke()

      // Create gradient for area under the line
      const areaGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      areaGradient.addColorStop(0, "rgba(147, 51, 234, 0.3)")
      areaGradient.addColorStop(1, "rgba(236, 72, 153, 0)")

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fillStyle = areaGradient
      ctx.fill()

      // Draw glow effect
      ctx.shadowColor = "#9333ea"
      ctx.shadowBlur = 10
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, dataPoints[0].y)

      for (let i = 1; i < dataPoints.length; i++) {
        const x = (i / dataPoints.length) * canvas.width
        const y = dataPoints[i].y
        ctx.lineTo(x, y)
      }

      ctx.stroke()
      ctx.shadowBlur = 0
    }

    drawChart()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawChart()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="trading" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Advanced Trading View
                  </div>
                  <div className="flex space-x-4">
                    <span className="text-sm text-gray-400">1H</span>
                    <span className="text-sm text-white">1D</span>
                    <span className="text-sm text-gray-400">1W</span>
                    <span className="text-sm text-gray-400">1M</span>
                  </div>
                </div>

                <div className="h-64 mb-6 relative">
                  <canvas ref={chartRef} className="w-full h-full"></canvas>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Current Price", value: "$48,652.23", change: "+5.34%" },
                    { label: "24h Volume", value: "$1.2B", change: "+12.5%" },
                    { label: "Market Cap", value: "$42.5B", change: "+3.2%" },
                  ].map((item, index) => (
                    <div key={index} className="bg-black/50 rounded-xl p-3 border border-purple-500/20">
                      <div className="text-xs text-gray-400">{item.label}</div>
                      <div className="text-lg font-bold text-white">{item.value}</div>
                      <div className="text-green-400 text-xs">{item.change}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl">
                    Buy
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl">
                    Sell
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50">
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Next-Gen Trading
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
                Advanced Trading
              </span>{" "}
              with Real-Time Analytics
            </h2>
            <p className="text-gray-300 text-lg">
              Our platform provides professional-grade trading tools with real-time market data, advanced charting, and
              AI-powered insights to help you make informed decisions.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time market data and price alerts",
                "Advanced charting with technical indicators",
                "AI-powered trading signals and insights",
                "Customizable trading dashboard",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <div>
              <Link href="/trading">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 shadow-glow-purple">
                  Start Trading Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
