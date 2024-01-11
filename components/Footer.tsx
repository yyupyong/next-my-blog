import React from "react";

function Footer() {
  return (
    <footer className="w-6/6 border-grey-100 my-16 mx-auto flex flex-col justify-center border-t-2 p-6 sm:w-[610px] md:w-[610px] lg:w-[610px]  xl:w-[610px] 2xl:w-[610px]">
      <span className="text-center text-base">
        {" "}
        Copyright by <a href="https://github.com/frontendweb3">
          {" "}
          YuuCoading{" "}
        </a>{" "}
      </span>
    </footer>
  );
}

export default Footer;
