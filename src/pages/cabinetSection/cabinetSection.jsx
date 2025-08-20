import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { CgMaximize } from "react-icons/cg";
import { GiSparkles } from "react-icons/gi";

import image1 from "../../assets/imgs/Image 8.png";
import image2 from "../../assets/imgs/image3.png";
import image3 from "../../assets/imgs/jan-antonin-kolar-1683252-unsplash_bw_compressed.png";

export default function CabinetSection() {
  const [isMaximized, setIsMaximized] = useState(false);

  const [cabinetStyles, setCabinetStyles] = useState([
    {
      id: 1,
      name: "Contemporary Modern",
      active: true,
      title: "Your Dream Home, Our Design",
      description:
        "Hendrerit consectetur fames turpis egestas lectus. Nam risus fusce per eros sollicitudin turpis. Massa taciti ad morbi cursus ante convallis curabitur varius.",
      image: image1,
    },
    {
      id: 2,
      name: "Modern Elegance",
      active: false,
      title: "Sophistication in Every Detail",
      description:
        "We blend elegance with a modern touch, ensuring every cabinet fits seamlessly into your home aesthetic.",
      image: image2,
    },
    {
      id: 3,
      name: "Clean Line Aesthetic",
      active: false,
      title: "Minimalist Perfection",
      description:
        "Straight, clean lines and refined finishes for those who love minimalist design.",
      image: image3,
    },
    {
      id: 4,
      name: "Traditional Luxury",
      active: false,
      title: "Classic Craftsmanship",
      description:
        "Our traditional luxury cabinets combine timeless beauty with premium materials.",
      image: "/placeholder.svg?height=600&width=1000&text=Traditional+Luxury",
    },
    {
      id: 5,
      name: "Historical Elegance",
      active: false,
      title: "Inspired by History",
      description:
        "Cabinets inspired by classic architecture and historical elegance.",
      image: "/placeholder.svg?height=600&width=1000&text=Historical+Elegance",
    },
    {
      id: 6,
      name: "Woodland Cozy",
      active: false,
      title: "Warm and Inviting",
      description:
        "A rustic yet stylish cabinet collection for those who love the natural charm of wood.",
      image: "/placeholder.svg?height=600&width=1000&text=Woodland+Cozy",
    },
  ]);

  const handleClick = (id) => {
    setCabinetStyles((prev) =>
      prev.map((style) => ({
        ...style,
        active: style.id === id,
      }))
    );
  };

  const activeStyle = cabinetStyles.find((style) => style.active);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center lg:text-left">
        Behind The Scenes With A DuraBuild Cabinet
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Navigation */}
        <div className="lg:col-span-1 bg-[#f7f7f7] p-4 py-8 shadow-sm rounded-md">
          <nav className="space-y-3">
            {cabinetStyles.map((style) => (
              <div
                key={style.id}
                onClick={() => handleClick(style.id)}
                className={`flex items-center justify-between p-3 cursor-pointer rounded-md transition-all ${
                  style.active
                    ? "bg-white shadow-md border-l-4 border-gray-800"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2 text-sm md:text-base text-gray-800 font-medium">
                  {style.id}. {style.name}
                </span>
                {style.active ? (
                  <BsArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-800" />
                ) : (
                  <BiChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            <GiSparkles className="h-6 w-6 text-gray-800 mb-2 md:mt-1" />
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 md:w-[35%]">
                {activeStyle.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-0 max-w-md">
                {activeStyle.description}
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] md:aspect-[22/9] overflow-hidden shadow-lg rounded-lg">
            <img
              src={activeStyle.image}
              alt={activeStyle.name}
              className="w-full h-full object-cover"
            />
            <div
              onClick={() => setIsMaximized(true)}
              className="absolute top-3 right-3 bg-white/80 p-2 rounded-md cursor-pointer hover:bg-white transition-colors"
            >
              <CgMaximize className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen modal */}
      {isMaximized && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setIsMaximized(false)}
        >
          <img
            src={activeStyle.image}
            alt={activeStyle.name}
            className="max-w-[90%] max-h-[90%] object-contain shadow-lg rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
