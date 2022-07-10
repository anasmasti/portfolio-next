
export default function Textarea({name, placeholder, handleInputChange}) {
  return (
    <textarea
    name={name}
    placeholder={placeholder}
    cols="30"
    rows="10"
    className="p-2 bg-[#1e1e1e90] rounded-xl placeholder:font-bold placeholder:text-[#363636]"
    onChange={(event) => handleInputChange(event.target)}
  ></textarea>
  )
}
