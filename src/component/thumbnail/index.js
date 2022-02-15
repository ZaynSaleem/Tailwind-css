import React from "react";
import { FaPlay } from "react-icons/fa";
import thumb1 from "../../assets/thumb1.png";

const Thumbnail = (props) => {
  return (
    <>
      <div className="relative h-full lg:m-1">
        <img src={props?.image} alt="thumbnail-1" className="w-full sm:w-full" />
        <div className="absolute inset-0 transition">
          <div className="group relative h-full  transition-all hover:cursor-pointer">
            <div className="bg-red-600 lg:opacity-0 group-hover:opacity-100 group-hover:top-40 ease-in-out duration-700 w-16 h-16 absolute -translate-x-1/2 top-32 left-1/2  rounded-full flex items-center justify-center text-white sm:top-2/4">
              <FaPlay />
            </div>
            <div className="absolute lg:bottom-0 md:bottom-8 sm:bottom-4 left-10 group-hover:bottom-6 ease-in-out duration-700 group-hover:opacity-100 lg:opacity-0">
              <p className="capitalize text-red-600">New york show 2022</p>
              <span className="text-2xl font-semibold text-white">
                Shadow of My Dream
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
