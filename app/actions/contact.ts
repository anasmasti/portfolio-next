"use server";

import {
  normalizeContactFormData,
  sendContact,
  validateContactData,
} from "../server/contact";

export async function submitContact(_prevState, formData) {
  const data = normalizeContactFormData(formData);
  const validationError = validateContactData(data);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  return sendContact(data);
}
