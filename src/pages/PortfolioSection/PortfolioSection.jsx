import image1 from "../../assets/imgs/jan-antonin-kolar-1683252-unsplash_bw_compressed.png";
import image2 from "../../assets/imgs/modern-essentials-790188-unsplash_bw_compressed.png";
import image3 from "../../assets/imgs/jon-tyson-588204-unsplash_bw_compressed.png";

export default function PortfolioSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {/* Photography Section */}
        <div className="flex flex-col items-center md:items-center">
          <img
            src={image1}
            alt="Hallway with arched ceilings"
            className="object-cover w-full h-auto max-w-md"
          />
        </div>
        <div className="mt-6 md:mt-[25%] md:ms-[15%] h-full flex flex-col items-center md:items-start">
          <h3 className="text-xl font-light text-gray-800 tracking-widest uppercase font-serif text-center md:text-left">
            Photography
          </h3>
          <div className="w-24 border-t border-gray-300 mt-2"></div>
        </div>

        {/* Apparel Design Section */}
        <div className="relative flex flex-col items-center md:block">
          <div className="flex h-full md:order-none md:mt-24 md:ms-[35%] order-2 mt-6">
            <h3 className="text-xl font-light text-gray-800 tracking-widest uppercase font-serif text-center md:text-left">
              Apparel Design
              <div className="w-24 border-t border-gray-300 mt-2 mx-auto md:mx-0"></div>
            </h3>
          </div>
          <div className="flex flex-col items-center md:items-start md:absolute md:right-[-70%] md:top-[-180%] mt-6 md:mt-0">
            <img
              src={image2}
              alt="T-shirts on hangers"
              className="object-cover w-full h-auto max-w-md"
            />
          </div>
        </div>

        {/* Branding Section */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-center mt-6 md:mt-[20%] gap-6">
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <img
              src={image3}
              alt="Branded coffee bag"
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-center md:items-start ms-0 md:ms-[12%]">
            <h3 className="text-xl font-light text-gray-800 tracking-widest uppercase font-serif text-center md:text-left">
              Branding
              <div className="w-24 border-t border-gray-300 mt-2 mx-auto md:mx-0"></div>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
