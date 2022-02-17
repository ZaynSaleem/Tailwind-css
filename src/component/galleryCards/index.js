import React from "react";
import { FaPlus } from "react-icons/fa";

const ImageGallery = (props) => {
  return (
    <div className="group relative w-full h-full overflow-hidden ">
      <img src={props?.image} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-[rgba(97,92,253,.4)] flex items-center justify-center text-white text-5xl font-thin transform -translate-x-full opacity-0 group-hover:translate-x-0 transition ease-in-out duration-500 group-hover:opacity-100 group-hover:cursor-pointer">
        <FaPlus />
      </div>
    </div>
  );
};

export default ImageGallery;
