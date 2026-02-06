import { NextResponse } from "next/server";
import { fetchMediumPosts } from "../../../lib/medium";

export async function GET() {
  const posts = await fetchMediumPosts();

  return NextResponse.json({ posts }, { status: 200 });
}
