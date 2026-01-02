"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import ContactFormInputsSection from "./ContactFormInputsSection";
import SubmitButton from "./SubmitButton";
import { submitContact } from "../../app/actions/contact";

const initialState = { ok: false, message: "" };
const initialFormValues = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const [displayStatus, setDisplayStatus] = useState(initialState);
  const [formValues, setFormValues] = useState(initialFormValues);
  const clearTimerRef = useRef(null);

  useEffect(() => {
    if (!state?.message) {
      return;
    }

    setDisplayStatus(state);
    if (state.ok) {
      setFormValues(initialFormValues);
    }
    clearTimerRef.current = setTimeout(() => {
      setDisplayStatus(initialState);
    }, 4000);

    return () => {
      if (clearTimerRef.current) {
        clearTimeout(clearTimerRef.current);
        clearTimerRef.current = null;
      }
    };
  }, [state]);

  const handleFieldChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="p-10 bg-black z-10 relative rounded-2xl mt-10 flex">
      <form className="flex flex-col gap-4 w-full" action={formAction}>
        <ContactFormInputsSection
          values={formValues}
          onFieldChange={handleFieldChange}
        />
        {Object.entries(formValues).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}
        <SubmitButton status={displayStatus} />
      </form>
    </div>
  );
}
