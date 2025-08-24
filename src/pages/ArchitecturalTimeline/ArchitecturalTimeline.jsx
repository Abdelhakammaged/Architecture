"use client";
import image1 from "../../assets/imgs/image3.png";
import image2 from "../../assets/imgs/Bitimage1.png";
import image3 from "../../assets/imgs/Bitimage2.png";
import image4 from "../../assets/imgs/Bitimage3.png";
import image5 from "../../assets/imgs/Bitimage4.png";
import image6 from "../../assets/imgs/Image 7.png";

const timelineData = [
  { year: "2010", project: "Poolscape Villa" },
  { year: "2009", project: "European Lard Station" },
  { year: "2012", project: "Yahroudi Villa" },
  { year: "2013", project: "Cultural Complex Centre" },
  { year: "2011", project: "Dalbourne Villa" },
  { year: "2015", project: "Amman Rotana Hotel" },
  { year: "2008", project: "Alvar Alto Museum" },
  { year: "2014", project: "Dance & Music Theatre" },
];

const architecturalImages = [
  { src: image1, className: "col-span-1 row-span-1" },
  { src: image2, className: "col-span-1 row-span-1" },
  { src: image3, className: "col-span-1 row-span-1" },
  { src: image4, className: "col-span-1 row-span-1" },
  { src: image5, className: "col-span-1 row-span-1" },
  { src: image6, className: "col-span-1 row-span-1" },
  { src: image1, className: "col-span-1 row-span-1" },
  { src: image2, className: "col-span-1 row-span-1" },
  { src: image3, className: "col-span-1 row-span-1" },
  { src: image4, className: "col-span-1 row-span-1" },
  { src: image5, className: "col-span-1 row-span-1" },
  { src: image6, className: "col-span-1 row-span-1" },
];

export function ArchitecturalTimeline() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }
        .font-sans {
          font-family: "Inter", sans-serif;
        }
      `}</style>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-500 tracking-wide font-normal">
            Timeline
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Timeline Section */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-gray-200 pb-4"
                >
                  <div className="flex items-center space-x-6 sm:space-x-8 lg:space-x-12">
                    <span className="text-sm text-gray-400 font-sans font-light w-10">
                      {item.year}
                    </span>
                    <span className="text-sm text-gray-700 font-sans font-light tracking-wide">
                      {item.project}
                    </span>
                  </div>
                  <button className="text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-widest font-sans font-light">
                    READ
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[140px] sm:auto-rows-[160px] lg:auto-rows-[180px]">
              {architecturalImages.map((image, index) => (
                <div
                  key={index}
                  className={`${image.className} overflow-hidden bg-gray-100`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={`Architectural project ${index + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
