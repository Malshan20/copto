"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    const colors = ["#9333ea", "#ec4899", "#06b6d4"]

    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2,
        )
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50">
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                The Future of Web3 Trading
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block">Trade Smarter with</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
                Next-Gen Crypto
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Experience lightning-fast trades, minimal fees, and advanced analytics on our decentralized trading
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/trading">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 shadow-glow-purple">
                  Start Trading
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 border-purple-500/50 hover:bg-purple-900/20"
                >
                  Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex -space-x-2">
                {[1, 2].map((i) => (
                  <img
                    key={i}
                    src={`/${i}.svg`}
                    alt={`Image ${i}`}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-black"
                  />
                ))}
              </div>
              <span>+10k traders joined this month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-6 shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Trading Dashboard
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/50 rounded-xl p-4 border border-purple-500/20">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-gray-300">BTC/USD</div>
                      <div className="text-green-400">+5.34%</div>
                    </div>
                    <div className="h-32 relative overflow-hidden">
                      <svg viewBox="0 0 400 100" className="w-full h-full">
                        <path
                          d="M0,50 C50,30 100,70 150,50 C200,30 250,60 300,40 C350,20 400,50 400,50"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9333ea" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/50 rounded-xl p-4 border border-purple-500/20">
                      <div className="text-sm text-gray-400">Volume 24h</div>
                      <div className="text-xl font-bold text-white">$1.2B</div>
                      <div className="text-green-400 text-sm">+12.5%</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-4 border border-purple-500/20">
                      <div className="text-sm text-gray-400">Market Cap</div>
                      <div className="text-xl font-bold text-white">$42.5B</div>
                      <div className="text-green-400 text-sm">+3.2%</div>
                    </div>
                  </div>

                  <div className="bg-black/50 rounded-xl p-4 border border-purple-500/20">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-400">Your Portfolio</div>
                      <div className="text-sm text-purple-400">View All</div>
                    </div>
                    <div className="mt-2 space-y-2">
                      {[
                        { coin: "BTC", amount: "1.2", value: "$45,230", change: "+2.4%" },
                        { coin: "ETH", amount: "15.8", value: "$32,180", change: "+5.1%" },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                            <div>
                              <div className="text-white">{item.coin}</div>
                              <div className="text-xs text-gray-400">{item.amount}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white">{item.value}</div>
                            <div className="text-xs text-green-400">{item.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
