import { ImFacebook, ImTwitter, ImLinkedin2, ImGithub } from "react-icons/im";

export default function SocialMedia() {
  let socialMedia = [
    {
      id: 1,
      icon: <ImGithub />,
      url: "https://github.com/anasmasti",
      label: "GitHub",
    },
    {
      id: 2,
      icon: <ImLinkedin2 />,
      url: "https://www.linkedin.com/in/anas-masti-616040189",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <ImTwitter />,
      url: "https://twitter.com/AnasMasti",
      label: "Twitter",
    },
    {
      id: 4,
      icon: <ImFacebook />,
      url: "https://www.facebook.com/anas.masti.96",
      label: "Facebook",
    },
  ];

  return (
    <div className="flex gap-3 my-8 text-gray-300">
      {socialMedia.map((social) => (
        <a
          key={social.id}
          aria-label={social.label}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-all duration-150"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
