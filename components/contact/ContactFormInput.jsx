"use client";

import PropTypes from "prop-types";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactFormInput({
  name,
  type,
  placeholder,
  value,
  onFieldChange,
}) {
  const field =
    type === "textarea" ? (
      <Textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onFieldChange={onFieldChange}
      />
    ) : (
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onFieldChange={onFieldChange}
      />
    );

  return <div className="flex flex-col w-full">{field}</div>;
}

ContactFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};
