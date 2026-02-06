import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton", () => {
  it("renders an external link when href is provided", () => {
    render(
      <PrimaryButton href="https://example.com" external>
        Visit
      </PrimaryButton>
    );

    const link = screen.getByRole("link", { name: "Visit" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("renders a button when no href is provided", () => {
    render(<PrimaryButton>Submit</PrimaryButton>);

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
  });

  it("respects disabled state", () => {
    render(<PrimaryButton disabled>Disabled</PrimaryButton>);

    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeDisabled();
  });
});
