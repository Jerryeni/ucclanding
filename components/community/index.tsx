"use client";

import { Discord, Twitter, Send } from "lucide-react";
import { SocialButton } from "./social-button";

export function Community() {
  return (
    <section className="py-20 bg-[#FFF8E1]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">JOIN OUR COMMUNITY</h2>
        <p className="max-w-3xl mx-auto mb-12 text-gray-600 leading-relaxed">
          Be part of a movement that's reshaping blockchain and AI. Our community is driven by visionaries, builders, and innovators who are passionate about shaping the future. We left traditional blockchain behind - join us.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <SocialButton platform="Discord" icon={<Discord className="w-5 h-5" />} />
          <SocialButton platform="X (Twitter)" icon={<Twitter className="w-5 h-5" />} />
          <SocialButton platform="Telegram" icon={<Send className="w-5 h-5" />} />
        </div>
      </div>
    </section>
  );
}