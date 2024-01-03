"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({title}) => {
    const router = useRouter()
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

  return (
    <>
      <div className="flex justify-between py-2 px-4 items-center mb-4 mx-4 animate__animated animate__fadeIn animate__slower bg-gradient-to-br from-color-primary to-blue-500 rounded-lg shadow-lg">
        <button
          onClick={handleBack}
          className="text-color-whity hover:text-white transition-all duration-500"
        >
          <ArrowSquareLeft size={35} />
        </button>
        <h3 className="text-2xl text-color-whity text-center font-bold">
          {title}
        </h3>
      </div>
    </>
  );
};

export default Header;
