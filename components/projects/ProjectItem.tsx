import PrimaryButton from "../shared/PrimaryButton";

type ProjectItemProps = {
  title: string;
  link: string;
  tech: string;
  bg: string;
  showLink?: boolean;
};

export default function ProjectItem({
  title,
  link,
  tech,
  bg,
  showLink,
}: Readonly<ProjectItemProps>) {
  return (
    <div
      className={`group relative flex h-[320px] flex-col gap-3 p-4 my-3 overflow-hidden rounded-2xl bg-cover bg-no-repeat bg-center shadow-[0_24px_60px_rgba(0,0,0,0.55)] ${bg}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/85 backdrop-blur-[1px]" />
      <div className="pointer-events-none absolute -top-16 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-0 ring-1 ring-white/10" />
      <div className="relative z-10 flex h-full flex-col gap-3">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="flex flex-1 flex-col gap-2">
          <p className="flex-1 overflow-auto pr-1 text-sm leading-relaxed text-gray-300">
            {tech}
          </p>
          {showLink ? (
            <PrimaryButton href={link} external className="w-fit">
              View
            </PrimaryButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
