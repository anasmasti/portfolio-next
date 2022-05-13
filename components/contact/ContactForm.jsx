import { useState } from "react";

export default function ContactForm() {
  const [contratForm, setContactForm] = useState({
    "first-name": "",
    "last-name": "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContactForm({
      ...contratForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contratForm);
  };

  return (
    <div className="p-10 bg-[#341e95c5] rounded-2xl mt-10 flex">
      <form className="flex flex-col gap-4 w-full">
        <div className="flex gap-2">
          <input
            type="text"
            name="first-name"
            placeholder="First name"
            className="p-2 w-full bg-[#503da7] rounded-xl placeholder:font-bold"
            onChange={() => handleInputChange(event)}
          />
          <input
            type="text"
            name="last-name"
            placeholder="Last name"
            className="p-2 w-full bg-[#503da7] rounded-xl placeholder:font-bold"
            onChange={() => handleInputChange(event)}
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="p-2 bg-[#503da7] rounded-xl placeholder:font-bold"
          onChange={() => handleInputChange(event)}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="p-2 bg-[#503da7] rounded-xl placeholder:font-bold"
          onChange={() => handleInputChange(event)}
        />
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
          className="p-2 bg-[#503da7] rounded-xl placeholder:font-bold"
          onChange={() => handleInputChange(event)}
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-black rounded-xl text-white font-bold flex justify-center gap-1 transition-all duration-300 delay-75 hover:bg-[#341e95]"
          onClick={() => handleSubmit(event)}
        >
          Send
        </button>
      </form>
    </div>
  );
}
