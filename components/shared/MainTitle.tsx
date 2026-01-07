"use client";

type MainTitleProps = {
  title: string;
};

export default function MainTitle({ title }: MainTitleProps) {
  return (
    <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold md:w-1/2 lg:w-1/2">
      {title}
    </h2>
  );
}
