import MediumItem from "./MediumItem";

type MediumItemsProps = {
  posts: Array<{
    title: string;
    link: string;
    image: string;
    date: string;
  }>;
};

export default function MediumItems({ posts }: Readonly<MediumItemsProps>) {
  if (posts.length === 0) {
    return <p className="text-sm text-white/70">No posts found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <MediumItem key={post.link} {...post} />
      ))}
    </div>
  );
}
