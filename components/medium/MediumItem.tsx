import Image from "next/image";
import PrimaryButton from "../shared/PrimaryButton";

type MediumItemProps = {
  title: string;
  link: string;
  image: string;
  date: string;
};

export default function MediumItem({
  title,
  link,
  image,
  date,
}: Readonly<MediumItemProps>) {
  return (
    <div
      className="group relative flex h-[320px] flex-col gap-3 overflow-hidden rounded-2xl border border-white/5 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d023e2e] to-[#000000d4]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-black/85 backdrop-blur-[1px]" />
      <div className="pointer-events-none absolute -top-16 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-0 ring-1 ring-white/10" />
      <div className="relative z-10 flex h-full flex-col gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            {date}
          </p>
          <h3 className="mt-2 text-2xl font-bold">{title}</h3>
        </div>
        <div className="mt-auto">
          <PrimaryButton href={link} external className="w-fit">
            Read
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
