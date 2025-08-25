import React from "react";
import Bitmap1 from "../../assets/imgs/Bitmap (1).png";
import Bitmap2 from "../../assets/imgs/Bitmap.png";
import Bitmap3 from "../../assets/imgs/Bitimage1.png";
import Bitmap from "../../assets/imgs/villa-extramorus.png";
import Bitmap4 from "../../assets/imgs/Bitmap (3).png";
import Bitmap5 from "../../assets/imgs/Bitimage2.png";
import Bitmap6 from "../../assets/imgs/Bitimage3.png";
import Bitmap7 from "../../assets/imgs/Bitimage4.png";

export default function ArchentWestGroup() {
  return (
    <div className="w-[95%] md:w-[86%] bg-white m-auto" id="Dome">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row  justify-center min-h-screen bg-white gap-10 lg:gap-24">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            ARCHENT WEST GROUP
          </h1>

          <div className="mt-8 lg:mt-0">
            <img src={Bitmap1} alt="" className="w-full" />
            <div className="mt-6 text-center">
              <p className="text-lg md:text-xl">CROWN HOUSE</p>
              <p className="text-sm text-gray-400">by 81.WAW.PL</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3 flex flex-col items-start">
          <div>
            <img src={Bitmap2} alt="" className="w-full" />
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 bg-white p-6 text-center md:text-left">
              <h2 className="text-lg md:text-xl">LUXEMBOURG APARTMENT</h2>
              <p className="text-sm text-gray-500">
                by Metaform atelier d'architecture
              </p>
            </div>

            <div className="w-full md:w-1/2 bg-black text-white p-6 text-center md:text-left">
              While much of the interior of the Luxembourg Apartment is covered
              in art by local artist SUMO, the windows of the building are
              adorned with sliding metal screens.
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-[31%] flex flex-col ">
          {/* NEWS Section */}
          <div className="relative h-[50vh] md:h-[65vh] flex flex-col">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Bitmap3})` }}
            ></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-6">
              <p className="text-sm font-light tracking-wide mb-4 opacity-90">
                Our latest
              </p>
              <hr className="w-24 border-t-2 border-white mb-4" />
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider mb-8">
                NEWS
              </h1>
            </div>
          </div>

          {/* VIEW Button Section */}
          <div className="relative h-[50vh] md:h-[65vh] flex flex-col">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Bitmap3})` }}
            >
              <div className="absolute inset-0 bg-black/80"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-6">
              <p className="text-sm mb-6 opacity-90 leading-relaxed text-center font-bold">
                More photos from
                <br />
                this collection
              </p>
              <button className="border-white border-2 font-bold text-white hover:bg-white hover:text-slate-900 px-8 py-2 tracking-wide bg-transparent">
                VIEW
              </button>
            </div>
          </div>

          {/* Urban Angles */}
          <div className="text-center py-6">
            <p className="text-lg md:text-xl">URBAN ANGLES</p>
            <p className="text-sm text-gray-400">by Kim Høltermand</p>
          </div>

          {/* ABOUT Section */}
          <div className="relative h-[50vh] md:h-[65vh] flex flex-col">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Bitmap7})` }}
            ></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-6">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider mb-8">
                ABOUT
              </h1>
              <hr className="w-24 border-t-2 border-white mb-4" />
              <p className="text-sm font-light tracking-wide mb-4 opacity-90">
                Archent West Group
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[68%]">
          <img src={Bitmap} alt="" className="w-full mt-15" />
          <div className="flex flex-col md:flex-row justify-between mt-10 gap-10">
            {/* Left Image */}
            <div className="w-full md:w-[40%]">
              <img src={Bitmap4} alt="" className="w-full" />
              <div className="text-center py-6">
                <p className="text-lg md:text-xl">SCIENCE FACULTY COIMBRA</p>
                <p className="text-sm text-gray-400">by Aires Mateus</p>
              </div>
            </div>

            {/* Right Images */}
            <div className="w-full md:w-[58%]">
              <div className="relative h-[40vh] md:h-[50vh] w-full flex flex-col">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Bitmap5})` }}
                ></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-6">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider mb-8">
                    CONTACT
                  </h1>
                  <hr className="w-24 border-t-2 border-white mb-4" />
                  <p className="text-sm font-light tracking-wide mb-4 opacity-90">
                    Archent West Group
                  </p>
                </div>
              </div>

              <div className="w-full mt-8">
                <img src={Bitmap6} alt="" className="w-full h-[80vh]" />
                <div className="text-center py-6">
                  <p className="text-lg md:text-xl">VI-SANG HOUSE</p>
                  <p className="text-sm text-gray-400">by Moon Hoon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
