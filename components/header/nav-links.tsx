"use client";

import { NavItem } from "./nav-item";

const navItems = {
  Learn: ["Overview", "Features", "Security", "Token", "Resources"],
  Build: ["Documentation", "Tools", "SDKs", "API Reference"],
  Community: ["Discord", "Twitter", "Blog", "Events"],
};

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className = "" }: NavLinksProps) {
  return (
    <div className={`flex gap-8 ${className}`}>
      {Object.entries(navItems).map(([title, items]) => (
        <NavItem key={title} title={title} items={items} />
      ))}
    </div>
  );
}