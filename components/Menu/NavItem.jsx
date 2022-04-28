import Link from "next/link";

export default function NavItem({ title, icon }) {
  return (
    <li>
      <Link href={(title = "About" ? `#${title}` : title)}>
        <a>
          {icon}
          <span className="text-[10px]">{title}</span>
        </a>
      </Link>
    </li>
  );
}
