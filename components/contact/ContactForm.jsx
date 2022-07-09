import ContactFormInputsSection from "./ContactFormInputsSection";
import { contactFormContext } from "./ContactFormContext";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

export default function ContactForm() {
  let initFormData = {
    "first-name": "",
    "last-name": "",
    phone: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initFormData);

  function fillFormData(data) {
    setFormData(data);
  }

 

  return (

    <div className="p-10 bg-gray-900 rounded-2xl mt-10 flex">
      <form className="flex flex-col gap-4 w-full">
        <contactFormContext.Provider value={{ formData, fillFormData }}>
          <ContactFormInputsSection />
          <SubmitButton />
        </contactFormContext.Provider>
      </form>
    </div>
  );
}
