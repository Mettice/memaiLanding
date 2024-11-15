"use client" 

import { Hero } from '../components/hero/hero'
import { Features } from '../components/features/features'
import { SignalExamples } from '../components/signals/signal-examples'
import '../styles/input.css'
import { FAQ } from '../components/faq/faq'
import { Footer } from '../components/ui/footer'
import { ScrollToTop } from '../components/ui/scroll-to-top'
import { Pricing } from '../components/pricing/pricing'
import { fadeIn, staggerContainer } from '../components/animations'
import { motion } from 'framer-motion'
import { FloatingTokens } from '../components/ui/floating-tokens'
import { DecorativeElements } from '../components/ui/decorative-elements'
import { GradientBackground } from '../components/ui/gradient-background'

export default function Home() {
  return (
    <>
      <GradientBackground />
      <FloatingTokens />
      <DecorativeElements />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn}>
          <Hero />
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="animate"
        >
          <Features />
        </motion.div>

        <motion.div 
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="animate"
        >
          <SignalExamples />
        </motion.div>

        <motion.div 
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="animate"
        >
          <Pricing />
        </motion.div>

        <motion.div 
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="animate"
        >
          <FAQ />
        </motion.div>
      </motion.div>
      <Footer />
      <ScrollToTop />
    </>
  )
}