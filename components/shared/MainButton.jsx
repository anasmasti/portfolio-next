import Link from 'next/link'
export default function MainButton({title, icon}) {
  return (
    <Link href={title}>
      <a className="p-3 bg-purple-900 rounded-lg text-white font-bold flex gap-1">
        {title}
        {icon}
      </a>
    </Link>
  );
}
