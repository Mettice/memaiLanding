import { Check } from "lucide-react"
import { Button } from "../ui/button"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to meme coin signals",
    features: [
      "3 signals per day",
      "Basic technical analysis",
      "Public chat access",
      "Telegram notifications",
      "Basic support"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    description: "Advanced features for serious traders",
    features: [
      "Unlimited signals",
      "Priority alerts",
      "Advanced technical analysis",
      "Private chat access",
      "Risk management tools",
      "Priority support",
      "Early access features",
      "Custom alerts"
    ],
    cta: "Start Premium",
    highlighted: true
  },
  {
    name: "Professional",
    price: "$249",
    period: "/month",
    description: "Enterprise-grade trading signals",
    features: [
      "All Premium features",
      "API access",
      "Custom indicators",
      "1-on-1 consultation",
      "Trading automation",
      "Dedicated account manager",
      "Custom reporting",
      "White-label options"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Select the perfect plan for your trading needs
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 ${
                tier.highlighted ? 'scale-105 ring-2 ring-primary' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-100">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="ml-1 text-xl font-semibold text-gray-500">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={`mt-8 w-full ${
                  tier.highlighted ? '' : 'variant-outline'
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}