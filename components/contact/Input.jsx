
export default function Input({type, name, placeholder, handleInputChange}) {
  return (
    <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="p-2 w-full bg-[#0b0b0b9e] rounded-xl placeholder:font-bold placeholder:text-[#2a2a2ac7]"
    onChange={(event) => handleInputChange(event.target)}
  />
  )
}
