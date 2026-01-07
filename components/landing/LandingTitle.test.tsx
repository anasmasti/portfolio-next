"use client";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LandingTitle from "./LandingTitle";

describe("LandingTitle", () => {
  it("renders the main heading copy", () => {
    render(<LandingTitle />);

    expect(screen.getByText("Hey")).toBeInTheDocument();
    expect(screen.getByText("I'm")).toBeInTheDocument();
    expect(screen.getByText("Anas Masti")).toBeInTheDocument();
    expect(screen.getByText("Js Developer")).toBeInTheDocument();
  });
});
