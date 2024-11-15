import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
  
  const faqs = [
    {
      question: "What is MEMAi?",
      answer: "MEMAi is an AI-powered trading signal platform specifically designed for meme coins. We analyze market data 24/7 to provide accurate trading signals across multiple blockchain networks."
    },
    {
      question: "How accurate are your signals?",
      answer: "Our signals maintain a success rate of over 90%. We achieve this through advanced AI algorithms, real-time market analysis, and strict risk management protocols."
    },
    {
      question: "Which chains do you support?",
      answer: "Currently, we support Solana, Ethereum, and BSC (Binance Smart Chain). We're constantly evaluating other chains to add to our coverage."
    },
    {
      question: "How do I receive signals?",
      answer: "Signals are delivered instantly via Telegram. Premium members receive signals before they're sent to free members, giving them a timing advantage."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. We offer a pro-rated refund for unused time on annual plans."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes, we provide 24/7 technical support through our Discord community and dedicated support email."
    }
  ]
  
  export function FAQ() {
    return (
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to know about MEMAi
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }