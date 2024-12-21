"use client";

import Image from "next/image";

export function AboutFounder() {
  return (
    <section className="my-20 lg:mb-40 max-w-5xl mx-auto">
      <div className="container mx-auto px-4 flex">
        <div className="w-1/2 mx-auto">
          <h2 className="text-3xl font-bold mb-2 flex flex-col text-start items-start">
            ABOUT THE
            <span className="highlight w-fit rounded-xl py-2 px-3">FOUNDER</span>
          </h2>
          <div className="space-y-4 mt-8">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        <div className="w-1/2">
          <Image src='/images/3.png' alt="Founder" width={800} height={600} />
        </div>
      </div>
    </section>
  );
}