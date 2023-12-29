import SkillsItem from "./SkillsItem";

export default function SkillsItems() {
  let skills = [
    {
      id: 1,
      title: "Front-end",
      technologies: [
        {
          id: 1,
          technology:
            "JavaScript Ecosystem (TypeScript, ESLint, Prettier, Husky, NPM, Yarn, Babel, Vite, Webpack..)",
        },
        { id: 2, technology: "Angular (NgRx, Ngxs, Nx Monorepos)" },
        { id: 3, technology: "React Ecosystem (Next.js, Redux)" },
        { id: 3, technology: "Vue Js 3 (NuxtJs, Vuex/Pinia)" },
        { id: 5, technology: "Unit Testing (Jest, Jasmine)" },
        { id: 5, technology: "E2E Testing (Cypress)" },
        { id: 4, technology: "Css 3 (Sass, Tailwind css, Bootstrap)" },
        { id: 6, technology: "Html 5" },
      ],
    },
    {
      id: 2,
      title: "Back-end",
      technologies: [{ id: 1, technology: "Node.js (Express.js)" }],
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
      technologies: [{ id: 1, technology: "React Native" }],
    },

    {
      id: 7,
      title: "Version Management",
      technologies: [{ id: 1, technology: "Git (GitHub, GitLab)" }],
    },
    {
      id: 88,
      title: "Methodologies",
      technologies: [{ id: 1, technology: "Agile" }],
    },
    {
      id: 883,
      title: "DevOps",
      technologies: [
        { id: 1, technology: "Docker" },
        { id: 2, technology: "Azure DevOps Cloud" },
      ],
    },
    {
      id: 8,
      title: "Graphic Design",
      technologies: [
        { id: 3, technology: "Figma" },
        { id: 1, technology: "Adobe XD" },
        { id: 2, technology: "Adobe Photoshop" },
      ],
    },
    {
      id: 6,
      title: "Modeling",
      technologies: [{ id: 1, technology: "Unified Modeling Language" }],
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
    <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-1/2">
      {skills.map((skill) => (
        <SkillsItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
