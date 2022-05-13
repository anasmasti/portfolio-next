
export default function Input({type, name, placeholder, handleInputChange}) {
  return (
    <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="p-2 w-full bg-[#503da7] rounded-xl placeholder:font-bold"
    onChange={(event) => handleInputChange(event.target)}
  />
  )
}
