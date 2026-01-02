"use client";

import Link from "next/link";
import PropTypes from "prop-types";
export default function MainButton({ title, icon, goTo }) {
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

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  goTo: PropTypes.string.isRequired,
};
