"use client";

import { ImGithub } from "react-icons/im";
import PrimaryButton from "./PrimaryButton";

type ProjectLinkProps = {
  type: "github";
  desc: string;
  href?: string;
};

const defaultLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/anasmasti/portfolio-next",
    icon: ImGithub,
  },
};

export default function ProjectLink({
  type,
  desc,
  href,
}: Readonly<ProjectLinkProps>) {
  const data = defaultLinks[type];
  const Icon = data.icon;
  const url = href ?? data.href;

  return (
    <PrimaryButton
      href={url}
      external
      ariaLabel={`${data.label} repository`}
      className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
    >
      <Icon className="text-base" />
      <span>{desc}</span>
    </PrimaryButton>
  );
}
