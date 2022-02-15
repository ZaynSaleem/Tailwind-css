import React from "react";
import banner from "../../assets/banner.png";
import jack from "../../assets/jackKhalib.png";
import signature from "../../assets/signature.png";
import thumb1 from "../../assets/thumb1.png";
import thumb2 from "../../assets/thumb2.png";
import thumb3 from "../../assets/thumb3.png";
import thumb4 from "../../assets/thumb4.png";

import Header from "../../component/header";
import Thumbnail from "../../component/thumbnail";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <div className="h-full bg-no-repeat bg-center">
          <img src={banner} className="object-none h-full" alt="banner" />
        </div>
        <div className="absolute inset-0 z-50 flex items-center justify-center lg:text-9xl md:text-7xl sm:text-4xl text-4xl font-bold bg-gradient-to-t from-black">
          <span className=" z-50 text-white">MUSICIAN</span>
        </div>
      </div>
      <div className="lg:p-28 md:p-20 sm:p-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
          <div className="lg:p-4">
            <img
              src={jack}
              alt="jack-image"
              className="w-full object-contain"
            />
          </div>
          <div className="m-auto space-y-10 lg:px-8 md:px-6 sm:py-8">
            <span className="text-5xl font-semibold text-gray-900">
              Jack Kalib
            </span>
            <p className="text-gray-500">
              Esteem spirit temper too say adieus who direct esteem. It esteems
              luckily or picture placing drawing. Apartments frequently or
              motionless on reasonable projecting expression enim ad minim
              veniam quis nostrud exercitation we have supported programmes to
              help alleviate human suffering through animal welfare when people
              might depend.
            </p>
            <img src={signature} alt="signature" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <Thumbnail image={thumb1} />
        <Thumbnail image={thumb2} />
        <Thumbnail image={thumb3} />
        <Thumbnail image={thumb4} />
        {/* <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/> */}
      </div>
    </div>
  );
};

export default Home;
