
export default function Input({type, name, placeholder, handleInputChange}) {
  return (
    <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="p-2 w-full bg-gray-800 rounded-xl placeholder:font-bold placeholder:text-gray-600"
    onChange={(event) => handleInputChange(event.target)}
  />
  )
}
