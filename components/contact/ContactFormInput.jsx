import PropTypes from "prop-types";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactFormInput({
  name,
  type,
  placeholder,
  handleInputChange,
}) {
  return (
    <>
      {type == "textarea" ? (
        <Textarea
          name={name}
          placeholder={placeholder}
          handleInputChange={handleInputChange}
        />
      ) : (
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          handleInputChange={handleInputChange}
        />
      )}
    </>
  );
}

ContactFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
