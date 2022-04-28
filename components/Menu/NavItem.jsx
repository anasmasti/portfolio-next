import Link from "next/link";

export default function NavItem({ title, icon }) {
  return (
    <li>
      <Link href={(title == "About" ? `#${title.toLowerCase()}` : title.toLowerCase())}>
        <a className="relative group">
          {icon}
          <span className="text-[10px]">{title}</span>
      <span className="absolute left-0 -bottom-1 w-0 h-1 rounded-lg bg-[#341e95] -z-10 group-hover:w-full group-hover:transition-all duration-500"></span>
        </a>
      </Link>
    </li>
  );
}
