import React from "react";

export const initialFormData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  message: "",
};

export const initialFormGlobalData = {
  sent: false,
};

export const contactFormContext = React.createContext({
  formData: initialFormData,
  fillFormData: () => {},
});

export const contactFormGlobalContext = React.createContext({
  formGlobalData: initialFormGlobalData,
  fillFormGlobalData: () => {},
});
