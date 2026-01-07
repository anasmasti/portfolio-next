import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("../../app/actions/contact", () => ({
  submitContact: async () => ({ ok: false, message: "" }),
}));

import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("renders the form fields and submit button", () => {
    render(<ContactForm />);

    expect(
      screen.getByPlaceholderText("First name (what should I call you?)")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Last name (as on your cape)")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Email (so I can reply)")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Message (the good stuff)")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send Message" })
    ).toBeInTheDocument();
  });
});
