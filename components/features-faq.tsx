"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FeaturesFaq() {
  const faqs = [
    {
      question: "What makes Copto different from other trading platforms?",
      answer:
        "Copto combines advanced trading tools with an intuitive interface, multi-chain support, and innovative features like copy trading and AI-powered insights. Our platform is designed for both beginners and professional traders, with industry-leading security and competitive fees.",
    },
    {
      question: "How secure is the Copto platform?",
      answer:
        "Security is our top priority. We implement enterprise-grade security measures including multi-signature wallets, cold storage for 95% of assets, regular security audits, and comprehensive insurance coverage. Our platform also offers advanced user security features like two-factor authentication, biometric verification, and customizable withdrawal limits.",
    },
    {
      question: "What are the trading fees on Copto?",
      answer:
        "Copto offers competitive trading fees with volume-based discounts for active traders. We also provide special rates for market makers. There are no hidden fees, and all fee structures are transparently displayed in your account settings.",
    },
    {
      question: "How does copy trading work on Copto?",
      answer:
        "Copy trading allows you to automatically replicate the trades of successful traders. You can browse our leaderboard of verified traders, view their performance metrics and trading style, and choose who to follow. You set the allocation amount and risk parameters, and our system automatically executes trades in your account proportional to your settings.",
    },
    {
      question: "Is Copto available in my country?",
      answer:
        "Copto is available in over 180 countries worldwide. However, due to regulatory requirements, some features may be restricted in certain jurisdictions. You can check the full list of supported countries and available features on our Regulatory Compliance page or contact our support team for specific information about your region.",
    },
    {
      question: "How do I get started with Copto?",
      answer:
        "Getting started is simple. Create an account, complete the verification process, deposit funds using cryptocurrency or fiat payment methods, and you're ready to trade. New users can access our interactive tutorial, demo trading environment, and educational resources to help you get familiar with the platform before trading with real funds.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              Common Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              Frequently Asked
            </span>{" "}
            Questions
          </h2>
          <p className="text-gray-300 text-lg">
            Find answers to the most common questions about our platform and services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div
                className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30"
                    : "bg-black/60 border border-purple-500/20 hover:border-purple-500/30"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div className="ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-purple-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {openIndex === index && <div className="mt-4 text-gray-300">{faq.answer}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
