"use client";

import Link from "next/link";
import { Twitter, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Learn: ['Overview', 'Features', 'Security', 'Token', 'Resources'],
    Resources: ['About Us', 'Careers', 'Blog', 'Press'],
    Features: ['Wallets', 'Security', 'Exchange'],
    Community: ['Governance Program', 'Help Center', 'Blog'],
    Legal: ['Privacy Policy', 'Terms of Service']
  };

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-black">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2024 Universe Chain. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-black">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}