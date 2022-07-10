import React from "react";

let initFormData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  message: "",
};

let initFormGlobalData = {
  sent: false,
};

export const contactFormContext = React.createContext(initFormData);
export const contactFormGlobalContext = React.createContext(initFormGlobalData);
