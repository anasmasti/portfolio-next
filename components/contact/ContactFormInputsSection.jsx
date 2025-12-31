import React from "react";
import ContactFormInputs from "./ContactFormInputs";

const inputs = [
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

export default function ContactFormInputsSection() {

  const checkClassName = (isGrouped) => {
    if (isGrouped) return "flex gap-2";
    else return "flex gap-4 flex-col";
  };

  return (
    <>
      {inputs.map((input) => (
        <div key={input.id} className={checkClassName(input.isGrouped)}>
          <ContactFormInputs inputs={input.inputs} />
        </div>
      ))}
    </>
  );
}
