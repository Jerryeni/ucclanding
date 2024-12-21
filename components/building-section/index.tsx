"use client";

import { CircleDot, Sprout } from "lucide-react";
import { ProgramCard } from "./program-card";
import Image from "next/image";

export function BuildingSection() {
  return (
    <section className="my-40  max-w-4xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 justify-between  mb-16">
          <div className="flex flex-col items-start w-full lg:w-1/2 gap-2 mb-6">
            <h2 className="text-4xl font-bold">START BUILDING</h2>
            <span className="bg-[#FFE872] rounded-xl text-4xl px-4 py-2 font-bold">TODAY</span>
          </div>
          <p className="text-gray-600 w-full lg:w-1/2 text-right">
            Join the Universe ecosystem and access the resources, funding, and support you need to bring your blockchain vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <ProgramCard
            icon={ <Image src='/images/7.png' alt="Founder" width={50} height={50} />}
            title="Grants Program"
            description="Access funding to fuel innovative ideas and accelerate your blockchain development."
          />
          <ProgramCard
            icon={<Image src='/images/8.png' alt="Founder" width={50} height={50} />}
            title="Incubation Program"
            description="Join our program to receive mentorship, resources, and networking to grow your startup into a $UCCessful venture."
          />
        </div>
      </div>
    </section>
  );
}