import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("../../hooks/useVantaEffect", () => ({
  default: () => {},
}));

import LandingSection from "./LandingSection";

describe("LandingSection", () => {
  it("renders the landing content", () => {
    render(<LandingSection />);

    expect(screen.getByText("Hey")).toBeInTheDocument();
    expect(screen.getByText("Js Developer")).toBeInTheDocument();
  });
});
