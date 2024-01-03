"use client"

import { useEffect } from "react";

const RightClick = () => {
    useEffect(() => {
      const disableRightClick = (event) => {
        event.preventDefault();
      }

      document.addEventListener("contextmenu", disableRightClick);

      return () => {
        document.removeEventListener("contextmenu", disableRightClick);
      };
    }, []);

  return (
    <>
    </>
  )
}

export default RightClick