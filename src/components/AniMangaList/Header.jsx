import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center bg-color-primary mx-4 rounded-lg shadow-lg my-2">
      <h1 className="text-2xl font-bold text-color-whity">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-color-whity sm:text-sm underline hover:text-white transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
