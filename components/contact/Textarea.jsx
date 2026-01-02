import PropTypes from "prop-types";

export default function Textarea({ name, placeholder, value, onFieldChange }) {
  return (
    <textarea
      placeholder={placeholder}
      cols="30"
      rows="10"
      className="p-2 bg-[#1e1e1e90] rounded-xl placeholder:font-bold placeholder:text-[#363636]"
      name={name}
      value={value}
      onChange={(event) => onFieldChange(name, event.target.value)}
    ></textarea>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};
