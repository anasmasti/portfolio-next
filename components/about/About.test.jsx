import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutMeLinks from "./AboutMeLinks";
import AboutMeSection from "./AboutMeSection";
import AboutParagraph from "./AboutParagraph";

describe("about components", () => {
  it("renders AboutMeLinks actions", () => {
    render(<AboutMeLinks />);

    expect(screen.getByText("See My Skills")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  it("renders AboutMeSection title", () => {
    render(<AboutMeSection />);

    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders AboutParagraph content", () => {
    render(
      <AboutParagraph
        content={[{ id: 1, body: "Hello there" }]}
        progress={0}
      />
    );

    expect(screen.getByText("Hello there")).toBeInTheDocument();
  });
});
