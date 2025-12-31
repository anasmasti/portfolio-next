import PropTypes from "prop-types";

export default function Input({ type, name, placeholder, handleInputChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-2 w-full bg-[#1e1e1e90] rounded-xl placeholder:font-bold placeholder:text-[#363636]"
      onChange={(event) => handleInputChange(event.target)}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
