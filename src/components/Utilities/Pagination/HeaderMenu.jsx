import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export const HeaderMenu = ({title}) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div>
      <div className="flex justify-between p-4 mx-4 items-center my-6 animate__animated animate__fadeIn animate__slower bg-gradient-to-br from-color-primary to-blue-500 rounded-lg shadow-lg">
        <h3 className="text-2xl text-color-whity text-center font-bold">
          {title}
        </h3>
        <button
          onClick={handleBack}
          className="text-color-whity hover:text-color-primary transition-all duration-500"
        >
          <ArrowSquareLeft size={35} />
        </button>
      </div>
    </div>
  );
};
