import ContactFormInputsSection from "./ContactFormInputsSection";
import {
  contactFormContext,
  contactFormGlobalContext,
} from "./ContactFormContext";
import SubmitButton from "./SubmitButton";
import { useEffect, useRef, useState } from "react";

const initialFormData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  message: "",
};

const initialFormGlobalData = {
  sent: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [formGlobalData, setFormGlobalData] = useState(
    initialFormGlobalData
  );
  const formRef = useRef();

  function fillFormData(data) {
    setFormData(data);
  }

  function fillFormGlobalData(data) {
    setFormGlobalData(data);
  }

  useEffect(() => {
    if (formGlobalData.sent && formRef.current) {
      formRef.current.reset();
    }
  }, [formGlobalData.sent]);

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
