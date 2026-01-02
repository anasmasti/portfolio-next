"use client";

import { AiOutlineSolution, AiOutlineMessage } from "react-icons/ai";
import MainButton from "../shared/MainButton";

const links = [
  {
    id: 1,
    icon: <AiOutlineSolution className="text-2xl hidden md:block lg:block" />,
    title: "See My Skills",
    goTo: "/skills",
  },
  {
    id: 2,
    icon: <AiOutlineMessage className="text-2xl hidden md:block lg:block" />,
    title: "Contact Me",
    goTo: "/contact",
  },
];

export default function AboutMeLinks() {
  return (
    <div className="mt-40 p-24 flex justify-center gap-3">
      {links.map((link) => (
        <MainButton key={link.id} {...link} />
      ))}
    </div>
  );
}
