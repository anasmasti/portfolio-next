"use client";

import { useFormStatus } from "react-dom";

type SubmitStatus = {
  ok?: boolean;
  message?: string;
};

type SubmitButtonProps = {
  status: SubmitStatus;
};

export default function SubmitButton({ status }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const isSuccess = Boolean(status?.ok && status?.message);
  const isError = Boolean(!status?.ok && status?.message);
  let buttonColorClass = "bg-primary";
  if (isSuccess) {
    buttonColorClass = "bg-green-500";
  } else if (isError) {
    buttonColorClass = "bg-red-500";
  }

  const buttonClassName = `p-3 rounded-xl text-white font-bold flex justify-center gap-1 transition-all duration-300 delay-75 hover:bg-black ${buttonColorClass}`;

  return (
    <button type="submit" className={buttonClassName} disabled={pending}>
      {pending ? "Sending..." : status.message || "Send Message"}
    </button>
  );
}
