import {
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineRead,
  AiOutlineSolution,
} from "react-icons/ai";
import NavItem from "./NavItem";

export default function NavItems() {
  let navItems = [
    {
      id: 1,
      icon: <AiOutlineUser className="text-3xl" />,
      title: "About",
    },
    {
      id: 1,
      icon: <AiOutlineSolution className="text-3xl" />,
      title: "Skills",
    },
    {
      id: 1,
      icon: <AiOutlineRead className="text-3xl" />,
      title: "Projects",
    },
    {
      id: 1,
      icon: <AiOutlineMessage className="text-3xl" />,
      title: "Contact",
    },
  ];

  return (
    <ul className="text-gray-300 flex flex-row gap-7 font-semibold">
      {navItems.map((navItem) => (
        <NavItem key={navItem.id} title={navItem.title} icon={navItem.icon} />
      ))}
    </ul>
  );
}
