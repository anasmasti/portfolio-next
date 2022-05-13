import { useContext, useState } from "react";
import { contactFormContext } from "./ContactFormContext";
import ContactFormInput from "./ContactFormInput";

export default function ContactFormInputs({ inputs }) {
  let initFormData = {
    "first-name": "",
    "last-name": "",
    phone: "",
    email: "",
    message: "",
  };
const [contactForm, setContactForm] = useState(initFormData);
const {formData, fillFormData} = useContext(contactFormContext);

const handleInputChange = (event) => {
    const { name, value } = event;

    // setContactForm({
    //   ...contactForm,
    //   [name]: value,
    // });
    fillFormData({
      ...formData,
      [name]: value,
    })
  };

  return (
    <>
      {inputs.map((input) => (
        <ContactFormInput key={input.id} {...input} handleInputChange={handleInputChange} />
      ))}
    </>
  );
}
