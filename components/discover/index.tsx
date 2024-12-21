"use client";

import { Button } from "@/components/ui/button";

export function Discover() {
  return (
    <section className="relative mt-20 max-w-5xl mx-auto">
      {/* Yellow border at the top */}
      <div className=" -mt-20 rounded-[48px] bg-yellow-400">
        <div className="container mx-auto px-4 text-center py-32">
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
      <div className="discover-section top-1 z-50 w-full bg-yellow-400 absolute">
        <div className="container mx-auto px-4 text-center py-32">
          <h2 className="text-5xl font-bold text-white mb-6">
            XXXXXXX
          </h2>
          <p className="text-gray-400 mb-8">
            XXXXXXXXXXXXXXXXXXXXXXXX
          </p>
          <Button 
            className="bg-[#FFE872] text-black hover:bg-[#f5df5f] rounded-xl px-8 py-6 font-medium"
          >
            Discover Universe
          </Button>
        </div>
      </div>
    </section>
  );
}