"use client"

import Link from 'next/link'
import { Button } from './button'
import { ThemeToggle } from './theme-toggle'
import { MobileMenu } from './mobile-menu'


export function Navbar() {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">MEMAi</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="transition-colors hover:text-foreground/80">
              Features
            </Link>
            <Link href="#signals" className="transition-colors hover:text-foreground/80">
              Signals
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Link href="#" className="hidden md:block">
            <Button variant="outline">Join Discord</Button>
          </Link>
          <Link href="#" className="hidden md:block">
            <Button>Get Started</Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}