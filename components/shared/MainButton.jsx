import Link from 'next/link'
export default function MainButton({title, icon, goTo}) {
  return (
    <Link href={goTo}>
      <a className="p-2 bg-[#341e95] rounded-lg text-white font-bold flex gap-1">
        {title}
        {icon}
      </a>
    </Link>
  );
}
