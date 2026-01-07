import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PagesLayout from "./PagesLayout";

describe("PagesLayout", () => {
  it("renders children content", () => {
    render(
      <PagesLayout>
        <div>Child content</div>
      </PagesLayout>
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
