import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsItem from "./SkillsItem";
import SkillsItems from "./SkillsItems";
import SkillsSection from "./SkillsSection";

describe("skills components", () => {
  it("renders SkillsItem content", () => {
    render(
      <SkillsItem
        skill={{
          title: "Frontend",
          technologies: [{ id: 1, technology: "React" }],
        }}
      />
    );

    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders SkillsItems list", () => {
    render(<SkillsItems />);

    expect(screen.getByText("Front-end")).toBeInTheDocument();
  });

  it("renders SkillsSection title", () => {
    render(<SkillsSection />);

    expect(screen.getByText("My Skills")).toBeInTheDocument();
  });
});
