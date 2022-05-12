import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectsItems() {
  let projects = [
    {
      id: 1,
      title: "My Old Portfolio",
      link: "https://mysys-app.netlify.app/",
      tech: "Angular / NodeJS: ExpressJS.",
    },
    {
      id: 11,
      title: "M&C",
      link: "https://mysys-app.netlify.app/",
      tech: "Prestashop.",
    },
    {
      id: 2,
      title: "MySys",
      link: "https://mysys-app.netlify.app/",
      tech: "Nuxt JS.",
    },
    {
      id: 3,
      title: "MGlobal",
      link: "https://dashboard.mysys.ma/",
      tech: "Laravel MVC - Vue JS.",
    },
    {
      id: 4,
      title: "Coastal West Limousines",
      link: "https://coastalwestlimousines.com/",
      tech: "Wordpress.",
    },
    {
      id: 5,
      title: "Matiplas",
      link: "http://matiplas.ma/",
      tech: "Wordpress.",
    },
    {
      id: 6,
      title: "Mediexperts",
      link: "",
      tech: "Laravel MVC - Vue JS / Vuex.",
    },
    {
      id: 7,
      title: "Mediexperts Academy",
      link: "https://mediexperts-academy.netlify.app/",
      tech: "Angular / NgRx.",
    },
    {
      id: 8,
      title: "Copra Shop",
      link: "https://copra.netlify.app/",
      tech: "NodeJS: ExpressJS - Angular.",
    },
    {
      id: 9,
      title: "Hijaby",
      link: "https://play.google.com/store/apps/details?id=com.masti.hijaby&hl=fr&gl=US",
      tech: "Flutter / NodeJs: ExpressJS.",
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
