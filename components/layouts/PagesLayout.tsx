"use client";

import type { ReactNode } from "react";
import GoHomeButton from "../shared/GoHomeButton";

type PagesLayoutProps = {
  children: ReactNode;
};

export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <>
      <div className="w-full flex flex-row justify-start items-start p-6">
        <GoHomeButton />
      </div>
      <section>{children}</section>
    </>
  );
}
