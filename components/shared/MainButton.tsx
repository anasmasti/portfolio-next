"use client";

import type { ReactNode } from "react";
import Link from "next/link";

type MainButtonProps = {
  title: string;
  icon?: ReactNode;
  goTo: string;
};

export default function MainButton({ title, icon, goTo }: MainButtonProps) {
  return (
    <Link
      href={goTo}
      className="p-2 px-3 bg-primary rounded-xl text-white font-bold flex gap-1 transition-all duration-300 delay-75 hover:bg-black"
    >
      {title}
      {icon}
    </Link>
  );
}
