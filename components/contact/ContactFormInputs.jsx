import { useContext } from "react";
import PropTypes from "prop-types";
import { contactFormContext } from "./ContactFormContext";
import ContactFormInput from "./ContactFormInput";

export default function ContactFormInputs({ inputs }) {
  const { formData, fillFormData } = useContext(contactFormContext);

  const handleInputChange = (event) => {
    const { name, value } = event;

    fillFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {inputs.map((input) => (
        <ContactFormInput
          key={input.id}
          {...input}
          handleInputChange={handleInputChange}
        />
      ))}
    </>
  );
}

ContactFormInputs.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ).isRequired,
};
