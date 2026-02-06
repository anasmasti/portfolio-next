import ProjectItem from "./ProjectItem";

type Project = {
  id: number;
  title: string;
  link: string;
  tech: string;
  bg: string;
  showLink?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "My Old Portfolio",
    link: "https://my-old-portfolio-website.netlify.app/",
    tech: "Angular 11, Node.js, Express.js.",
    bg: "bg-old",
    showLink: true,
  },
  {
    id: 2,
    title: "Trescal",
    link: "https://www.trescal.com/",
    tech: "JavaScript, TypeScript, Angular 17, Ngxs, Storybook, Tailwind CSS, SCSS, Material Design, Jira, Azu evOps, Git, GitFlow, Tests Unitaires (Jasmine), Tests E2E (Cypress), Figma",
    bg: "bg-trescal",
    showLink: true,
  },
  {
    id: 6,
    title: "Banque Populaire",
    link: "/",
    tech: "JavaScript, TypeScript, Angular 12, NgRx, PrimeNG, Node.js, Express.js, MongoDB, Git, GitFlow, Github, Tailwind CSS, SCSS, Docker, Tests Unitaires (Jasmine), Tests E2E (Cypress), Figma. Material Design, Jira, Azure DevOps, Git, GitFlow, Tests Unitaires (Jasmine), Tests E2E (Cypress), Adobe Xd.",
    bg: "bg-bp",
  },
  {
    id: 7,
    title: "Mediexperts Academy",
    link: "https://mediexperts-academy.netlify.app/",
    tech: "JavaScript, Angular 12, NgRx, Bootstrap, Tests E2E (Cypress), Figma.",
    bg: "bg-mediexperts",
  },
  {
    id: 9,
    title: "Hijaby",
    link: "https://play.google.com/store/apps/details?id=com.masti.hijaby&hl=fr&gl=US",
    tech: "React Native, Node.js, Express.js, Figma.",
    bg: "bg-hijaby",
    showLink: true,
  },
];

export default function ProjectsItems() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
}
