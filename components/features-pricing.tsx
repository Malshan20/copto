"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export default function FeaturesPricing() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners and casual traders",
      price: "0",
      features: [
        "Standard trading interface",
        "Basic charting tools",
        "Market and limit orders",
        "Standard market data",
        "Email support",
        "0.2% trading fee",
        "Single device login",
      ],
      notIncluded: [
        "Advanced order types",
        "Premium indicators",
        "Copy trading",
        "API access",
        "Priority support",
      ],
      cta: "Get Started",
      popular: false,
      color: "from-gray-600 to-gray-500",
    },
    {
      name: "Pro",
      description: "For active traders seeking advanced tools",
      price: "19",
      features: [
        "Advanced trading interface",
        "Professional charting package",
        "All order types",
        "Real-time market data",
        "Copy trading",
        "0.1% trading fee",
        "Multi-device login",
        "API access",
        "Priority support",
      ],
      notIncluded: [
        "Custom indicators",
        "Institutional data feeds",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Enterprise",
      description: "For professional traders and institutions",
      price: "99",
      features: [
        "Institutional trading interface",
        "Custom indicators and strategies",
        "Advanced algorithmic trading",
        "Institutional data feeds",
        "Dedicated account manager",
        "0.05% trading fee",
        "Unlimited API access",
        "White-glove onboarding",
        "Custom reporting",
        "SLA guarantees",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
      color: "from-cyan-600 to-blue-600",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20"></div>

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
            <span>Pricing Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              Transparent Pricing
            </span>{" "}
            for Every Trading Level
          </h2>
          <p className="text-gray-300 text-lg">
            Choose the plan that fits your trading style and goals. All plans include our core trading features with no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`h-full relative ${plan.popular ? "mt-4" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl blur-sm"></div>
                <div className={`relative h-full bg-black/60 backdrop-blur-sm border ${plan.popular ? "border-purple-500/50" : "border-purple-500/20"} rounded-2xl p-6 flex flex-col`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold mr-2">$</span>
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  
                  <div className="mb-8 flex-grow">
                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-500">
                          <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    className={`w-full py-6 bg-gradient-to-r ${plan.color} ${plan.popular ? "shadow-glow-purple" : ""}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
