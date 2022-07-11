import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectsItems() {
  let projects = [
    {
      id: 1,
      title: "My Old Portfolio",
      link: "https://my-old-portfolio.vercel.app/",
      tech: "Angular - NodeJS: ExpressJS.",
      bg: "bg-old",
    },
    {
      id: 11,
      title: "M&C",
      link: "https://mccoton.com/",
      tech: "Prestashop.",
      bg: "bg-mc",
    },
    {
      id: 2,
      title: "MySys",
      link: "https://mysys-app.netlify.app/",
      tech: "Nuxt JS.",
      bg: "bg-mysys",
    },
    {
      id: 3,
      title: "MGlobal",
      link: "https://dashboard.mysys.ma/",
      tech: "Laravel MVC - Vue JS.",
      bg: "bg-m-global",
    },
    {
      id: 4,
      title: "Coastal West Limousines",
      link: "https://coastalwestlimousines.com/",
      tech: "Wordpress.",
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
      link: "https://mediexperts.ma/",
      tech: "Laravel MVC - Vue JS / Vuex.",
      bg: "bg-mediexperts",
    },
    {
      id: 7,
      title: "Mediexperts Academy",
      link: "https://mediexperts-academy.netlify.app/",
      tech: "Angular / NgRx.",
      bg: "bg-mediexperts-academy",
    },
    {
      id: 8,
      title: "Copra Shop",
      link: "https://copra.netlify.app/",
      tech: "NodeJS: ExpressJS - Angular.",
      bg: "bg-copra",
    },
    {
      id: 9,
      title: "Hijaby",
      link: "https://play.google.com/store/apps/details?id=com.masti.hijaby&hl=fr&gl=US",
      tech: "Flutter - NodeJs: ExpressJS.",
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
