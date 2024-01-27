import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Nav() {
  return (
    <div className="container mx-auto my-4 flex  flex-col items-center  justify-center  py-3  px-0 sm:flex-col sm:justify-center sm:px-0 md:flex-row md:justify-between md:px-3 lg:flex-row lg:justify-between lg:px-3 xl:flex-row xl:justify-between xl:px-3 2xl:flex-row 2xl:justify-between 2xl:px-3">
      <a href="/" className="text-center text-2xl text-white">
        Kim yupyong
      </a>

      <nav className="md:justify-right mt-5 inline-flex items-start justify-center gap-3 text-left font-medium text-white sm:mt-5 sm:justify-center sm:gap-5 md:mt-0 md:gap-10 lg:mt-0 lg:gap-10  xl:mt-0 xl:gap-10 2xl:mt-0 2xl:gap-10">
        <Link
          href={"/"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          Home
        </Link>
        <Link
          href={"/tag/programming"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          Programming
        </Link>
        <Link
          href={"/tag/Flutter"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          Flutter
        </Link>
        <Link
          href={"/tag/android"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          Android
        </Link>
        <Link
          href={"/tag/think"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          Think
        </Link>
        <Link
          href={"/page/music"}
          className="m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
        >
          Music
        </Link>
      </nav>
      <div className="hidden flex-row items-center justify-between sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
        <Link href="#" target="_blank">
          {" "}
          <FaTwitter className="mx-3 text-white" />{" "}
        </Link>
        <Link href="#" target="_blank">
          {" "}
          <FaInstagram className="mx-3 text-white" />{" "}
        </Link>
        <Link href="#" target="_blank">
          {" "}
          <FaLinkedinIn className="mx-3 text-white" />{" "}
        </Link>

        <button
          type="button"
          className="mx-auto inline-flex w-[150px] flex-col items-center justify-center gap-2.5 rounded-lg bg-[#dce8fc] px-5 py-2.5 text-center font-medium text-[rgba(35,46,82,1)]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Nav;
