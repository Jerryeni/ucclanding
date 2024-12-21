"use client";

import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import Image from "next/image";

export function Community() {
  return (
    <section className="my-20 py-20 bg-[#FFCC001A]  border border-[#8BF9E833]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">JOIN OUR COMMUNITY</h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
          Be part of a movement that's reshaping blockchain and its use. Our community is where we share updates, discuss features, and shape the future. We're glad you're here.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="btn-gradient text-black hover:bg-gray-800 p-3 md:py-7 md:px-8 rounded-xl flex gap-3">
            <Image src='/images/10.png' alt="Founder" className="w-5 h-5" width={50} height={50} />
            Discord
          </Button>
          <Button className="btn-gradient text-black hover:bg-gray-800 p-3 md:py-7 md:px-8 rounded-xl flex gap-3">
            <Image src='/images/11.png' alt="Founder" className="w-5 h-5" width={50} height={50} />
            X (Twitter)
          </Button>
          <Button className="btn-gradient   text-black hover:bg-gray-800 p-3 md:py-7 md:px-8 rounded-xl flex gap-3">
            <Image src='/images/12.png' className="w-5 h-5" alt="Founder" width={50} height={50} />
            Telegram
          </Button>
        </div>
      </div>
    </section>
  );
}