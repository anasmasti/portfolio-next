"use client";

import type { ReactNode } from "react";
import PrimaryButton from "./PrimaryButton";

type MainButtonProps = {
  title: string;
  icon?: ReactNode;
  goTo: string;
};

export default function MainButton({ title, icon, goTo }: MainButtonProps) {
  return (
    <PrimaryButton href={goTo}>
      {title}
      {icon}
    </PrimaryButton>
  );
}
