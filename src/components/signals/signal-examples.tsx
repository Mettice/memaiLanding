import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { forwardRef } from "react";

type CardProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof Card>>;
type CardContentProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof CardContent>>;

const CardComponent = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => (
    <Card {...props} ref={ref} className={props.className}>
      {children}
    </Card>
  )
);
CardComponent.displayName = "CardComponent"; // Add display name

const CardContentComponent = ({ children, ...props }: CardContentProps) => (
  <CardContent {...props}>{children}</CardContent>
);

export function SignalExamples() {
  const signals = [
    {
      token: "SAMPLE/USD",
      chain: "ETH",
      status: "Active",
      entry: "$1.00",
      target: "$1.20",
      stopLoss: "$0.90",
      change: "+5%",
      volume: "$1M",
      liquidity: "$500K",
      transactions: 150,
      buys: 90,
      sells: 60,
      sentiment: 75,
    },
  ];

  return (
    <section id="signals" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Live Signals</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Recent trading signals with real-time performance tracking
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12">
          {signals.map((signal, index) => (
            <CardComponent key={index} className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>🚨 {signal.token} ({signal.chain})</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{signal.status}</span>
                </CardTitle>
              </CardHeader>
              <CardContentComponent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Entry</span>
                      <span>{signal.entry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Target</span>
                      <span className="text-green-600">{signal.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Stop Loss</span>
                      <span className="text-red-600">{signal.stopLoss}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">24h Change</span>
                      <span className="text-green-600">{signal.change}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Volume</span>
                      <span>{signal.volume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Liquidity</span>
                      <span>{signal.liquidity}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-500">Transactions</div>
                      <div className="font-semibold">{signal.transactions}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Buys/Sells</div>
                      <div className="font-semibold text-green-600">{signal.buys}/{signal.sells}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Sentiment</div>
                      <div className="font-semibold">{signal.sentiment}/100</div>
                    </div>
                  </div>
                </div>
              </CardContentComponent>
            </CardComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
