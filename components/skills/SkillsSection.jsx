import PagesLayout from "../layouts/PagesLayout";
import MainTitle from "../shared/MainTitle";
import SkillsItems from "./SkillsItems";

export default function SkillsSection() {
  return (
    <PagesLayout>
      <div className="bg-black text-white p-10 lg:p-24 mt-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
        <div className="flex flex-col lg:w-1/2 md:w-full">
          <MainTitle title="Skills" />
        </div>
        <SkillsItems />
      </div>
    </PagesLayout>
  );
}
