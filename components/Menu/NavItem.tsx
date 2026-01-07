"use client";

import type { ReactNode } from "react";
import Link from "next/link";

type NavItemProps = {
  title: string;
  icon?: ReactNode;
  goTo: string;
};

export default function NavItem({ title, icon, goTo }: NavItemProps) {
  return (
    <li>
      <Link href={goTo} className="relative group">
        {icon}
        <span className="text-[10px]">{title}</span>
        <span className="absolute left-0 -bottom-1 w-0 h-1 rounded-lg bg-primary -z-10 group-hover:w-full group-hover:transition-all duration-500"></span>
      </Link>
    </li>
  );
}
