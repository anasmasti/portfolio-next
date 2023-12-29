import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectsItems() {
  let projects = [
    {
      id: 1,
      title: "My Old Portfolio",
      link: "https://my-old-portfolio-website.netlify.app/",
      tech: "Angular 11, Node.js, Express.js.",
      bg: "bg-old",
    },
    {
      id: 11,
      title: "M&C coton",
      link: "/",
      tech: "Php, PrestaShop, Photoshop.",
      bg: "bg-mc",
    },
    {
      id: 2,
      title: "MySYS",
      link: "/",
      tech: "ReactJs 16.10, Tailwind CSS.",
      bg: "bg-mysys",
    },
    {
      id: 3,
      title: "Rosacolor",
      link: "/",
      tech: "JavaScript, Next.js, Php, Laravel MVC, Tailwind CSS.",
      bg: "bg-m-global",
    },
    {
      id: 4,
      title: "Coastal West Limousines",
      link: "/",
      tech: "Php, WordPress, Bootstrap..",
      bg: "bg-coastalwest-limousines",
    },
    {
      id: 5,
      title: "Matiplas",
      link: "http://matiplas.ma/",
      tech: "Wordpress.",
      bg: "bg-matiplas",
    },
    {
      id: 6,
      title: "Mediexperts",
      link: "/",
      tech: "JavaScript, Java, Spring Boot, MySQL, Angular 10, NgRx, Bootstrap.",
      bg: "bg-mediexperts",
    },
    {
      id: 7,
      title: "Mediexperts Academy",
      link: "https://mediexperts-academy.netlify.app/",
      tech: "JavaScript, Angular 12, NgRx, Bootstrap., Tests E2E (Cypress), Figma.",
      bg: "bg-mediexperts-academy",
    },
    {
      id: 8,
      title: "Copra Shop",
      link: "https://copra.netlify.app/",
      tech: "Angular 8, Node.js, Express.js.",
      bg: "bg-copra",
    },
    {
      id: 9,
      title: "Hijaby",
      link: "https://play.google.com/store/apps/details?id=com.masti.hijaby&hl=fr&gl=US",
      tech: "React Native, Node.js, Express.js, Figma.",
      bg: "bg-hijaby",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
}
