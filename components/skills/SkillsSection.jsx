import GoHomeButton from "../shared/GoHomeButton";
import MainTitle from "../shared/MainTitle";

export default function SkillsSection() {
  return (
    <section className="bg-black text-white p-10 lg:p-24 mt-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
      <GoHomeButton />
      <MainTitle title="Skills" />
    </section>
  );
}
