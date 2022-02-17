import React from "react";
import logoMusico from "../../assets/logo-musico.webp";
import {
  FaAlignJustify,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="bg-[#001d38] w-full hidden sm:block">
        <div className="flex align-middle justify-around w-full">
          <div className="flex-shrink-0">
            <img src={logoMusico} className="p-6" />
          </div>
          <div className="flex items-center h-auto md:space-x-5 lg:space-x-9 font-thin text-md text-white sm:space-x-3">
            <a href="#" className="hover:text-[#ed1b1b] hover:cursor-pointer">
              Home
            </a>
            <a href="#" className="hover:text-[#ed1b1b] hover:cursor-pointer">
              About
            </a>
            <a href="#" className="hover:text-[#ed1b1b] hover:cursor-pointer">
              Contact
            </a>
            <a href="#" className="hover:text-[#ed1b1b] hover:cursor-pointer">
              Tracks
            </a>
            <a href="#" className="hover:text-[#ed1b1b] hover:cursor-pointer">
              Blog
            </a>
            <a href="#" className="hover:text-[#ed1b1b] hover:cursor-pointer">
              Pages
            </a>
          </div>
          <div className="flex justify-between space-x-4 items-center text-md text-white ">
            <div className="hover:text-[#ed1b1b] hover:cursor-pointer border border-[#ed1b1b] border-opacity-40 rounded-full p-2">
              <FaFacebook />
            </div>
            <div className="hover:text-[#ed1b1b] hover:cursor-pointer border border-[#ed1b1b] border-opacity-40 rounded-full p-2">
              <FaTwitter />
            </div>
            <div className="hover:text-[#ed1b1b] hover:cursor-pointer border border-[#ed1b1b] border-opacity-40 rounded-full p-2">
              <FaInstagram />
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-[#001d38] w-full sm:hidden block relative">
        <div className="flex  w-full">
          <div className="flex-shrink-0">
            <img src={logoMusico} className="p-4" />
          </div>
          <div className="absolute -bottom-12 z-10 right-3 left-3 float-left bg-[#4c4c4c] p-2 font-bold text-white ">
            <div className="float-right bg-[#222] px-4 py-2 rounded">
              <a href="#" className="flex flex-wrap items-center gap-1">
                MENU 
                <FaAlignJustify />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
