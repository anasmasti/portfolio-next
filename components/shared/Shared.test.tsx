import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Copyright from "./Copyright";
import GoHomeButton from "./GoHomeButton";
import MainButton from "./MainButton";
import MainTitle from "./MainTitle";
import SocialMedia from "./SocialMedia";
import VideoBackground from "./VideoBackground";

describe("shared components", () => {
  it("renders Copyright year", () => {
    render(<Copyright />);

    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  it("renders GoHomeButton link", () => {
    const { container } = render(<GoHomeButton />);

    expect(container.querySelector("a")).toBeTruthy();
  });

  it("renders MainButton content", () => {
    render(<MainButton title="Click me" icon={<span>Icon</span>} goTo="/" />);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders MainTitle text", () => {
    render(<MainTitle title="Heading" />);

    expect(screen.getByText("Heading")).toBeInTheDocument();
  });

  it("renders SocialMedia links", () => {
    render(<SocialMedia />);

    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  });

  it("renders VideoBackground element", () => {
    const { container } = render(<VideoBackground />);

    expect(container.querySelector("video")).toBeTruthy();
  });
});
