
export default function Textarea({name, placeholder, handleInputChange}) {
  return (
    <textarea
    name={name}
    placeholder={placeholder}
    cols="30"
    rows="10"
    className="p-2 bg-gray-800 rounded-xl placeholder:font-bold placeholder:text-gray-600"
    onChange={(event) => handleInputChange(event.target)}
  ></textarea>
  )
}
