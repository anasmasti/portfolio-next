import MainTitle from "../shared/MainTitle";
import MediumItems from "./MediumItems";

export default function MediumSection() {
  return (
    <section id="medium">
      <div className="bg-black text-white p-10 lg:p-24 mt-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
        <div className="flex flex-col lg:w-1/2 md:w-full">
          <MainTitle title="Latest Posts" />
        </div>
        <div className="mt-12 lg:w-1/2">
          <MediumItems />
        </div>
      </div>
    </section>
  );
}
