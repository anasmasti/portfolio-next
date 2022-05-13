import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactFormInput({
  name,
  type,
  placeholder,
  handleInputChange,
}) {
  return (
    <>
      {type == "textarea" ? (
        <Textarea
          name={name}
          placeholder={placeholder}
          handleInputChange={handleInputChange}
        />
      ) : (
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          handleInputChange={handleInputChange}
        />
      )}
    </>
  );
}
