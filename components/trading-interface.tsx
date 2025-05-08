"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, BarChart2, Activity, BookOpen, Settings, CheckCircle, Star, StarOff } from "lucide-react"

// Mock data for the trading interface
const cryptoPairs = [
  { symbol: "BTC/USDT", price: 48652.23, change: 5.34 },
  { symbol: "ETH/USDT", price: 3245.78, change: 3.21 },
  { symbol: "SOL/USDT", price: 142.56, change: 7.89 },
  { symbol: "BNB/USDT", price: 432.12, change: -1.23 },
  { symbol: "XRP/USDT", price: 0.5423, change: -0.45 },
  { symbol: "ADA/USDT", price: 0.4521, change: 2.34 },
  { symbol: "DOGE/USDT", price: 0.1234, change: 12.45 },
  { symbol: "DOT/USDT", price: 6.78, change: 1.23 },
  { symbol: "AVAX/USDT", price: 34.56, change: 4.56 },
  { symbol: "LINK/USDT", price: 15.67, change: 3.45 },
]

const orderBook = {
  asks: [
    { price: 48700.0, amount: 1.2345, total: 60140.65 },
    { price: 48690.0, amount: 0.5678, total: 27645.94 },
    { price: 48680.0, amount: 2.3456, total: 114192.61 },
    { price: 48670.0, amount: 1.8765, total: 91329.26 },
    { price: 48660.0, amount: 0.9876, total: 48056.02 },
    { price: 48650.0, amount: 3.4567, total: 168118.46 },
    { price: 48640.0, amount: 0.7654, total: 37229.86 },
    { price: 48630.0, amount: 1.5432, total: 75043.42 },
  ],
  bids: [
    { price: 48600.0, amount: 2.1098, total: 102536.28 },
    { price: 48590.0, amount: 1.2345, total: 59984.56 },
    { price: 48580.0, amount: 3.4567, total: 167937.39 },
    { price: 48570.0, amount: 0.8765, total: 42571.61 },
    { price: 48560.0, amount: 1.9876, total: 96517.86 },
    { price: 48550.0, amount: 0.5432, total: 26371.36 },
    { price: 48540.0, amount: 2.7654, total: 134234.76 },
    { price: 48530.0, amount: 1.3579, total: 65899.43 },
  ],
}

const tradeHistory = [
  { time: "12:45:32", price: 48652.23, amount: 0.1234, side: "buy", value: 6003.89 },
  { time: "12:45:28", price: 48650.12, amount: 0.0567, side: "sell", value: 2758.46 },
  { time: "12:45:15", price: 48655.67, amount: 0.2345, side: "buy", value: 11409.75 },
  { time: "12:44:59", price: 48648.34, amount: 0.1876, side: "buy", value: 9126.42 },
  { time: "12:44:45", price: 48645.78, amount: 0.0987, side: "sell", value: 4801.34 },
  { time: "12:44:32", price: 48660.23, amount: 0.3456, side: "buy", value: 16816.98 },
  { time: "12:44:18", price: 48642.56, amount: 0.0765, side: "sell", value: 3721.16 },
  { time: "12:44:05", price: 48639.87, amount: 0.1543, side: "buy", value: 7505.13 },
  { time: "12:43:52", price: 48635.45, amount: 0.2109, side: "sell", value: 10257.22 },
  { time: "12:43:38", price: 48630.12, amount: 0.1234, side: "buy", value: 6001.0 },
]

const openOrders = [
  {
    id: "ORD-123456",
    pair: "BTC/USDT",
    type: "limit",
    side: "buy",
    price: 48500.0,
    amount: 0.1,
    filled: "0%",
    total: 4850.0,
    time: "12:30:45",
    status: "open",
  },
  {
    id: "ORD-123457",
    pair: "ETH/USDT",
    type: "limit",
    side: "sell",
    price: 3300.0,
    amount: 1.5,
    filled: "0%",
    total: 4950.0,
    time: "12:25:30",
    status: "open",
  },
  {
    id: "ORD-123458",
    pair: "SOL/USDT",
    type: "stop",
    side: "sell",
    price: 140.0,
    amount: 10,
    filled: "0%",
    total: 1400.0,
    time: "12:15:20",
    status: "open",
  },
]

const orderHistory = [
  {
    id: "ORD-123450",
    pair: "BTC/USDT",
    type: "market",
    side: "buy",
    price: 48652.23,
    amount: 0.1,
    filled: "100%",
    total: 4865.22,
    time: "11:45:12",
    status: "filled",
  },
  {
    id: "ORD-123451",
    pair: "ETH/USDT",
    type: "limit",
    side: "sell",
    price: 3245.78,
    amount: 1.5,
    filled: "100%",
    total: 4868.67,
    time: "11:30:05",
    status: "filled",
  },
  {
    id: "ORD-123452",
    pair: "SOL/USDT",
    type: "limit",
    side: "buy",
    price: 142.56,
    amount: 10,
    filled: "100%",
    total: 1425.6,
    time: "11:15:30",
    status: "filled",
  },
  {
    id: "ORD-123453",
    pair: "BNB/USDT",
    type: "stop",
    side: "sell",
    price: 432.12,
    amount: 2,
    filled: "0%",
    total: 864.24,
    time: "10:45:22",
    status: "canceled",
  },
  {
    id: "ORD-123454",
    pair: "XRP/USDT",
    type: "market",
    side: "buy",
    price: 0.5423,
    amount: 1000,
    filled: "100%",
    total: 542.3,
    time: "10:30:15",
    status: "filled",
  },
]

const portfolio = [
  { coin: "BTC", balance: 1.2345, value: 60062.42, allocation: 45.2 },
  { coin: "ETH", balance: 15.6789, value: 50887.76, allocation: 38.3 },
  { coin: "SOL", balance: 56.7891, value: 8096.15, allocation: 6.1 },
  { coin: "BNB", balance: 2.3456, value: 1013.59, allocation: 0.8 },
  { coin: "USDT", balance: 12789.45, value: 12789.45, allocation: 9.6 },
]

export default function TradingInterface() {
  const [selectedPair, setSelectedPair] = useState(cryptoPairs[0])
  const [orderType, setOrderType] = useState("limit")
  const [buySellTab, setBuySellTab] = useState("buy")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [showPairDropdown, setShowPairDropdown] = useState(false)
  const [searchPair, setSearchPair] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])
  const chartRef = useRef<HTMLCanvasElement>(null)

  // Filter pairs based on search
  const filteredPairs = cryptoPairs.filter((pair) => pair.symbol.toLowerCase().includes(searchPair.toLowerCase()))

  // Toggle favorite status
  const toggleFavorite = (symbol: string) => {
    if (favorites.includes(symbol)) {
      setFavorites(favorites.filter((fav) => fav !== symbol))
    } else {
      setFavorites([...favorites, symbol])
    }
  }

  // Calculate total for order
  const calculateTotal = () => {
    if (!amount || !price) return "0.00"
    return (Number.parseFloat(amount) * Number.parseFloat(price)).toFixed(2)
  }

  // Handle order submission
  const handleSubmitOrder = () => {
    if (!amount || !price) return

    const orderDetails = {
      pair: selectedPair.symbol,
      type: orderType,
      side: buySellTab,
      price: Number.parseFloat(price),
      amount: Number.parseFloat(amount),
      total: Number.parseFloat(amount) * Number.parseFloat(price),
      time: new Date().toLocaleTimeString(),
    }

    // In a real app, this would send the order to an API
    console.log("Order submitted:", orderDetails)

    // Show success notification
    const notification = document.getElementById("order-notification")
    if (notification) {
      notification.classList.remove("hidden")
      setTimeout(() => {
        notification.classList.add("hidden")
      }, 3000)
    }

    // Reset form
    setAmount("")
    setPrice("")
  }

  // Draw chart
  useEffect(() => {
    if (!chartRef.current) return

    const canvas = chartRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Generate random data points for candlesticks
    const candlesticks = Array.from({ length: 50 }, (_, i) => {
      const basePrice = 48500 + Math.random() * 300
      const open = basePrice
      const close = basePrice + (Math.random() * 100 - 50)
      const high = Math.max(open, close) + Math.random() * 50
      const low = Math.min(open, close) - Math.random() * 50
      return { open, close, high, low, time: i }
    })

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

    // Draw candlesticks
    const candleWidth = (canvas.width / candlesticks.length) * 0.8
    const spacing = (canvas.width / candlesticks.length) * 0.2
    const priceRange = { min: 48400, max: 48900 }
    const scaleY = (price: number) => {
      return canvas.height - ((price - priceRange.min) / (priceRange.max - priceRange.min)) * canvas.height
    }

    candlesticks.forEach((candle, i) => {
      const x = i * (candleWidth + spacing) + spacing / 2
      const y_open = scaleY(candle.open)
      const y_close = scaleY(candle.close)
      const y_high = scaleY(candle.high)
      const y_low = scaleY(candle.low)

      // Draw wick
      ctx.beginPath()
      ctx.moveTo(x + candleWidth / 2, y_high)
      ctx.lineTo(x + candleWidth / 2, y_low)
      ctx.strokeStyle = candle.open > candle.close ? "#f43f5e" : "#10b981"
      ctx.stroke()

      // Draw body
      ctx.fillStyle = candle.open > candle.close ? "#f43f5e" : "#10b981"
      ctx.fillRect(x, Math.min(y_open, y_close), candleWidth, Math.abs(y_close - y_open))
    })

    // Draw volume bars
    ctx.globalAlpha = 0.3
    candlesticks.forEach((candle, i) => {
      const volume = Math.random() * 50
      const x = i * (candleWidth + spacing) + spacing / 2
      const height = volume
      const y = canvas.height - height

      ctx.fillStyle = candle.open > candle.close ? "#f43f5e80" : "#10b98180"
      ctx.fillRect(x, canvas.height - 50, candleWidth, -(Math.random() * 50))
    })
    ctx.globalAlpha = 1

    // Draw moving average
    const movingAverage = []
    const period = 10
    for (let i = 0; i < candlesticks.length; i++) {
      if (i < period - 1) {
        movingAverage.push(null)
      } else {
        let sum = 0
        for (let j = 0; j < period; j++) {
          sum += candlesticks[i - j].close
        }
        movingAverage.push(sum / period)
      }
    }

    ctx.beginPath()
    ctx.strokeStyle = "#9333ea"
    ctx.lineWidth = 2
    for (let i = 0; i < movingAverage.length; i++) {
      if (movingAverage[i] !== null) {
        const x = i * (candleWidth + spacing) + spacing / 2 + candleWidth / 2
        const y = scaleY(movingAverage[i] as number)
        if (i === period - 1) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
    }
    ctx.stroke()

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      // Redraw chart (simplified for this example)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [selectedPair])

  return (
    <section id="trading-interface" className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Left sidebar - Market pairs */}
          <div className="col-span-12 lg:col-span-2">
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Markets</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Star className="h-4 w-4 text-yellow-500" />
                </Button>
              </div>

              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="bg-black/50 border-purple-500/30"
                  value={searchPair}
                  onChange={(e) => setSearchPair(e.target.value)}
                />
              </div>

              <div className="space-y-1 max-h-[calc(100vh-300px)] overflow-y-auto">
                {filteredPairs.map((pair) => (
                  <div
                    key={pair.symbol}
                    className={`flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-purple-900/20 ${
                      selectedPair.symbol === pair.symbol ? "bg-purple-900/30 border border-purple-500/30" : ""
                    }`}
                    onClick={() => setSelectedPair(pair)}
                  >
                    <div className="flex items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(pair.symbol)
                        }}
                        className="mr-2"
                      >
                        {favorites.includes(pair.symbol) ? (
                          <Star className="h-4 w-4 text-yellow-500" />
                        ) : (
                          <StarOff className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                      <span>{pair.symbol}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{pair.price.toFixed(2)}</div>
                      <div className={pair.change >= 0 ? "text-green-500 text-xs" : "text-red-500 text-xs"}>
                        {pair.change >= 0 ? "+" : ""}
                        {pair.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content - Chart */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowPairDropdown(!showPairDropdown)}
                  >
                    <h3 className="text-xl font-bold mr-2">{selectedPair.symbol}</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>

                  <Badge variant={selectedPair.change >= 0 ? "success" : "danger"} className="ml-4">
                    {selectedPair.change >= 0 ? "+" : ""}
                    {selectedPair.change}%
                  </Badge>
                </div>

                <div className="text-2xl font-bold">${selectedPair.price.toFixed(2)}</div>
              </div>

              {/* Chart controls */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  {["1m", "5m", "15m", "1h", "4h", "1d", "1w"].map((timeframe) => (
                    <Button
                      key={timeframe}
                      variant={timeframe === "1h" ? "default" : "outline"}
                      size="sm"
                      className={
                        timeframe === "1h"
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "border-purple-500/30 hover:bg-purple-900/20"
                      }
                    >
                      {timeframe}
                    </Button>
                  ))}
                </div>

                <div className="flex space-x-2">
                  {[
                    { icon: <BarChart2 className="h-4 w-4" />, label: "Indicators" },
                    { icon: <Activity className="h-4 w-4" />, label: "Drawing" },
                    { icon: <Settings className="h-4 w-4" />, label: "Settings" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="border-purple-500/30 hover:bg-purple-900/20"
                    >
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-[400px] mb-4">
                <canvas ref={chartRef} className="w-full h-full"></canvas>
              </div>
            </div>

            {/* Order history and open orders */}
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
              <Tabs defaultValue="open-orders">
                <TabsList className="mb-4">
                  <TabsTrigger value="open-orders">Open Orders</TabsTrigger>
                  <TabsTrigger value="order-history">Order History</TabsTrigger>
                  <TabsTrigger value="trade-history">Trade History</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                </TabsList>

                <TabsContent value="open-orders">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-gray-400 text-xs border-b border-gray-800">
                          <th className="text-left py-2">Order ID</th>
                          <th className="text-left py-2">Pair</th>
                          <th className="text-left py-2">Type</th>
                          <th className="text-left py-2">Side</th>
                          <th className="text-right py-2">Price</th>
                          <th className="text-right py-2">Amount</th>
                          <th className="text-right py-2">Filled</th>
                          <th className="text-right py-2">Total</th>
                          <th className="text-right py-2">Time</th>
                          <th className="text-right py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {openOrders.length > 0 ? (
                          openOrders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-800 text-sm">
                              <td className="py-3">{order.id}</td>
                              <td className="py-3">{order.pair}</td>
                              <td className="py-3 capitalize">{order.type}</td>
                              <td className={`py-3 ${order.side === "buy" ? "text-green-500" : "text-red-500"}`}>
                                {order.side.toUpperCase()}
                              </td>
                              <td className="py-3 text-right">${order.price.toFixed(2)}</td>
                              <td className="py-3 text-right">{order.amount}</td>
                              <td className="py-3 text-right">{order.filled}</td>
                              <td className="py-3 text-right">${order.total.toFixed(2)}</td>
                              <td className="py-3 text-right">{order.time}</td>
                              <td className="py-3 text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                                >
                                  Cancel
                                </Button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={10} className="py-4 text-center text-gray-400">
                              No open orders
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="order-history">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-gray-400 text-xs border-b border-gray-800">
                          <th className="text-left py-2">Order ID</th>
                          <th className="text-left py-2">Pair</th>
                          <th className="text-left py-2">Type</th>
                          <th className="text-left py-2">Side</th>
                          <th className="text-right py-2">Price</th>
                          <th className="text-right py-2">Amount</th>
                          <th className="text-right py-2">Filled</th>
                          <th className="text-right py-2">Total</th>
                          <th className="text-right py-2">Time</th>
                          <th className="text-right py-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderHistory.map((order) => (
                          <tr key={order.id} className="border-b border-gray-800 text-sm">
                            <td className="py-3">{order.id}</td>
                            <td className="py-3">{order.pair}</td>
                            <td className="py-3 capitalize">{order.type}</td>
                            <td className={`py-3 ${order.side === "buy" ? "text-green-500" : "text-red-500"}`}>
                              {order.side.toUpperCase()}
                            </td>
                            <td className="py-3 text-right">${order.price.toFixed(2)}</td>
                            <td className="py-3 text-right">{order.amount}</td>
                            <td className="py-3 text-right">{order.filled}</td>
                            <td className="py-3 text-right">${order.total.toFixed(2)}</td>
                            <td className="py-3 text-right">{order.time}</td>
                            <td className="py-3 text-right">
                              <Badge
                                variant={
                                  order.status === "filled"
                                    ? "success"
                                    : order.status === "canceled"
                                      ? "danger"
                                      : "default"
                                }
                              >
                                {order.status.toUpperCase()}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="trade-history">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-gray-400 text-xs border-b border-gray-800">
                          <th className="text-left py-2">Time</th>
                          <th className="text-left py-2">Side</th>
                          <th className="text-right py-2">Price</th>
                          <th className="text-right py-2">Amount</th>
                          <th className="text-right py-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tradeHistory.map((trade, index) => (
                          <tr key={index} className="border-b border-gray-800 text-sm">
                            <td className="py-3">{trade.time}</td>
                            <td className={`py-3 ${trade.side === "buy" ? "text-green-500" : "text-red-500"}`}>
                              {trade.side.toUpperCase()}
                            </td>
                            <td className="py-3 text-right">${trade.price.toFixed(2)}</td>
                            <td className="py-3 text-right">{trade.amount}</td>
                            <td className="py-3 text-right">${trade.value.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="portfolio">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-gray-400 text-xs border-b border-gray-800">
                          <th className="text-left py-2">Coin</th>
                          <th className="text-right py-2">Balance</th>
                          <th className="text-right py-2">Value (USD)</th>
                          <th className="text-right py-2">Allocation</th>
                          <th className="text-right py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {portfolio.map((asset, index) => (
                          <tr key={index} className="border-b border-gray-800 text-sm">
                            <td className="py-3 flex items-center">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                              {asset.coin}
                            </td>
                            <td className="py-3 text-right">{asset.balance}</td>
                            <td className="py-3 text-right">${asset.value.toFixed(2)}</td>
                            <td className="py-3 text-right">
                              <div className="flex items-center justify-end">
                                <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                                  <div
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                    style={{ width: `${asset.allocation}%` }}
                                  ></div>
                                </div>
                                {asset.allocation}%
                              </div>
                            </td>
                            <td className="py-3 text-right">
                              <div className="flex justify-end space-x-2">
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Deposit
                                </Button>
                                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                                  Withdraw
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right sidebar - Order book and order form */}
          <div className="col-span-12 lg:col-span-3">
            {/* Order book */}
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Order Book</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-900/20 h-7 px-2">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-purple-500/30 hover:bg-purple-900/20 h-7 px-2">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Asks (Sell orders) */}
              <div className="mb-2">
                {orderBook.asks.map((order, index) => (
                  <div key={`ask-${index}`} className="flex justify-between text-sm py-1">
                    <div className="w-1/3 text-red-500">{order.price.toFixed(2)}</div>
                    <div className="w-1/3 text-right">{order.amount.toFixed(4)}</div>
                    <div className="w-1/3 text-right text-gray-400">{order.total.toFixed(2)}</div>
                    <div
                      className="absolute left-0 h-6 bg-red-500/10"
                      style={{
                        width: `${(order.amount / Math.max(...orderBook.asks.map((a) => a.amount))) * 100}%`,
                        transform: "translateY(-4px)",
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Current price */}
              <div className="py-2 text-center border-y border-gray-800 my-2">
                <div className="text-xl font-bold">${selectedPair.price.toFixed(2)}</div>
                <div className={selectedPair.change >= 0 ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
                  {selectedPair.change >= 0 ? "+" : ""}
                  {selectedPair.change}%
                </div>
              </div>

              {/* Bids (Buy orders) */}
              <div>
                {orderBook.bids.map((order, index) => (
                  <div key={`bid-${index}`} className="flex justify-between text-sm py-1 relative">
                    <div className="w-1/3 text-green-500">{order.price.toFixed(2)}</div>
                    <div className="w-1/3 text-right">{order.amount.toFixed(4)}</div>
                    <div className="w-1/3 text-right text-gray-400">{order.total.toFixed(2)}</div>
                    <div
                      className="absolute left-0 h-6 bg-green-500/10"
                      style={{
                        width: `${(order.amount / Math.max(...orderBook.bids.map((b) => b.amount))) * 100}%`,
                        transform: "translateY(-4px)",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order form */}
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
              <Tabs defaultValue="limit">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="limit" className="flex-1">
                    Limit
                  </TabsTrigger>
                  <TabsTrigger value="market" className="flex-1">
                    Market
                  </TabsTrigger>
                  <TabsTrigger value="stop" className="flex-1">
                    Stop
                  </TabsTrigger>
                </TabsList>

                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      className={`${buySellTab === "buy" ? "bg-green-600 hover:bg-green-700" : "bg-gray-800 hover:bg-gray-700"}`}
                      onClick={() => setBuySellTab("buy")}
                    >
                      Buy
                    </Button>
                    <Button
                      className={`${buySellTab === "sell" ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-700"}`}
                      onClick={() => setBuySellTab("sell")}
                    >
                      Sell
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Price</label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="0.00"
                        className="bg-black/50 border-purple-500/30 pr-16"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">USDT</div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Amount</label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="0.00"
                        className="bg-black/50 border-purple-500/30 pr-16"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">BTC</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[25, 50, 75, 100].map((percent) => (
                      <Button
                        key={percent}
                        variant="outline"
                        size="sm"
                        className="border-purple-500/30 hover:bg-purple-900/20"
                        onClick={() => {
                          // In a real app, this would calculate the amount based on available balance
                          setAmount(((48600 * percent) / 100 / selectedPair.price).toFixed(4))
                        }}
                      >
                        {percent}%
                      </Button>
                    ))}
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Total</label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="0.00"
                        className="bg-black/50 border-purple-500/30 pr-16"
                        value={calculateTotal()}
                        readOnly
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">USDT</div>
                    </div>
                  </div>

                  <Button
                    className={`w-full py-6 ${
                      buySellTab === "buy"
                        ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                        : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
                    }`}
                    onClick={handleSubmitOrder}
                  >
                    {buySellTab === "buy" ? "Buy" : "Sell"} {selectedPair.symbol.split("/")[0]}
                  </Button>

                  <div className="text-sm text-gray-400 flex justify-between">
                    <span>Available:</span>
                    <span>{buySellTab === "buy" ? "12,789.45 USDT" : "1.2345 BTC"}</span>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Order notification */}
      <div
        id="order-notification"
        className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg hidden"
      >
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Order placed successfully!</span>
        </div>
      </div>
    </section>
  )
}
