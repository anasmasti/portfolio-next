import { useContext } from "react";
import { contactFormContext } from "./ContactFormContext";
import sendMessage from "../../services/contact/sendMeddase";

export default function SubmitButton() {
  const { formData } = useContext(contactFormContext);

  let handleSubmit = () => {
    event.preventDefault();
    // convert data to json for submit it
    let dataToJson = JSON.stringify(formData);
    // Send message to database
    sendMessage(dataToJson);
  };

  return (
    <button
      type="submit"
      className="p-3 bg-black rounded-xl text-white font-bold flex justify-center gap-1 transition-all duration-300 delay-75 hover:bg-[#341e95]"
      onClick={() => handleSubmit()}
    >
      Send
    </button>
  );
}
