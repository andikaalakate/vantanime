"use client"

import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFooter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleFooter} className="absolute bottom-28 right-28">Toggle Footer</button>
      {isOpen && (
        <footer className="w-full mt-8 bg-color-primary py-8 my-auto absolute bottom-0 block">
          <div className="container mx-auto text-center">
            <p className="font-medium text-sm text-color-whity">
              Dibuat oleh{" "}
              <a
                href="https://github.com/andikaalakate/"
                target="_blank"
                className="font-bold text-white"
                rel="noopener noreferrer"
              >
                Andika Alakate
              </a>
              , menggunakan{" "}
              <a
                href="https://tailwindcss.com"
                className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text"
                rel="noopener noreferrer"
              >
                Next
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com"
                className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text"
                rel="noopener noreferrer"
              >
                React
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com"
                className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text"
                rel="noopener noreferrer"
              >
                Prisma
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com"
                className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text"
                rel="noopener noreferrer"
              >
                Jikan API
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com"
                className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text"
                rel="noopener noreferrer"
              >
                Tailwind
              </a>
              .
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
