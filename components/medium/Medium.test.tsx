import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MediumItems from "./MediumItems";

describe("medium components", () => {
  it("renders MediumItems list", () => {
    render(
      <MediumItems
        posts={[
          {
            title: "AI x Javasript : RAG with Node.js",
            link: "https://example.com/1",
            image: "https://cdn-images-1.medium.com/max/1024/1.png",
            date: "Feb 5, 2026",
          },
          {
            title: "Kafka Avro x Node.js",
            link: "https://example.com/2",
            image: "https://cdn-images-1.medium.com/max/1024/2.png",
            date: "May 8, 2025",
          },
        ]}
      />
    );

    expect(
      screen.getByText("AI x Javasript : RAG with Node.js")
    ).toBeInTheDocument();
    expect(screen.getByText("Kafka Avro x Node.js")).toBeInTheDocument();
  });
});
