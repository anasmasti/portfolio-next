import PagesLayout from "../layouts/PagesLayout";
import MainTitle from "../shared/MainTitle";

export default function SkillsSection() {
  let skills = [
    {
      id: 1,
      title: "Front-end",
      technologies: [
        { id: 1, technology: "JavaScript" },
        { id: 2, technology: "Angular, NgRx" },
        { id: 3, technology: "Vue JS, Vuex" },
        { id: 4, technology: "Nuxt JS" },
        { id: 5, technology: "Css 3, Sass" },
        { id: 6, technology: "Html 5" },
      ],
    },
    {
      id: 2,
      title: "Back-end",
      technologies: [
        { id: 1, technology: "Node JS, Express JS" },
        { id: 2, technology: "Php, Laravel MVC" },
        { id: 3, technology: "C#, Asp.Net Core" },
      ],
    },
    {
      id: 3,
      title: "Database",
      technologies: [
        { id: 1, technology: "MongoDB" },
        { id: 2, technology: "MySQL" },
      ],
    },
    {
      id: 4,
      title: "Content Management System",
      technologies: [
        { id: 1, technology: "Wordpress" },
        { id: 2, technology: "Prestashop" },
      ],
    },
    {
      id: 5,
      title: "Mobile Development",
      technologies: [{ id: 1, technology: "Dark, Flutter" }],
    },
    {
      id: 6,
      title: "Modeling",
      technologies: [{ id: 1, technology: "Unified Modeling Language" }],
    },
    {
      id: 7,
      title: "Version Management",
      technologies: [{ id: 1, technology: "Git, GitHub" }],
    },
    {
      id: 8,
      title: "Graphic Design",
      technologies: [
        { id: 1, technology: "Adobe XD" },
        { id: 2, technology: "Adobe Photoshop" },
      ],
    },
    {
      id: 9,
      title: "Microsoft Office",
      technologies: [
        { id: 1, technology: "Microsoft Excel" },
        { id: 2, technology: "Microsoft Word" },
        { id: 3, technology: "Microsoft Powerpoint" },
      ],
    },
  ];

  return (
    <PagesLayout>
      <div className="bg-black text-white p-10 lg:p-24 mt-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
        <div className="flex flex-col lg:w-1/2 md:w-full">
          <MainTitle title="Skills" />
        </div>
        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-1/2">
          {skills.map((skill) => (
            <div key={skill.id} className="mt-3">
              <h5 className="text-xl font-bold text-white">{skill.title}</h5>
              {skill.technologies.map((tech) => (
                <ul key={tech.id} className="text-gray-300">
                  <li>{tech.technology}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PagesLayout>
  );
}
