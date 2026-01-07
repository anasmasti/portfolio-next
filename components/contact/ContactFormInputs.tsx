import ContactFormInput from "./ContactFormInput";

type ContactInput = {
  id: number;
  name: string;
  type: string;
  placeholder: string;
};

type ContactFormInputsProps = {
  inputs: ContactInput[];
  values: Record<string, string>;
  onFieldChange: (name: string, value: string) => void;
};

export default function ContactFormInputs({
  inputs,
  values,
  onFieldChange,
}: ContactFormInputsProps) {
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
