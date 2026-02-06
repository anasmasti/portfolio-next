"use client";

import type { ReactNode } from "react";
import Link from "next/link";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

const BASE_CLASSNAME =
  "inline-flex items-center justify-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/20";

const DISABLED_CLASSNAME = "disabled:cursor-not-allowed disabled:opacity-70";

export default function PrimaryButton({
  children,
  href,
  external,
  type = "button",
  disabled,
  className,
  ariaLabel,
}: Readonly<PrimaryButtonProps>) {
  const classes =
    `${BASE_CLASSNAME} ${DISABLED_CLASSNAME} ${className ?? ""}`.trim();

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
