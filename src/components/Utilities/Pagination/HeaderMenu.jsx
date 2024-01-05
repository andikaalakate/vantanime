import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export const HeaderMenu = ({title}) => {
  const router = useRouter();

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleBack = (event) => {
    event.preventDefault();
    scrollTop()
    router.back();
    router.refresh()
  };

  return (
    <div className="lg:static mini:sticky mini:top-0 mini:z-50">
      <div className="flex justify-between px-4 py-2 mx-4 items-center my-6 animate__animated animate__fadeIn animate__slower bg-gradient-to-br from-color-primary to-blue-500 rounded-b-lg shadow-lg">
        <h3 className="text-2xl text-color-whity text-center font-bold">
          {title}
        </h3>
        <button
          onClick={handleBack}
          className="text-color-whity hover:text-white transition-all duration-500"
        >
          <ArrowSquareLeft size={35} />
        </button>
      </div>
    </div>
  );
};
