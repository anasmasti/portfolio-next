export default function ProjectItem({ title, link, tech, bg }) {
  return (
    <div
      className={`flex flex-col gap-2 p-3 my-3 bg-cover bg-no-repeat bg-center ${bg} rounded-xl`}
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="break-words text-gray-300">{tech}</p>
    </div>
  );
}
