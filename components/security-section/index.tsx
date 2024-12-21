"use client";

import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { SecurityCard } from "./security-card";

export function SecuritySection() {
  return (
    <section className="my-20 py-4 rounded-xl bg-white max-w-4xl mx-auto">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <div className="flex place-content-center items-center pt-10 gap-3">
            <div className="flex items-center gap-2 hero-gradient px-4 py-1 md:py-2 rounded-xl mb-4">
              <Lock className="w-5 h-5" />
              <span className="font-bold text-2xl md:text-4xl">SECURE</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">YOUR $UCC</h2>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Secure your $UCC on official wallets designed for safety and ease of use. Keep your assets safe, accessible, and under your control - wherever you are.
          </p>
          <Button className="rounded-full bg-[#E6DEB4] text-black hover:bg-[#d6cca4]">
            For the Community
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <SecurityCard
            title="Official Hardware Wallet"
            description="Hardware Wallet is a secure device designed to store cryptocurrency private keys offline, protecting your assets from online threats while ensuring easy access for transactions."
            variant="blue"
          />
          <SecurityCard
            title="Official Crypto Debit Card"
            description="A Crypto Debit Card lets you spend cryptocurrency at merchants that accept debit cards, converting crypto to fiat in real-time for easy, secure transactions."
            variant="green"
          />
        </div>
      </div>
    </section>
  );
}