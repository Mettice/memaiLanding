import { Mail, Twitter, Github, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MEMAi</h3>
            <p className="text-gray-500 max-w-xs">
              AI-powered meme coin signals helping traders stay ahead of the market
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <nav className="flex flex-col gap-2 text-sm text-gray-500">
                <Link href="#features">Features</Link>
                <Link href="#signals">Signals</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#faq">FAQ</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Community</h4>
              <nav className="flex flex-col gap-2 text-sm text-gray-500">
                <Link href="#" target="_blank">Discord</Link>
                <Link href="#" target="_blank">Twitter</Link>
                <Link href="#" target="_blank">Telegram</Link>
                <Link href="#" target="_blank">Blog</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <nav className="flex flex-col gap-2 text-sm text-gray-500">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of Service</Link>
                <Link href="#">Cookie Policy</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center border-t pt-8">
          <p className="text-sm text-gray-500">
            © 2024 MEMAi. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <MessageSquare className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}