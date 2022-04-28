import { AiOutlineSolution, AiOutlineMessage } from "react-icons/ai";
import MainButton from "../shared/MainButton";

export default function AboutMeLinks() {
  let links = [
    {
      id: 1,
      icon: <AiOutlineSolution className="text-2xl" />,
      title: "See My Skils",
    },
    {
      id: 1,
      icon: <AiOutlineMessage className="text-2xl" />,
      title: "Contact Me",
    },
  ];
  
  return (
    <div className="p-24 flex justify-center gap-3">
      {links.map((link) => (
        <MainButton key={link.id} title={link.title} icon={link.icon} />
      ))}
    </div>
  );
}
