"use client";

import Input from "./Input";
import Textarea from "./Textarea";

type ContactFormInputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onFieldChange: (name: string, value: string) => void;
};

export default function ContactFormInput({
  name,
  type,
  placeholder,
  value,
  onFieldChange,
}: ContactFormInputProps) {
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
