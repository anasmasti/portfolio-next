import { ImFacebook, ImTwitter, ImLinkedin2, ImGithub } from "react-icons/im";

export default function SocialMedia() {
  let socialMedia = [
    {
      id: 1,
      icon: <ImGithub />,
      url: "facebook.com",
    },
    {
      id: 2,
      icon: <ImLinkedin2 />,
      url: "facebook.com",
    },
    {
      id: 3,
      icon: <ImTwitter />,
      url: "facebook.com",
    },
    {
      id: 4,
      icon: <ImFacebook />,
      url: "facebook.com",
    },
  ];

  return (
    <div className="flex gap-3 my-8 text-gray-300">
      {socialMedia.map((social) => (
        <a
          key={social.id}
          href={social.url}
          className="hover:text-white transition-all duration-150"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
