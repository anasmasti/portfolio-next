import Link from "next/link";

export default function NavItem({ title, icon }) {
  return (
    <li>
      <Link href={(title == "About" ? `#${title.toLowerCase()}` : title.toLowerCase())}>
        <a>
          {icon}
          <span className="text-[10px]">{title}</span>
        </a>
      </Link>
    </li>
  );
}
