import { useContext, useState } from "react";
import {
  contactFormContext,
  contactFormGlobalContext,
} from "./ContactFormContext";
import sendMessage from "../../services/contact/sendMessage";

export default function SubmitButton() {
  const { formData, fillFormData } = useContext(contactFormContext);
  const { fillFormGlobalData } = useContext(contactFormGlobalContext);
  const [isDone, setIsDone] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = () => {
    if (
      formData.first_name == "" ||
      formData.last_name == "" ||
      formData.phone == "" ||
      formData.email == "" ||
      formData.message == ""
    ) {
      setHasError(true);
      setErrorMessage("You Must Complete All Fields ⛔️");
      setTimeout(() => {
        setHasError(false);
        setErrorMessage("");
      }, 2000);
    } else {
      sendMessage(formData)
        .then(() => {
          setIsDone(true);
          fillFormGlobalData({
            sent: true,
          });
          fillFormData({
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setIsDone(false);
            fillFormGlobalData({
              sent: false,
            });
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          setHasError(true);
          // Send message to database
          setErrorMessage("Server Error ⛔️");
          // Empty the fields
          setTimeout(() => {
            setHasError(false);
            setErrorMessage("");
          }, 2000);
        });
    }
  };

  return (
    <button
      type="button"
      className={`p-3 ${isDone && "bg-green-500"} ${hasError && "bg-red-500"} ${
        !isDone && !hasError && "bg-[#603cfe]"
      } rounded-xl text-white font-bold flex justify-center gap-1 transition-all duration-300 delay-75 hover:bg-black`}
      onClick={() => handleSubmit()}
      disabled={isDone || hasError}
    >
      {!isDone && !hasError && "Send Message"}
      {isDone && "Message Sent Successfully ✅"}
      {hasError && (errorMessage ? errorMessage : "There's An Error 📛")}
    </button>
  );
}
