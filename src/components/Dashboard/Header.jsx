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
      <div className="flex justify-between px-4 items-center mb-4">
        <button onClick={handleBack} className="text-color-whity hover:text-color-primary transition-all duration-500">
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
