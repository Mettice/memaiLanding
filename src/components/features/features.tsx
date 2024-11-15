"use client"
import { motion } from 'framer-motion'
import { Bot, Zap, LineChart, Bell, Shield, Trophy } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const features = [
  {
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze market patterns and token metrics 24/7",
    icon: Bot,
  },
  {
    title: "Real-Time Alerts",
    description: "Instant notifications via Telegram for all trading opportunities",
    icon: Bell,
  },
  {
    title: "Multi-Chain Support",
    description: "Coverage across Solana, Ethereum, and BSC networks",
    icon: Zap,
  },
  {
    title: "Performance Tracking",
    description: "Detailed statistics and success rates for all signals",
    icon: LineChart,
  },
  {
    title: "Risk Management",
    description: "Clear entry points, targets, and stop-losses for every trade",
    icon: Shield,
  },
  {
    title: "High Success Rate",
    description: "Proven track record with over 90% successful signals",
    icon: Trophy,
  },
]

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-[1200px] mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Advanced Features
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl">
              Discover why traders trust our AI-powered signals for meme coin opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-center text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}