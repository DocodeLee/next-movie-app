import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkSwitch from "./DarkSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-blue-400 py-1 px-2">
            Movie
          </span>
          <span className="text-xl hidden sm:inline">by.Next</span>
        </Link>
      </div>
    </div>
  );
}
