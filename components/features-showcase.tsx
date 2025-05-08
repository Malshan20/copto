"use client"

import { motion } from "framer-motion"
import {
  BarChart2,
  Shield,
  Zap,
  Wallet,
  Globe,
  Users,
  TrendingUp,
  Lock,
  Smartphone,
  Clock,
  Award,
  BookOpen,
} from "lucide-react"

export default function FeaturesShowcase() {
  const features = [
    {
      icon: <BarChart2 className="h-10 w-10" />,
      title: "Advanced Charts",
      description: "Professional-grade charting with multiple timeframes, indicators, and drawing tools.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance infrastructure.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Ultra Secure",
      description: "Enterprise-grade security with multi-signature wallets and cold storage.",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: <Wallet className="h-10 w-10" />,
      title: "Low Fees",
      description: "Competitive fee structure with volume-based discounts for active traders.",
      color: "from-green-500 to-cyan-500",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Multi-Chain Support",
      description: "Trade across multiple blockchains from a single unified interface.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Copy Trading",
      description: "Automatically copy the trades of successful traders and share in their profits.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "AI Insights",
      description: "AI-powered market analysis and trading signals to optimize your strategy.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Non-Custodial",
      description: "Maintain full control of your assets with our non-custodial trading solution.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Trading",
      description: "Trade on the go with our fully-featured mobile app for iOS and Android.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any questions or issues.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Rewards Program",
      description: "Earn rewards for trading, referring friends, and participating in our ecosystem.",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Educational Resources",
      description: "Comprehensive guides, tutorials, and webinars to help you become a better trader.",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="features-showcase" className="py-20 relative">
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
              Why Choose Copto
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              Powerful Features
            </span>{" "}
            for Every Trader
          </h2>
          <p className="text-gray-300 text-lg">
            Our platform combines cutting-edge technology with intuitive design to provide the ultimate trading
            experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-purple-500/40 group-hover:translate-y-[-5px]">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 w-fit`}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
