import Link from "next/link";
export default function MainButton({ title, icon, goTo }) {
  return (
    <Link href={goTo}>
      <a className="p-2 px-3 bg-[#603cfe] rounded-xl text-white font-bold flex gap-1 transition-all duration-300 delay-75 hover:bg-black">
        {title}
        {icon}
      </a>
    </Link>
  );
}
