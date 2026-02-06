"use client";

import ContactFormInputs from "./ContactFormInputs";

type ContactFormValues = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

type ContactFormInputsSectionProps = {
  values: ContactFormValues;
  onFieldChange: (name: string, value: string) => void;
};
type ContactFormInput = {
  id: number;
  name: keyof ContactFormValues;
  type: "text" | "email" | "textarea";
  placeholder: string;
};

type ContactFormInputGroup = {
  id: number;
  inputs: ContactFormInput[];
  isGrouped: boolean;
};

const inputs: ContactFormInputGroup[] = [
  {
    id: 1,
    inputs: [
      {
        id: 1,
        name: "first_name",
        type: "text",
        placeholder: "First name (what should I call you?)",
      },
      {
        id: 2,
        name: "last_name",
        type: "text",
        placeholder: "Last name (as on your cape)",
      },
    ],
    isGrouped: true,
  },
  {
    id: 2,
    inputs: [
      {
        id: 1,
        name: "phone",
        type: "text",
        placeholder: "Phone number (if you like talking)",
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email (so I can reply)",
      },
      {
        id: 3,
        name: "message",
        type: "textarea",
        placeholder: "Message (the good stuff)",
      },
    ],
    isGrouped: false,
  },
];

export default function ContactFormInputsSection({
  values,
  onFieldChange,
}: Readonly<ContactFormInputsSectionProps>) {
  const checkClassName = (isGrouped: boolean) =>
    isGrouped ? "flex gap-2" : "flex gap-4 flex-col";

  return (
    <>
      {inputs.map((input) => (
        <div key={input.id} className={checkClassName(input.isGrouped)}>
          <ContactFormInputs
            inputs={input.inputs}
            values={values}
            onFieldChange={onFieldChange}
          />
        </div>
      ))}
    </>
  );
}
