import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MediumItems from "./MediumItems";
import MediumSection from "./MediumSection";

describe("medium components", () => {
  it("renders MediumSection title", () => {
    render(<MediumSection />);

    expect(screen.getByText("Latest Medium Posts")).toBeInTheDocument();
  });

  it("renders MediumItems list", () => {
    render(<MediumItems />);

    expect(
      screen.getByText("AI x Javasript : RAG with Node.js")
    ).toBeInTheDocument();
    expect(screen.getByText("Kafka Avro x Node.js")).toBeInTheDocument();
  });
});
