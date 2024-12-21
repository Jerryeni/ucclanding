"use client";

import { Button } from "@/components/ui/button";

interface SecurityCardProps {
  title: string;
  description: string;
  variant: "blue" | "green";
}

export function SecurityCard({ title, description, variant }: SecurityCardProps) {
  const bgColor = variant === "blue" ? "bg-[#F8FBFF]" : "bg-[#F6FFFD]";
  
  return (
    <div className={`${bgColor} rounded-2xl p-8 text-center `}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      <Button variant="outline" className="rounded-[8px] border-none bg-[#8CC8FA33]">
        {variant === "blue" ? "Hardware Wallet" : "Learn More"}
      </Button>
    </div>
  );
}