"use client";

import { Button } from "@/components/ui/button";

export function Discover() {
  return (
    <section className="relative mt-20 max-w-5xl mx-auto">
      {/* Yellow border at the top */}
      <div className=" -mt-20 px-2">
        <div className="container mx-auto px-4 text-center py-32 rounded-[32px] bg-black border-t-4 border-yellow-400">
          <h2 className="text-5xl font-bold text-white mb-6">
            XXXXXXX
          </h2>
          <p className="text-gray-400 mb-8">
            XXXXXXXXXXXXXXXXXXXXXXXX
          </p>
          <Button 
            className="bg-[#FFE872] text-black hover:bg-[#f5df5f] rounded-full px-8 py-6 font-medium"
          >
            Discover Universe
          </Button>
        </div>
      </div>
    </section>
  );
}