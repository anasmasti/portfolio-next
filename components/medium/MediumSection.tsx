import MainTitle from "../shared/MainTitle";
import MediumItems from "./MediumItems";
import { fetchMediumPosts } from "../../lib/medium";

export default async function MediumSection() {
  const posts = await fetchMediumPosts();

  return (
    <section id="medium">
      <div className="bg-black text-white p-10 lg:p-24 mt-10 md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-center lg:items-center lg:flex-col">
        <div className="flex flex-col lg:w-1/2 md:w-full">
          <MainTitle title="Latest Posts" />
        </div>
        <div className="mt-12 lg:w-1/2">
          <MediumItems posts={posts} />
        </div>
      </div>
    </section>
  );
}
