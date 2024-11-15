"use client"

import { Menu } from 'lucide-react'
import { Button } from './button'
import { Sheet, SheetContent, SheetTrigger } from './sheet'     
import Link from 'next/link'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <nav className="flex flex-col gap-4">
          <Link href="#features" className="text-lg font-medium">Features</Link>
          <Link href="#signals" className="text-lg font-medium">Signals</Link>
          <Link href="#pricing" className="text-lg font-medium">Pricing</Link>
          <Link href="#" className="text-lg font-medium">Join Discord</Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}