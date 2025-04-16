"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}
export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigations = [
    {
      text: "О нас",
      link: "#",
    },
    {
      text: "Подобрать кухню",
      link: "#",
    },
    {
      text: "Получить дизайн",
      link: "#",
    },
    {
      text: "Обновления",
      link: "#",
    },
  ];

  return (
    <header
      className={`bg-white/20 absolute z-50 w-full h-11 overflow-hidden transition-all ${className} ${isOpen ? "h-80 backdrop-blur-2xl" : ""}`}
    >
      <div className="container grid grid-cols-3 md:grid-cols-[auto_1fr] justify-between items-center">
        <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-2">
          <Image src="/logos/bramf.svg" width={90} height={12} alt="logo" />
        </div>
        <nav className="md:justify-self-end col-start-1 col-end-4 md:col-start-2 md:col-end-3">
          <ul className="flex flex-col gap-6 md:flex-row py-8 md:py-0 text-center">
            {navigations.map((nav) => (
              <li key={Math.random()}>
                <Link className="text-popover" href={nav.link}>
                  {nav.text}
                </Link>
              </li>
            ))}
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
  );
};
