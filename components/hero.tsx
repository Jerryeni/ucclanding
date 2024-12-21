"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative hero-gradient min-h-[80vh] flex items-center justify-center text-center">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          FORGET WHAT<br />
          <span className="bg-white px-4 py-2 inline-block mt-2">YOU KNOW</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 mt-4">THIS IS UNIVERSE</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-700">
          UNIVERSE Chain is a decentralized network where unmatched scalable technology and
          artificial general intelligence converge. Built differently from the ground up to
          surpass traditional blockchains.
        </p>
        <Button className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-6 rounded-xl">
          Join Private Sale
        </Button>
      </div>
    </section>
  );
}