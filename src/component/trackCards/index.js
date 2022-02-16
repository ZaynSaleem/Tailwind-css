import React from "react";
import card1 from "../../assets/card1.png";
const TrackCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <div className="col-span-1">
        <img src={card1} />
      </div>
      <div className="sm:col-span-2 md:col-span-2 flex items-center flex-wrap py-4">
        <span className="text-3xl w-full font-semibold">Frando Kally</span>
        <span className="text-gray-500 w-full">10 November, 2019</span>
        <span className=" w-full">00:0000:02</span>
      </div>
      <div className="py-3 col-span-3 sm:col-span-3 lg:py-0 md:col-span-1 flex items-center md:justify-end sm:justify-start">
        <a
          href="#"
          className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white transition ease-in-out duration-150 px-11 py-3 font-semibold"
        >
          Buy Album
        </a>
      </div>
    </div>
  );
};

export default TrackCard;
