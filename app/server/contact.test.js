import { describe, expect, it } from "vitest";
import {
  normalizeContactFormData,
  validateContactData,
} from "./contact";

const buildFormData = (entries) => {
  return {
    getAll(key) {
      return entries
        .filter(([entryKey]) => entryKey === key)
        .map(([, value]) => value);
    },
  };
};

describe("contact server helpers", () => {
  it("normalizes form data and trims values", () => {
    const formData = buildFormData([
      ["first_name", "  Anas  "],
      ["last_name", "Masti"],
      ["email", "  test@example.com "],
      ["message", " Hi "],
      ["phone", ""],
    ]);

    const result = normalizeContactFormData(formData);

    expect(result).toEqual({
      first_name: "Anas",
      last_name: "Masti",
      phone: "",
      email: "test@example.com",
      message: "Hi",
    });
  });

  it("returns a friendly message when email is missing", () => {
    const result = validateContactData({
      first_name: "Anas",
      last_name: "Masti",
      email: "",
      message: "Hello",
    });

    expect(result).toContain("add your email");
  });

  it("returns null when required data is present", () => {
    const result = validateContactData({
      first_name: "Anas",
      last_name: "Masti",
      email: "anas@example.com",
      message: "Hello",
    });

    expect(result).toBeNull();
  });
});
