type TextareaProps = {
  name: string;
  placeholder: string;
  value: string;
  onFieldChange: (name: string, value: string) => void;
};

export default function Textarea({
  name,
  placeholder,
  value,
  onFieldChange,
}: Readonly<TextareaProps>) {
  return (
    <textarea
      placeholder={placeholder}
      cols={30}
      rows={10}
      className="p-2 bg-[#1e1e1e90] rounded-xl placeholder:font-bold placeholder:text-[#363636]"
      name={name}
      value={value}
      onChange={(event) => onFieldChange(name, event.target.value)}
    ></textarea>
  );
}
