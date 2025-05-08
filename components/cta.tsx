"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import WalletConnect from "./wallet-connect"

export default function Cta() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 md:p-12 text-center"
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500 rounded-full blur-[100px] opacity-20"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50">
                  <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Limited Time Offer
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
                    Start Trading Today
                  </span>{" "}
                  and Get 50% Off Trading Fees
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of traders who have already made the switch to the most advanced trading platform. Sign
                  up now and receive exclusive benefits.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-1/2 mx-auto">
                <WalletConnect />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
