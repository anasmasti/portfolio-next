
export default function Textarea({name, placeholder, handleInputChange}) {
  return (
    <textarea
    name={name}
    placeholder={placeholder}
    cols="30"
    rows="10"
    className="p-2 bg-[#503da7] rounded-xl placeholder:font-bold"
    onChange={(event) => handleInputChange(event.target)}
  ></textarea>
  )
}
