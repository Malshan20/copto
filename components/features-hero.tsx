"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function FeaturesHero() {
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById("features-showcase")
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] opacity-20"></div>

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Platform Features
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              Revolutionary Tools
            </span>{" "}
            for Modern Traders
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our cutting-edge platform empowers traders with advanced tools, real-time data, and seamless
            execution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/trading">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 shadow-glow-purple">
                Start Trading Now
              </Button>
            </Link>
            <Button
              onClick={scrollToFeatures}
              variant="outline"
              className="rounded-full px-8 py-6 border-purple-500/50 hover:bg-purple-900/20"
            >
              Explore Features
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            onClick={scrollToFeatures}
            className="cursor-pointer mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-purple-900/30 border border-purple-500/30"
          >
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
