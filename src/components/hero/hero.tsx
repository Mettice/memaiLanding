"use client"
import { motion } from 'framer-motion'
import { Button } from "../../components/ui/button"
import { ArrowRight, Rocket, Shield, LineChart } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function Hero() {
    return (
      <section className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 md:py-24 lg:py-32">
        <div className="container max-w-[1200px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-8 text-center"
          >
            <motion.div 
              variants={itemVariants}
              className="space-y-4 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                AI-Powered Meme Coin Signals
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get real-time signals for the most profitable meme coins across Solana,
                Ethereum, and BSC with 90%+ success rate.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
            >
              <Button size="lg" className="w-full">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                View Live Signals
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mx-auto"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2 rounded-lg border bg-card p-4"
              >
                <Rocket className="h-5 w-5 text-primary" />
                <span>24/7 Monitoring</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2 rounded-lg border bg-card p-4"
              >
                <Shield className="h-5 w-5 text-primary" />
                <span>Risk Management</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2 rounded-lg border bg-card p-4"
              >
                <LineChart className="h-5 w-5 text-primary" />
                <span>90%+ Success Rate</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
}