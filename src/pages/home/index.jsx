import React from "react";
import banner from "../../assets/banner.png";
import jack from "../../assets/jackKhalib.png";
import signature from "../../assets/signature.png";
import thumb1 from "../../assets/thumb1.png";
import thumb2 from "../../assets/thumb2.png";
import thumb3 from "../../assets/thumb3.png";
import thumb4 from "../../assets/thumb4.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import footer from "../../assets/footer-before.png";

import Header from "../../component/header";
import Thumbnail from "../../component/thumbnail";
import TrackCard from "../../component/trackCards";
import ImageGallery from "../../component/galleryCards";
import Footer from "../../component/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <div className="h-full bg-no-repeat bg-center">
          <img
            src={banner}
            className="object-none 2xl:object-cover w-full h-full"
            alt="banner"
          />
        </div>
        <div className="absolute inset-0 z-50 flex items-center justify-center lg:text-9xl md:text-7xl sm:text-4xl text-4xl font-bold bg-gradient-to-t from-black">
          <span className=" z-50 text-white">MUSICIAN</span>
        </div>
      </div>
      <div className="2xl:p-20 lg:p-28 md:p-20 sm:p-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
          <div className="lg:p-4 bg-no-repeat bg-top">
            <img
              src={jack}
              alt="jack-image"
              className="w-full object-scale-down sm:object-none"
            />
          </div>
          <div className="m-auto space-y-10 px-6 py-7 lg:px-8 md:px-6 sm:py-8">
            <span className="text-5xl font-semibold text-[#001d38]">
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
      <div className="w-full text-center sm:py-20 py-9">
        <span className="md:text-5xl text-3xl font-semibold text-[#001d38]">
          Latest Tracks
        </span>
      </div>
      <div className="w-4/5 m-auto xl:w-3/5 mb-12">
        <TrackCard image={card1} />
        <TrackCard image={card2} />
        <TrackCard image={card3} />
      </div>

      <div className="w-full text-center sm:py-24 border-t border-[#efefef] py-9">
        <span className="md:text-5xl text-3xl font-semibold text-[#001d38]">
          Image Galleries
        </span>
      </div>
      <div className="w-4/5 m-auto md:w-full xl:w-4/5 grid grid-cols-1 md:grid-cols-5 md:space-x-7 md:px-14 md:space-y-0 space-y-4">
        <div className="col-span-2">
          <ImageGallery image={gallery1} />
        </div>

        <div className="col-span-3">
          <ImageGallery image={gallery2} />
        </div>
      </div>

      <div className="w-4/5 m-auto md:w-full xl:w-4/5 grid grid-cols-1 md:grid-cols-3 md:space-x-7 mt-5 md:px-14 md:space-y-0 space-y-4 mb-24">
        <div className="col-span-1">
          <ImageGallery image={gallery3} />
        </div>

        <div className="col-span-1">
          <ImageGallery image={gallery4} />
        </div>

        <div className="col-span-1">
          <ImageGallery image={gallery5} />
        </div>
      </div>
      <div className="w-full bg-no-repeat bg-center h-96 relative">
        <img
          src={footer}
          className="object-none 2xl:object-cover w-full h-full"
        />
        <div className="absolute inset-0 w-full bg-gradient-to-t from-[#001d38] to-[#001d3896] flex items-center justify-center flex-col">
          <span className="md:text-6xl font-semibold text-white text-4xl">
            Contact For RSVP
          </span>
          <br />
          <div>
            <a
              href="#"
              className="text-white border bg-[#ed1b1b] border-[#ed1b1b] hover:bg-transparent hover:text-[#ed1b1b] transition ease-in-out duration-150 px-11 py-3 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
