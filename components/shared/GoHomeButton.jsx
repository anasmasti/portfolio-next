import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";

export default function GoHomeButton() {
  return (
    <Link href="/">
      <a>
        <BiHomeAlt className="text-2xl mb-10 text-gray-200 transition-all duration-300 hover:text-[#341e95]" />
      </a>
    </Link>
  );
}
