import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Menu from "./Menu";
import NavItem from "./NavItem";
import NavItems from "./NavItems";

describe("menu components", () => {
  it("renders Menu items", () => {
    render(<Menu />);

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("renders NavItems list", () => {
    render(<NavItems />);

    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("renders NavItem with title", () => {
    render(<NavItem title="Home" icon={<span>Icon</span>} goTo="/" />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
