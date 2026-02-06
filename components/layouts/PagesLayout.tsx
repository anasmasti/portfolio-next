"use client";

import type { ReactNode } from "react";
import GoHomeButton from "../shared/GoHomeButton";
import ProjectLink from "../shared/ProjectLink";

type PagesLayoutProps = {
  children: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  topBarMode?: "static" | "absolute";
};

export default function PagesLayout({
  children,
  leftSlot = <GoHomeButton />,
  rightSlot = <ProjectLink type="github" desc="Browse the repo" />,
  topBarMode = "static",
}: Readonly<PagesLayoutProps>) {
  const hasLeftSlot = leftSlot !== null && leftSlot !== undefined;
  const hasRightSlot = rightSlot !== null && rightSlot !== undefined;
  let justifyClass = "justify-end";

  if (hasLeftSlot && hasRightSlot) {
    justifyClass = "justify-between";
  } else if (hasLeftSlot) {
    justifyClass = "justify-start";
  }

  const topBarModeClass =
    topBarMode === "absolute" ? "absolute top-0 left-0 z-10" : "";

  return (
    <div className="relative">
      {hasLeftSlot || hasRightSlot ? (
        <div
          className={`w-full flex flex-row items-start gap-4 p-6 ${justifyClass} ${topBarModeClass}`}
        >
          {hasLeftSlot ? leftSlot : null}
          {hasRightSlot ? rightSlot : null}
        </div>
      ) : null}
      <section>{children}</section>
    </div>
  );
}
