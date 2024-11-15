"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
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
  // Use fixed initial positions
  const initialPositions = tokens.map(() => ({
    x: 0,
    y: 0
  }))

  const [positions, setPositions] = useState(initialPositions)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Generate random positions only after mount
    setPositions(tokens.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    })))
  }, [])

  if (!isMounted) {
    return null // or return a loading state
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {tokens.map((token, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={initialPositions[index]}
          animate={{
            x: positions[index].x,
            y: positions[index].y,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
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