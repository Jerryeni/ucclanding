"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-bold text-xl">
              UCC
            </Link>

          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <NavLinks />
            <div className="flex space-x-4 items-center">
              <Link href="#" className="text-gray-600 hover:text-black">
                <Image src='/images/10.png' alt="Founder" className="w-3 h-3" width={50} height={50} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Image src='/images/11.png' alt="Founder" className="w-3 h-3" width={50} height={50} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Image src='/images/12.png' alt="Founder" className="w-3 h-3" width={50} height={50} />
              </Link>

            </div>
          </nav>


          <div className="flex items-center gap-4">
            {/* <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Get Started
            </Button> */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}