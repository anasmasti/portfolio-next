import React from "react";

export default function ProjectItem({ title, link, tech }) {
  const openModal = (projectId) => {
    console.log(projectId);
  };

  return (
    <div
      className={`p-3 my-3 bg-cover bg-no-repeat bg-center bg-mediexperts-academy rounded-xl`}
    >
      <a
        href={link}
        target="_blank"
        id="mediexperts_academy"
        onClick={openModal("mediexperts_academy")}
      >
        <h3 className="text-3xl font-bold">{title}</h3>
        <pre className="mt-5">{tech}</pre>
      </a>
    </div>
  );
}
