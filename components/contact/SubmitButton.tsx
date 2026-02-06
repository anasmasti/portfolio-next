"use client";

import { useFormStatus } from "react-dom";
import PrimaryButton from "../shared/PrimaryButton";

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
  let buttonColorClass = "border-primary/40 bg-primary/10 hover:border-primary/70 hover:bg-primary/20";
  if (isSuccess) {
    buttonColorClass = "border-green-400/60 bg-green-500/20 hover:border-green-300/80 hover:bg-green-500/30";
  } else if (isError) {
    buttonColorClass = "border-red-400/60 bg-red-500/20 hover:border-red-300/80 hover:bg-red-500/30";
  }

  return (
    <PrimaryButton type="submit" disabled={pending} className={buttonColorClass}>
      {pending ? "Sending..." : status.message || "Send Message"}
    </PrimaryButton>
  );
}
