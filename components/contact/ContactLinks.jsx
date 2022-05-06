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
    <div className="flex justify-between gap-3 mt-10">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          className={`p-3 bg-cover bg-no-repeat bg-center ${link.bg_img} rounded-xl`}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
