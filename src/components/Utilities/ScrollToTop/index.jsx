"use client"

import { ArrowCircleUp } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-2 right-2 m-2 justify-end flex ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="rounded-full bg-color-primary text-color-whity text-xl hover:text-white hover:bg-blue-900 transition-all duration-500"
      >
        <ArrowCircleUp size={46} />
      </button>
    </div>
  );
};

export default ScrollToTop;
