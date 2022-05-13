

export default function ContactFormInput({ name, type, placeholder, handleInputChange}) {
   

  return (
      <>
    {type == "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          cols="30"
          rows="10"
          className="p-2 bg-[#503da7] rounded-xl placeholder:font-bold"
          onChange={(event) => handleInputChange(event.target)}
        ></textarea>
      ) : (
         
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="p-2 w-full bg-[#503da7] rounded-xl placeholder:font-bold"
          onChange={(event) => handleInputChange(event.target)}
        />
      )}
    </>
  )
}
