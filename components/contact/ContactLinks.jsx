export default function ContactLinks() {
  let message = "Hi Anas I saw your portfolio, i want to tell you that ";

  let links = [
    {
      id: 1,
      title: "WhatsApp",
      url: `https://wa.me/212660548100?text=${message}`,
      bg_img: "bg-whatsapp",
    },
    {
      id: 2,
      title: "Messenger",
      url: "https://m.me/anas.masti.96",
      bg_img: "bg-messenger",
    },
    {
      id: 3,
      title: "Telegram",
      url: "https://t.me/anasmasti",
      bg_img: "bg-telegram",
    },
    {
      id: 4,
      title: "E-mail",
      url: `mailto:anasmasti@hotmail.com?subject='Anas Masti Portfolio' Contact&body=${message}`,
      bg_img: "bg-mail",
    },
  ];

  return (
    <div className="w-full lg:w-1/2 md:w-full flex justify-between gap-3 mt-10 break-words">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          className={`p-3 md:p-6 lg:p-6 bg-cover bg-no-repeat bg-center ${link.bg_img} rounded-xl font-bold text-white  transition-all  duration-300 hover:pt-2 md:hover:pt-5 lg:hover:pt-5`}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
