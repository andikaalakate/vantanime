import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

const NavBar = () => {
  return (
    <header className="bg-gradient-to-br from-color-primary to-blue-500 tablet-l:sticky tablet-l:bg-opacity-75 tablet-l:shadow-lg top-0 z-50">
      <div className="flex md:flex-row flex-col gap-2 items-center md:justify-between p-4">
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
