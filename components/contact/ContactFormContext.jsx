import React from "react";

let initFormData = {
  "first-name": "",
  "last-name": "",
  phone: "",
  email: "",
  message: "",
};

export const contactFormContext = React.createContext(initFormData);
