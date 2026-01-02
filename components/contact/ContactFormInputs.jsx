import PropTypes from "prop-types";
import ContactFormInput from "./ContactFormInput";

export default function ContactFormInputs({ inputs, values, onFieldChange }) {
  return (
    <>
      {inputs.map((input) => (
        <ContactFormInput
          key={input.id}
          {...input}
          value={values[input.name] || ""}
          onFieldChange={onFieldChange}
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
  values: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};
