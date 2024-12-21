"use client";

import { Card } from "@/components/ui/card";
import { Brain, Lock, LineChart, Zap } from "lucide-react";

export function Featuress() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-[#DCC00A]" />,
      title: "Open Innovation",
      description: "Universe runs on fully open source tools for development, every improvement, and every message is public."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#DCC00A]" />,
      title: "Forget Fear & Privacy",
      description: "Forget what you know about blockchain and centralization. Our system brings true privacy and security to your digital life."
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#DCC00A]" />,
      title: "Turning Energy into Intelligence",
      description: "Taking intelligence out of the box, our innovative computational power hub is turning wasted energy into valuable intelligence."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#DCC00A]" />,
      title: "Smart Contract",
      description: "Universe runs a smart blockchain, where contracts are more than just code. They're intelligent agreements that understand context."
    }
  ];

  return (
    <section className="py-20 lg:px-40  bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-none">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}