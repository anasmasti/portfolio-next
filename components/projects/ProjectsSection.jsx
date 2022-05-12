import PagesLayout from "../layouts/PagesLayout";
import MainTitle from "../shared/MainTitle";
import ProjectsItems from "./ProjectsItems";

export default function ProjectsSection() {
  return (
    <PagesLayout>
      <div className="bg-black text-white p-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
        <div className="flex flex-col lg:w-2/3 md:w-full">
          <MainTitle title="Some projects" />
          </div>
        <div className="flex flex-col lg:w-2/3 md:w-full mt-10">
        <ProjectsItems />
        </div>
      </div>
    </PagesLayout>
  );
}
