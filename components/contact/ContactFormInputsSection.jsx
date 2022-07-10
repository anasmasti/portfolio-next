import React from "react";
import ContactFormInputs from "./ContactFormInputs";

export default function ContactFormInputsSection() {
  let inputs = [
    {
      id: 1,
      inputs: [
        {
          id: 1,
          name: "first_name",
          type: "text",
          placeholder: "First name",
        },
        {
          id: 2,
          name: "last_name",
          type: "text",
          placeholder: "Last name",
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
          placeholder: "Phone number",
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "E-mail",
        },
        {
          id: 3,
          name: "message",
          type: "textarea",
          placeholder: "Message",
        },
      ],
      isGrouped: false,
    },
  ];

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
