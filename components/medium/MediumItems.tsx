import MediumItem from "./MediumItem";

const posts = [
  {
    title: "AI x Javasript : RAG with Node.js",
    link: "https://anasmasti.medium.com/ai-x-javasript-rag-with-node-js-44ac41cd61a8",
    image:
      "https://cdn-images-1.medium.com/max/1024/1*eD5FtWNLjLgx7sT20dr4eg.png",
    date: "Feb 5, 2026",
  },
  {
    title: "Kafka Avro x Node.js",
    link: "https://anasmasti.medium.com/kafka-avro-x-node-js-5a93f680b56d",
    image:
      "https://cdn-images-1.medium.com/max/820/1*G2thEBGVWy1sBqPA0oMWaQ.png",
    date: "May 8, 2025",
  },
  {
    title: "Taming Backend Data with JavaScript",
    link:
      "https://anasmasti.medium.com/taming-backend-data-with-javascript-62dd63717b72",
    image:
      "https://cdn-images-1.medium.com/max/971/1*Sp3L4s-vnBcIxyeRf_Pswg.png",
    date: "Jul 31, 2024",
  },
  {
    title: "Angular 18 : @let Operator",
    link: "https://anasmasti.medium.com/angular-18-let-operator-62013eaab2e3",
    image:
      "https://cdn-images-1.medium.com/max/971/1*txCpqFv18gius6CXbR85EA.png",
    date: "Jun 23, 2024",
  },
];

export default function MediumItems() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <MediumItem key={post.link} {...post} />
      ))}
    </div>
  );
}
