"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const tokens = [
  { src: '/solana.svg', alt: 'Solana', width: 40, height: 40 },
  { src: '/ethereum.svg', alt: 'Ethereum', width: 50, height: 50 },
  { src: '/bnb.svg', alt: 'BSC', width: 45, height: 45 },
  { src: '/solana.svg', alt: 'Solana', width: 40, height: 40 },
  { src: '/trading-bot.svg', alt: 'Trading Bot', width: 45, height: 45 },
  { src: '/meme-coin.svg', alt: 'Meme Coin', width: 45, height: 45 },
  { src: '/avalanche.svg', alt: 'Avalanche', width: 45, height: 45 },
  { src: '/arbitrum.svg', alt: 'Arbitrum', width: 45, height: 45 },
  { src: '/optimism.svg', alt: 'Optimism', width: 45, height: 45 }
]

export function FloatingTokens() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {tokens.map((token, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Image
            src={token.src}
            alt={token.alt}
            width={token.width}
            height={token.height}
            className="opacity-20"
          />
        </motion.div>
      ))}
    </div>
  )
}