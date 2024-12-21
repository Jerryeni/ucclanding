"use client";

import { ArrowRight } from "lucide-react";

interface SocialButtonProps {
  platform: string;
  icon: React.ReactNode;
}

export function SocialButton({ platform, icon }: SocialButtonProps) {
  return (
    <button className="flex items-center justify-between w-full md:w-auto px-6 py-3 bg-[#FFE872] hover:bg-[#f5df5f] rounded-full text-black">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{platform}</span>
      </div>
      <ArrowRight className="w-4 h-4 ml-4" />
    </button>
  );
}