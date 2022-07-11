export default function ProjectItem({ title, link, tech, bg }) {
  return (
    <div
      className={`p-3 my-3 bg-cover bg-no-repeat bg-center ${bg} rounded-xl`}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <h3 className="text-3xl font-bold">{title}</h3>
        <pre className="mt-5">{tech}</pre>
      </a>
    </div>
  );
}
