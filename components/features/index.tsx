"use client";

import Image from "next/image";
import { FeatureCard } from "./feature-card";
import {
  OpenInnovationIcon,
  OraclesIcon,
  SmartContractIcon,
  EnergyIcon,
} from "./feature-icons";

export function Features() {
  const features = [
    {
      icon: <Image src='/images/5.png' alt="Founder" className="w-full" width={100} height={100} />,
      title: "Open Innovation",
      description: "Universe chain is fully open source from day on development, every improvement, and every innovation is transparent, accessible, and community-driven.",
    },
    {
      icon: <Image src='/images/4.png' alt="Founder" className="w-full" width={100} height={100} />,
      title: "Oracles",
      description: "Oracles link blockchains to external data, enabling smart contracts to interact with real-world information and automate processes.",
    },
    
  ];
  const features2 = [
    {
      icon: <Image src='/images/6.png' alt="Founder" className="w-full" width={100} height={100} />,
      title: "Forget Fees & Delays",
      description: "Forget what you know about blockchain payments. Universe chain offers fast, fee-less transactions with instant finality. Your transactions are secure and final—even offline. Fast, Low-Fee, and Reliable.",
      iconreverse: true,
    },
    
  ];
  const features3 = [
    {
      icon: <Image src='/images/1.png' alt="Founder" className="w-full" width={100} height={100} />,
      title: "Smart Contract",
      description: "Universe Chain, a Layer 2 blockchain, allows users to deploy tokens and smart contracts efficiently, supporting innovative applications and seamless scalability.",
    },
    {
      icon: <Image src='/images/2.png' alt="Founder" className="w-full" width={100} height={100} />,
      title: "Turning Energy Into Intelligence",
      description: "Unlike traditional Proof of Work, PoA channels computational power into AI, fostering sustainability and innovation. With UCC, energy transforms into intelligence for a smarter, greener blockchain.",
    },
  ];

  return (
    <section className="py-20 max-w-5xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="w-full grid-cols-1 grid gap-3">
            {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
          </div>
          <div className="w-full grid-cols-1 grid">
            {features2.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature }
            />
          ))}
          </div>
          <div className="w-full grid-cols-1 grid gap-3">
            {features3.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}