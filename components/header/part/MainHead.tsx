"use client"

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BramfLogo } from "@/components/svgIcons/BramfLogo";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  data: {
    text: string;
    link: string;
  }[]
}

export const MainHead: React.FC<HeaderProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(1111, data);
  
  return (
    <header
    className={`bg-white/20 absolute z-50 w-full h-11 overflow-hidden transition-all ${isOpen ? "h-80 backdrop-blur-2xl" : ""}`}
  >
    <div className="container grid grid-cols-3 md:grid-cols-[auto_1fr] justify-between items-center">
      <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-2">
        <BramfLogo />
      </div>
      <nav className="md:justify-self-end col-start-1 col-end-4 md:col-start-2 md:col-end-3">
        <ul className="flex flex-col gap-6 md:flex-row py-8 md:py-0 text-center">
          {data.map((nav) => (
            <li key={Math.random()}>
              <Link className="text-popover" href={nav.link}>
                {nav.text}
              </Link>
            </li>
          ))}
          
          <LanguageSwitcher />
        </ul>
      </nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-popover justify-self-end col-start-3 col-end-4 row-start-1 row-end-2 md:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </div>
    </div>
  </header>
  )
}