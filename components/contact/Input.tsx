type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onFieldChange: (name: string, value: string) => void;
};

export default function Input({
  type,
  name,
  placeholder,
  value,
  onFieldChange,
}: Readonly<InputProps>) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 w-full bg-[#1e1e1e90] rounded-xl placeholder:font-bold placeholder:text-[#363636]"
      name={name}
      value={value}
      onChange={(event) => onFieldChange(name, event.target.value)}
    />
  );
}
