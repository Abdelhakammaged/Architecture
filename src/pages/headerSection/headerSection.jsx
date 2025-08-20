import { useEffect, useState } from "react";
import BarIcon from "../../assets/icons/barIcon";
import ScrollIcon from "../../assets/icons/scrollIcon";
import Searchicon from "../../assets/icons/searchicon";
import logo from "../../assets/imgs/Group 1154.png";
import Discover from "../../assets/imgs/Title - Transparent TXT image (1).png";
import image2 from "../../assets/imgs/jan-antonin-kolar-1683252-unsplash_bw_compressed.png";
import image3 from "../../assets/imgs/modern-essentials-790188-unsplash_bw_compressed.png";

export default function Component() {
  const backgrounds = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/side_Post-VhWZwma6MVuZ1W8aQa55jb1eV6UVJX.png",
    image2,
    image3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-change background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgrounds[currentIndex]})`,
      }}
    >
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 md:h-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 text-sm text-gray-700">
          <div className="me-10">
            <BarIcon />
          </div>
          <a href="#">Dome</a>
          <span>/</span>
          <a href="#">About</a>
          <span>/</span>
          <a href="#">Expertise</a>
          <span>/</span>
          <a href="#">Projects</a>
          <span>/</span>
          <a href="#">Construction</a>
          <span>/</span>
          <a href="#">Training</a>
          <span>/</span>
          <a href="#">Management</a>
          <span>/</span>
          <a href="#">Pricing</a>
          <span>/</span>
          <a href="#">Contacts</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <BarIcon />
        </div>

        <div className="hidden md:flex items-center">
          <span className="text-md mr-2">SEARCH</span>
          <Searchicon />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative">
        {/* Side Navigation (hidden on small screens) */}{" "}
        {/* Side Navigation */}{" "}
        <div className="absolute left-0 top-[45%] -translate-y-1/2 z-20  hidden lg:block">
          {" "}
          <div className="w-12 flex flex-col items-center space-y-20 px-10 py-8 ">
            {" "}
            <div className="relative flex flex-col items-center">
              {" "}
              <div className="text-xs text-gray-500 tracking-widest transform -rotate-90 whitespace-nowrap">
                {" "}
                ARCHITECTURE{" "}
              </div>{" "}
              {/* Add slash between items */}{" "}
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-11 text-gray-400 -rotate-90">
                {" "}
                /{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative flex flex-col items-center">
              {" "}
              <div className="text-xs text-gray-500 tracking-widest transform -rotate-90 whitespace-nowrap mt-10">
                {" "}
                OFFICE LOCATION{" "}
              </div>{" "}
              {/* Add slash between items */}{" "}
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-13 text-gray-400 -rotate-90 ">
                {" "}
                /{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative flex flex-col items-center">
              {" "}
              <div className="text-xs text-gray-500 tracking-widest transform -rotate-90 whitespace-nowrap mt-6">
                {" "}
                PORTFOLIO{" "}
              </div>{" "}
              {/* Add slash between items */}{" "}
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-8 text-gray-400 -rotate-90">
                {" "}
                /{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative flex flex-col items-center">
              {" "}
              <div className="text-xs text-gray-500 tracking-widest transform -rotate-90 whitespace-nowrap">
                {" "}
                FACEBOOK{" "}
              </div>{" "}
              {/* Add slash between items */}{" "}
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-7 text-gray-400 -rotate-90">
                {" "}
                /{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative flex flex-col items-center">
              {" "}
              <div className="text-xs text-gray-500 tracking-widest transform -rotate-90 whitespace-nowrap">
                {" "}
                INSTAGRAM{" "}
              </div>{" "}
              {/* Add slash between items */}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Hero Section */}
        <div className="relative h-[80vh] md:h-screen flex items-center justify-center">
          <div className="absolute inset-0 top-[55%] md:top-[63%] flex items-center justify-center px-4">
            <div className="text-center text-white max-w-lg md:max-w-xl">
              <img
                src={Discover}
                alt="Discover"
                className="mx-auto w-2/3 md:w-auto"
              />
              <h2 className="text-xl md:text-3xl font-light tracking-wide flex items-center gap-2 md:gap-4">
                <span className="flex-1 border-b border-white"></span>
                Virgin Lands
                <span className="flex-1 border-b border-white"></span>
              </h2>
              <p className="text-xs md:text-sm opacity-90 max-w-xs md:max-w-sm mx-auto mt-2">
                What you fail you learn from the mistakes you made and the
                experience you to work even harder.
              </p>
            </div>
          </div>

          {/* Scroll Indicator (hidden on small screens) */}
          {/* <div className="absolute bottom-2 left-4 md:left-8 flex items-center text-white text-xs md:text-sm">
            <ScrollIcon />
            <span className="ms-2">Scroll to see more</span>
          </div> */}

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {backgrounds.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
