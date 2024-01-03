"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const ButtonBack = () => {
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
    <>
      <div className="flex justify-end items-center">
        <button
          onClick={handleBack}
          className="text-color-whity hover:text-color-white transition-all duration-500"
        >
          <ArrowSquareLeft size={35} />
        </button>
      </div>
    </>
  );
};

export default ButtonBack;
