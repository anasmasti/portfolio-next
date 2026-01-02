import sendContactMessage from "../../services/contact/sendMessage";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const normalizeContactFormData = (formData) => {
  const readField = (key) => {
    const values = formData.getAll(key);
    for (let i = values.length - 1; i >= 0; i -= 1) {
      const value = values[i];
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
    return "";
  };

  return {
    first_name: readField("first_name"),
    last_name: readField("last_name"),
    phone: readField("phone"),
    email: readField("email"),
    message: readField("message"),
  };
};

export const validateContactData = (data) => {
  if (!data) {
    return "Nice try. My inbox is empty and so is your form.";
  }

  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "message",
  ];

  const missingFields = requiredFields.filter((field) => !data[field]);
  const filledFields = requiredFields.filter((field) => data[field]);
  if (missingFields.length === requiredFields.length) {
    return "Nice try. My inbox is empty and so is your form.";
  }
  if (missingFields.length > 0) {
    if (missingFields.includes("email")) {
      return "I've got your name - now add your email so I can reply.";
    }
    if (missingFields.includes("message")) {
      return "You teased me. Drop a message and make it count.";
    }
    const picked = filledFields.slice(0, 2).join(" & ");
    return `Got ${picked || "something"}, but I need the full set.`;
  }

  if (data.email && !emailPattern.test(data.email)) {
    return "That email looks like it fell off a keyboard.";
  }

  return null;
};

export const sendContact = async (data) => {
  try {
    await sendContactMessage(data);
    return { ok: true, message: "Message sent. You rock." };
  } catch (error) {
    const fallbackMessage =
      "Oops. The internet tripped. Please try again.";
    const message = error?.response?.data?.message || fallbackMessage;
    return { ok: false, message };
  }
};
