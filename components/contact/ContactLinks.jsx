export default function ContactLinks() {
  let message = "Hi Anas I saw your portfolio, i want to tell you that ";

  let links = [
    {
      id: 1,
      title: "WhatsApp",
      url: `https://wa.me/212660548100?text=${message}`,
      bg_img: "",
    },
    {
      id: 2,
      title: "Messenger",
      url: "https://m.me/anas.masti.96",
      bg_img: "",
    },
    { id: 3, title: "Telegram", url: "https://t.me/anasmasti", bg_img: "" },
    {
      id: 4,
      title: "E-mail",
      url: `mailto:anasmasti@hotmail.com?subject='Anas Masti Portfolio' Contact&body=${message}`,
      bg_img: "",
    },
  ];

  return (
    <div className="flex justify-around mt-10">
      {links.map((link) => (
        <a
          className="p-5 bg-cover bg-no-repeat bg-center bg-whatsapp rounded-xl"
          key={link.id}
          target="_blank"
          href={link.url}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
