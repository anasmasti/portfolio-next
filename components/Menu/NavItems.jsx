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
      goTo: "#about",
    },
    {
      id: 2,
      icon: <AiOutlineSolution className="text-3xl" />,
      title: "Skills",
      goTo: "/skills",
    },
    {
      id: 3,
      icon: <AiOutlineRead className="text-3xl" />,
      title: "Projects",
      goTo: "/projects",
    },
    {
      id: 4,
      icon: <AiOutlineMessage className="text-3xl" />,
      title: "Contact",
      goTo: "/contact",
    },
  ];

  return (
    <ul className="text-gray-300 flex flex-row gap-7 font-semibold">
      {navItems.map((navItem) => (
        <NavItem
          key={navItem.id}
          {...navItem}
        />
      ))}
    </ul>
  );
}
