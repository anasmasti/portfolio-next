export type MediumPost = {
  title: string;
  link: string;
  image: string;
  date: string;
};

const FEED_URL = "https://anasmasti.medium.com/feed";

function stripCdata(value: string) {
  return value.replaceAll("<![CDATA[", "").replaceAll("]]>", "").trim();
}

function getTag(item: string, tag: string) {
  const pattern = new RegExp(
    String.raw`<${tag}[^>]*>([\s\S]*?)</${tag}>`
  );
  const match = pattern.exec(item);
  if (!match) return "";
  return stripCdata(match[1]);
}

function extractImageFromContent(content: string) {
  const pattern = /<img[^>]+src="([^"]+)"/i;
  const match = pattern.exec(content);
  return match?.[1] ?? "";
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function parseFeed(xml: string): MediumPost[] {
  const items = xml.split("<item>").slice(1).map((chunk) => {
    const item = chunk.split("</item>")[0];
    const title = getTag(item, "title");
    const link = getTag(item, "link").split("?")[0];
    const pubDate = getTag(item, "pubDate");
    const content = getTag(item, "content:encoded");
    const image = extractImageFromContent(content);

    return {
      title,
      link,
      image,
      date: formatDate(pubDate),
    };
  });

  return items.filter((item) => item.title && item.link);
}

export async function fetchMediumPosts() {
  const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const xml = await res.text();
  return parseFeed(xml);
}
