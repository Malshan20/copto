"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function FeaturesComparison() {
  const features = [
    {
      category: "Trading Features",
      items: [
        { name: "Advanced Charting", copto: true, competitor1: true, competitor2: false },
        { name: "Multiple Order Types", copto: true, competitor1: true, competitor2: true },
        { name: "Copy Trading", copto: true, competitor1: false, competitor2: false },
        { name: "AI Trading Signals", copto: true, competitor1: false, competitor2: false },
        { name: "Multi-Chain Support", copto: true, competitor1: false, competitor2: true },
      ],
    },
    {
      category: "Platform",
      items: [
        { name: "Mobile App", copto: true, competitor1: true, competitor2: true },
        { name: "API Access", copto: true, competitor1: true, competitor2: false },
        { name: "Non-Custodial", copto: true, competitor1: false, competitor2: true },
        { name: "Institutional Tools", copto: true, competitor1: true, competitor2: false },
      ],
    },
    {
      category: "Fees & Limits",
      items: [
        { name: "Low Trading Fees", copto: true, competitor1: false, competitor2: false },
        { name: "No Withdrawal Limits", copto: true, competitor1: false, competitor2: false },
        { name: "Volume Discounts", copto: true, competitor1: true, competitor2: false },
      ],
    },
    {
      category: "Support & Security",
      items: [
        { name: "24/7 Support", copto: true, competitor1: true, competitor2: false },
        { name: "Cold Storage", copto: true, competitor1: true, competitor2: true },
        { name: "Insurance Fund", copto: true, competitor1: true, competitor2: false },
        { name: "Two-Factor Auth", copto: true, competitor1: true, competitor2: true },
      ],
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute -top-20 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Competitive Edge
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              How We Compare
            </span>{" "}
            to Other Platforms
          </h2>
          <p className="text-gray-300 text-lg">
            See how Copto stacks up against the competition with our comprehensive feature comparison.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 w-1/4"></th>
                <th className="text-center py-4 px-4 w-1/4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-2">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Copto
                    </span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 w-1/4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <span className="text-white font-bold">C1</span>
                    </div>
                    <span className="text-xl font-bold text-gray-400">Competitor 1</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 w-1/4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <span className="text-white font-bold">C2</span>
                    </div>
                    <span className="text-xl font-bold text-gray-400">Competitor 2</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <>
                  <tr key={`category-${categoryIndex}`} className="bg-black/40">
                    <td colSpan={4} className="py-3 px-4 font-bold text-lg border-t border-b border-purple-500/20">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIndex) => (
                    <tr key={`item-${categoryIndex}-${itemIndex}`} className="border-b border-purple-500/10">
                      <td className="py-3 px-4">{item.name}</td>
                      <td className="py-3 px-4 text-center">
                        {item.copto ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                              <X className="h-4 w-4 text-gray-500" />
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {item.competitor1 ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                              <X className="h-4 w-4 text-gray-500" />
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {item.competitor2 ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                              <X className="h-4 w-4 text-gray-500" />
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
