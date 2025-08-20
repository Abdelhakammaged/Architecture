import bgimage from "../../assets/imgs/Bitimage1.png";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white">
      <div
        className="
          w-full lg:w-[70%] 
          px-4 md:px-6 mx-auto 
          flex flex-col lg:flex-row 
          gap-10 lg:gap-20 
          items-start
        "
      >
        {/* Left Section - 14 Years of Experience */}
        <div className="w-full lg:w-[35%]">
          <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
            <img
              src={bgimage}
              alt="Abstract architectural background"
              className="absolute inset-0 z-0 w-full h-full object-cover rounded-md lg:rounded-none"
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-white w-[85%] h-[85%] lg:w-[92%] lg:h-[92%] shadow-md lg:shadow-none">
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold leading-none bg-gradient-to-r from-blue-700 via-navy-500 to-gray-500 text-transparent bg-clip-text">
                14
              </div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-gray-500">
                Years of Experience
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-12 text-center lg:text-left">
            <div className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-500">
              Last Projects
            </div>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              Make it with passion.
            </h2>
          </div>
        </div>

        {/* Right Section - About Us */}
        <div className="w-full lg:w-[75%] space-y-4 sm:space-y-6">
          <div className="text-xs sm:text-sm tracking-wider text-gray-500 text-center lg:text-left">
            About Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
            Break out of your routine with a global perspective.
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center lg:text-left">
            Based on collective work and shared knowledge, Architecture-Studio
            aims to favour dialogue and debate, to transform individual
            knowledge into increased creative potential.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center lg:text-left">
            Our Studio is a architecture practice based in Prague, Chech and
            Venice. Today, it includes 150 architects, urban planners, landscape
            and interior designers of 25 different nationalities. The company
            principle of Architecture-Studio is the collective conception. From
            the very beginning, the practice has believed in the virtues of
            exchange, crossing ideas, common effort, shred knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}
