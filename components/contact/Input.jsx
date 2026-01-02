import PropTypes from "prop-types";

export default function Input({
  type,
  name,
  placeholder,
  value,
  onFieldChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 w-full bg-[#1e1e1e90] rounded-xl placeholder:font-bold placeholder:text-[#363636]"
      name={name}
      value={value}
      onChange={(event) => onFieldChange(name, event.target.value)}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};
