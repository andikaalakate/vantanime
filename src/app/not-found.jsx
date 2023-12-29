"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl flex flex-col justify-center items-center mx-auto">
      <div className="flex items-center justify-center hover:scale-125 transition-all duration-500">
        <FileSearch
          size={64}
          className="text-color-whity hover:text-color-primary transition-all duration-500 cursor-pointer"
        />
        <h3 className="text-color-whity hover:text-color-primary text-5xl font-bold px-4 transition-all duration-500 cursor-pointer">
          NOT FOUND
        </h3>
      </div>
      <div>
        <Link
          href="/"
          className="text-color-whity block hover:text-color-primary text-2xl font-bold px-4 transition-all duration-500 cursor-pointer pt-8 underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
