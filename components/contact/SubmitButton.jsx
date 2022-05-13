import { useContext } from "react";
import { contactFormContext } from "./ContactFormContext";

export default function SubmitButton() {
  const { formData} = useContext(contactFormContext);

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <button
      type="submit"
      className="p-3 bg-black rounded-xl text-white font-bold flex justify-center gap-1 transition-all duration-300 delay-75 hover:bg-[#341e95]"
      onClick={() => handleSubmit(event)}
    >
      Send
    </button>
  );
}
