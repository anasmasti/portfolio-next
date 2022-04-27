export default function NavItem({ title, icon }) {
  return (
    <li>
      <a href="">
        {icon}
        <span className="text-[10px]">{title}</span>
      </a>
    </li>
  );
}
