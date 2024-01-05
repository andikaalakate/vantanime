import Link from "next/link";
import "animate.css";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="animate__animated animate__fadeIn animate__slower mini:sticky lg:static mini:top-0 z-50 mx-4 my-2 flex items-center justify-between rounded-b-lg bg-gradient-to-br from-color-primary to-blue-500 px-4 py-2 shadow-lg">
      <h1
        className="title mr-4 text-2xl font-bold text-color-whity"
        title={title}
      >
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="title ml-4 text-color-whity underline transition-all hover:text-white sm:text-sm md:text-xl"
          title={linkTitle}
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
