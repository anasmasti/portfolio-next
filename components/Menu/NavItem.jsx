"use client";

import Link from "next/link";
import PropTypes from "prop-types";

export default function NavItem({ title, icon, goTo }) {
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

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  goTo: PropTypes.string.isRequired,
};
