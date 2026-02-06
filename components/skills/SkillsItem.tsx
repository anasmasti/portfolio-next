type SkillTechnology = {
  id: number;
  technology: string;
};

type Skill = {
  title: string;
  technologies: SkillTechnology[];
};

type SkillsItemProps = {
  skill: Skill;
};

export default function SkillsItem({ skill }: Readonly<SkillsItemProps>) {
  return (
    <div className="mt-3">
      <h5 className="text-lg font-bold text-white">{skill.title}</h5>
      {skill.technologies.map((tech) => (
        <ul key={tech.id} className="text-gray-300">
          <li className="skills-items">{tech.technology}</li>
        </ul>
      ))}
    </div>
  );
}
