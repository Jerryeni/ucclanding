"use client";

import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ProgramCard({ title, description, icon }: ProgramCardProps) {
  return (
    <div className="p-8 border border-gray-100 bg-white rounded-2xl">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="flex items-center text-black hover:opacity-80">
        Learn More
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}