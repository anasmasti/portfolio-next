
export default function Textarea({name, placeholder, handleInputChange}) {
  return (
    <textarea
    name={name}
    placeholder={placeholder}
    cols="30"
    rows="10"
    className="p-2 bg-[#0b0b0b9e] rounded-xl placeholder:font-bold placeholder:text-[#2a2a2ac7]"
    onChange={(event) => handleInputChange(event.target)}
  ></textarea>
  )
}
