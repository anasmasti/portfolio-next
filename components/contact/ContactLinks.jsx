import {
  RiMessengerLine,
  RiTelegramLine,
  RiWhatsappLine,
  RiMailSendLine,
} from "react-icons/ri";

export default function ContactLinks() {
  let message = "Hi Anas I saw your portfolio, I want to tell you that ";

  let links = [
    {
      id: 1,
      title: "WhatsApp",
      url: `https://wa.me/212660548100?text=${message}`,
      bg_img: "bg-whatsapp",
      icon: <RiWhatsappLine />,
    },
    {
      id: 2,
      title: "Messenger",
      url: "https://m.me/anas.masti.96",
      bg_img: "bg-messenger",
      icon: <RiMessengerLine />,
    },
    {
      id: 3,
      title: "Telegram",
      url: "https://t.me/anasmasti",
      bg_img: "bg-telegram",
      icon: <RiTelegramLine />,
    },
    {
      id: 4,
      title: "E-mail",
      url: `mailto:anasmasti@hotmail.com?subject='Anas Masti Portfolio' Contact&body=${message}`,
      bg_img: "bg-mail",
      icon: <RiMailSendLine />,
    },
  ];

  return (
    <div className="w-full lg:w-1/2 md:w-full flex flex-col lg:flex-row md:flex-row justify-between gap-3 mt-10 break-words">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`p-1 flex justify-center items-center gap-1 text-sm bg-cover md:p-2 md:text-md lg:p-2 lg:text-md bg-no-repeat bg-center bg-[#1e1e1e90] rounded-xl font-bold text-white  transition-all  duration-300 hover:-translate-y-1 `}
        >
          {link.icon} {link.title}
        </a>
      ))}
    </div>
  );
}
