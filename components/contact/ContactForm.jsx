import ContactFormInputsSection from "./ContactFormInputsSection";
import { contactFormContext } from "./ContactFormContext";
import { contactFormGlobalContext } from "./ContactFormContext";
import SubmitButton from "./SubmitButton";
import { useState, useRef } from "react";

export default function ContactForm() {
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

  const [formData, setFormData] = useState(initFormData);
  const [formGlobalData, setFormGlobalData] = useState(initFormGlobalData);
  const formRef = useRef();

  function fillFormData(data) {
    setFormData(data);
  }

  function fillFormGlobalData(data) {
    setFormGlobalData(data);
  }

  if (formGlobalData.sent == true) {
    formRef.current.reset();
  }

  return (
    <div className="p-10 bg-black z-10 relative rounded-2xl mt-10 flex">
      <form className="flex flex-col gap-4 w-full" ref={formRef}>
        <contactFormGlobalContext.Provider
          value={{ formGlobalData, fillFormGlobalData }}
        >
          <contactFormContext.Provider value={{ formData, fillFormData }}>
            <ContactFormInputsSection />
            <SubmitButton />
          </contactFormContext.Provider>
        </contactFormGlobalContext.Provider>
      </form>
    </div>
  );
}
