import { AiOutlineSolution, AiOutlineMessage } from "react-icons/ai";
import MainButton from "../shared/MainButton";

export default function AboutMeLinks() {
  let links = [
    {
      id: 1,
      icon: <AiOutlineSolution className="text-2xl" />,
      title: "See My Skils",
      goTo: 'skills'
    },
    {
      id: 2,
      icon: <AiOutlineMessage className="text-2xl" />,
      title: "Contact Me",
      goTo: 'contact'
    },
  ];

  return (
    <div className="mt-40 p-24 flex justify-center gap-3">
      {links.map((link) => (
        <MainButton key={link.id} title={link.title} icon={link.icon} goTo={link.goTo} />
      ))}
    </div>
  );
}
