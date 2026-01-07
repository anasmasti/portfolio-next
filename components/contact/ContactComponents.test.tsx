import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ContactFormInput from "./ContactFormInput";
import ContactFormInputs from "./ContactFormInputs";
import ContactFormInputsSection from "./ContactFormInputsSection";
import ContactLinks from "./ContactLinks";
import ContactSection from "./ContactSection";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Textarea from "./Textarea";

vi.mock("../../hooks/useVantaEffect", () => ({
  default: () => {},
}));

vi.mock("./ContactForm", () => ({
  default: () => <div>ContactForm</div>,
}));

describe("contact components", () => {
  it("renders ContactLinks items", () => {
    render(<ContactLinks />);

    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Messenger")).toBeInTheDocument();
    expect(screen.getByText("Telegram")).toBeInTheDocument();
    expect(screen.getByText("E-mail")).toBeInTheDocument();
  });

  it("renders ContactSection title", () => {
    render(<ContactSection />);

    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders ContactFormInput with input", () => {
    const handleChange = vi.fn();
    render(
      <ContactFormInput
        name="first_name"
        type="text"
        placeholder="First name"
        value="Anas"
        onFieldChange={handleChange}
      />
    );

    expect(screen.getAllByDisplayValue("Anas").length).toBeGreaterThan(0);
  });

  it("renders ContactFormInput with textarea", () => {
    const handleChange = vi.fn();
    render(
      <ContactFormInput
        name="message"
        type="textarea"
        placeholder="Message"
        value="Hello"
        onFieldChange={handleChange}
      />
    );

    expect(screen.getByDisplayValue("Hello")).toBeInTheDocument();
  });

  it("renders ContactFormInputs list", () => {
    const handleChange = vi.fn();
    const { getByDisplayValue } = render(
      <ContactFormInputs
        inputs={[
          {
            id: 1,
            name: "first_name",
            type: "text",
            placeholder: "First name",
          },
        ]}
        values={{ first_name: "Anas" }}
        onFieldChange={handleChange}
      />
    );

    expect(getByDisplayValue("Anas")).toBeInTheDocument();
  });

  it("renders ContactFormInputsSection groups", () => {
    const handleChange = vi.fn();
    render(
      <ContactFormInputsSection
        values={{
          first_name: "Anas",
          last_name: "",
          phone: "",
          email: "",
          message: "",
        }}
        onFieldChange={handleChange}
      />
    );

    expect(
      screen.getByPlaceholderText("First name (what should I call you?)")
    ).toBeInTheDocument();
  });

  it("renders Input and handles change", () => {
    const handleChange = vi.fn();
    render(
      <Input
        name="first_name"
        type="text"
        placeholder="First"
        value=""
        onFieldChange={handleChange}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("First"), {
      target: { value: "Anas" },
    });
    expect(handleChange).toHaveBeenCalledWith("first_name", "Anas");
  });

  it("renders Textarea and handles change", () => {
    const handleChange = vi.fn();
    const { getByPlaceholderText } = render(
      <Textarea
        name="message"
        placeholder="Message"
        value=""
        onFieldChange={handleChange}
      />
    );

    fireEvent.change(getByPlaceholderText("Message"), {
      target: { value: "Hello" },
    });
    expect(handleChange).toHaveBeenCalledWith("message", "Hello");
  });

  it("renders SubmitButton with status text", () => {
    render(<SubmitButton status={{ ok: false, message: "Try again" }} />);

    expect(screen.getByText("Try again")).toBeInTheDocument();
  });
});
