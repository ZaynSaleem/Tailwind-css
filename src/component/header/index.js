import React from "react";
import logoMusico from "../../assets/logo-musico.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-slate-900 w-full hidden  sm:block">
      <div className="flex align-middle justify-around w-full">
        <div className="flex-shrink-0">
          <img src={logoMusico} className="p-6" />
        </div>
        <div className="flex items-center h-auto md:space-x-5 lg:space-x-9 font-thin text-md text-white sm:space-x-3">
          <a href="#" className="hover:text-orange-700 hover:cursor-pointer">
            Home
          </a>
          <a href="#" className="hover:text-orange-700 hover:cursor-pointer">
            About
          </a>
          <a href="#" className="hover:text-orange-700 hover:cursor-pointer">
            Contact
          </a>
          <a href="#" className="hover:text-orange-700 hover:cursor-pointer">
            Tracks
          </a>
          <a href="#" className="hover:text-orange-700 hover:cursor-pointer">
            Blog
          </a>
          <a href="#" className="hover:text-orange-700 hover:cursor-pointer">
            Pages
          </a>
        </div>
        <div className="flex justify-between space-x-4 items-center text-md text-white ">
          <div className="hover:text-orange-700 hover:cursor-pointer border border-orange-700 border-opacity-40 rounded-full p-2">
            <FaFacebook />
          </div>
          <div className="hover:text-orange-700 hover:cursor-pointer border border-orange-700 border-opacity-40 rounded-full p-2">
            <FaTwitter />
          </div>
          <div className="hover:text-orange-700 hover:cursor-pointer border border-orange-700 border-opacity-40 rounded-full p-2">
            <FaInstagram />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
