import { useContext, useState } from "react";
import {
  contactFormContext,
  contactFormGlobalContext,
  initialFormData,
} from "./ContactFormContext";
import sendMessage from "../../services/contact/sendMessage";

const isMissingRequiredField = (formData) =>
  Object.values(formData).includes("");

export default function SubmitButton() {
  const { formData, fillFormData } = useContext(contactFormContext);
  const { fillFormGlobalData } = useContext(contactFormGlobalContext);
  const [isDone, setIsDone] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = () => {
    if (isMissingRequiredField(formData)) {
      setHasError(true);
      setErrorMessage("All fields, please. I can't read minds (yet).");
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
          fillFormData({ ...initialFormData });
          setTimeout(() => {
            setIsDone(false);
            fillFormGlobalData({
              sent: false,
            });
          }, 3000);
        })
        .catch((error) => {
          setHasError(true);
          const fallbackMessage =
            "Oops. The internet tripped. Please try again.";
          setErrorMessage(error?.response?.data?.message || fallbackMessage);
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
      {isDone && "Message sent. You rock."}
      {hasError && (errorMessage || "Hmm. That didn't work.")}
    </button>
  );
}
