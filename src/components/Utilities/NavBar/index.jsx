import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

const NavBar = () => {
  return (
    <header className="bg-color-primary">
      <div className="flex md:flex-row flex-col gap-2 items-center justify-between p-4">
        <Link href="/" className="font-bold text-white text-2xl">
          VantaNime.
        </Link>
        <InputSearch />
        <UserAction />
      </div>
    </header>
  );
};

export default NavBar;
