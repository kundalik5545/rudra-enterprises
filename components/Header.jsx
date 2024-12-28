import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const websiteName = process.env.NEXT_PUBLIC_WEBSITE_NAME;

const Header = () => {
  const allNavLinks = [
    { href: "/", linkText: "Home" },
    { href: "/our-services", linkText: "Our Services" },
    { href: "/contact-us", linkText: "Contact Us" },
    { href: "/about-us", linkText: "About Us" },
  ];

  const servicesNavLinks = [
    { href: "/plumbing-work", linkText: "Plumbing Work" },
    { href: "/pump-buy-sell", linkText: "Pump Buy Sell" },
    { href: "/borewell-drilling", linkText: "Borewell Drilling" },
    { href: "/tank-cleaning", linkText: "Tank Cleaning" },
    { href: "/labour-supply", linkText: "Labour Supply" },
    { href: "/pipe-fitting", linkText: "Pipe Fittings" },
  ];

  return (
    <div className="fixed top-0 bg-white/80 backdrop-blur-md z-50 border-b w-full">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Website Logo */}
        <div className="website-logo gradient-title text-base md:text-4xl md:font-bold">
          <Link href={"/"} className="text-2xl md:text-4xl md:font-bold">
            {websiteName}
          </Link>
        </div>

        <div className="mobile-menu md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              {allNavLinks.map((link, i) => {
                if (link.linkText === "Our Services") {
                  return (
                    <div key={i} className="relative group">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button
                            variant="ghost"
                            className="flex items-center space-x-1 text-xl"
                          >
                            <span key={i}>{link.linkText}</span>
                            <ChevronDown />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuSeparator />
                          {servicesNavLinks.map((service, j) => (
                            <DropdownMenuItem>
                              <Link key={j} href={service.href}>
                                {service.linkText}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  );
                } else {
                  return (
                    <Link key={i} href={link.href}>
                      <Button variant="ghost" className="text-xl">
                        {link.linkText}
                      </Button>
                    </Link>
                  );
                }
              })}
            </SheetContent>
          </Sheet>
        </div>

        {/* Navigation Links */}
        <div className="deskstop-menu hidden md:flex items-center space-x-4">
          {allNavLinks.map((link, i) => {
            if (link.linkText === "Our Services") {
              return (
                <div key={i} className="relative group">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        variant="outline"
                        className="flex items-center space-x-1"
                      >
                        <span key={i}>{link.linkText}</span>
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuSeparator />
                      {servicesNavLinks.map((service, j) => (
                        <DropdownMenuItem>
                          <Link key={j} href={service.href}>
                            {service.linkText}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            } else {
              return (
                <Link key={i} href={link.href}>
                  <Button variant="outline">{link.linkText}</Button>
                </Link>
              );
            }
          })}
        </div>
      </nav>
    </div>
  );
};

export default Header;
