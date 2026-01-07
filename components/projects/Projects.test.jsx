import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectItem from "./ProjectItem";
import ProjectsItems from "./ProjectsItems";
import ProjectsSection from "./ProjectsSection";

describe("projects components", () => {
  it("renders ProjectItem content", () => {
    render(
      <ProjectItem
        title="Demo Project"
        link="https://example.com"
        tech="React"
        bg="bg-old"
      />
    );

    expect(screen.getByText("Demo Project")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders ProjectsItems list", () => {
    render(<ProjectsItems />);

    expect(screen.getByText("My Old Portfolio")).toBeInTheDocument();
  });

  it("renders ProjectsSection title", () => {
    render(<ProjectsSection />);

    expect(screen.getByText("Some Projects")).toBeInTheDocument();
  });
});
