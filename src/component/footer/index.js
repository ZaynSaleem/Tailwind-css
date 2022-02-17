import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGooglePlus,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-h-fit sm:h-96 bg-[#001d38] relative">
      <div className="grid grid-cols-2 lg:w-full xl:w-4/5 m-auto sm:space-x-8">
        <div className="col-span-2 sm:col-span-1 p-6 text-white space-y-4">
          <h1 className="text-2xl mb-7 font-semibold">Services</h1>
          <div className="flex items-center justify-between flex-wrap">
            <input
              type="text"
              className="w-3/5 sm:w-2/5 lg:w-3/5 bg-transparent border-b border-[#334a60] text-white py-4"
            />
            <a className="py-3 px-10 bg-[#615cfd] text-white font-semibold">
              Subscribe
            </a>
          </div>
          <p className="text-white font-semibold">
            Esteem spirit temper too say adieus who direct esteem esteems
            luckily.
          </p>
        </div>

        <div className="col-span-2 sm:col-span-1 p-6 text-[#c7c7c7] space-y-4 mb-10 sm:mb-0">
          <h1 className="text-2xl mb-7 font-semibold">Contact Me</h1>

          <div className="mb-5 text-sm space-y-3">
            <p>conbusi@support.com</p>
            <p>+10 873 672 6782</p>
            <p>600/D, Green road, Kings Garden NewYork-6732</p>
          </div>

          <div className="flex flex-wrap items-center justify-between w-3/5 sm:w-4/5 xl:w-3/5">
            <div className="bg-[#3b5797] border-opacity-40 rounded-full p-3">
              <a>
                <FaFacebookF />
              </a>
            </div>
            <div className="bg-[#db4337] border-opacity-40 rounded-full p-3">
              <a>
                <FaGooglePlusG />
              </a>
            </div>
            <div className="bg-[#00aced] border-opacity-40 rounded-full p-3">
              <a>
                <FaTwitter />
              </a>
            </div>
            <div className="bg-[#b00] border-opacity-40 rounded-full p-3">
              <a>
                <FaYoutube />
              </a>
            </div>
            <div className="bg-[#ac907a] border-opacity-40 rounded-full p-3">
              <a>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:w-full xl:w-4/5 m-auto sm:space-x-8 space-y-4 sm:space-y-0 text-xs sm:text-base sm:absolute left-0 right-0 bottom-9 px-6 py-7 sm:py-0">
        <div className="sm:col-span-1">
          <p className="text-[#808e9c]">Copyright ©2022 All rights reserved</p>
        </div>
        <div className="sm:col-span-1 flex flex-wrap items-center sm:justify-around gap-3 text-[#808e9c] ">
          <div>
            <a className="hover:cursor-pointer hover:text-[#b5bcc2]">Home</a>
          </div>
          <div>
            <a className="hover:cursor-pointer hover:text-[#b5bcc2]"> About</a>
          </div>
          <div>
            <a className="hover:cursor-pointer hover:text-[#b5bcc2]"> Tracks</a>
          </div>
          <div>
            <a className="hover:cursor-pointer hover:text-[#b5bcc2]"> Blog</a>
          </div>
          <div>
            <a className="hover:cursor-pointer hover:text-[#b5bcc2]">
              {" "}
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
