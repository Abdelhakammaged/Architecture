import image3 from "../../assets/imgs/jon-tyson-588204-unsplash_bw_compressed.png";

export default function ProjectHighlightSection() {
  return (
    <section className="py-16 px-6 bg-white space-y-20">
      {/* First block */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
          <img
            src={image3}
            alt="Modern villa with a pool"
            width={700}
            height={500}
            className="object-cover w-full h-auto max-w-full"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 relative mt-8 md:mt-20 order-1 md:order-2">
          <div className="flex items-center mb-4 md:absolute md:left-[-13%] static">
            <div className="w-16 md:w-24 h-[1px] bg-gray-400"></div>
            <span className="text-sm text-gray-500 ml-4">2010</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 mt-4 md:mt-10">
            Poolscape Villa
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-md">
            The Seascape Villas project constitutes one of the first urban
            interventions in this very unique context, a landscape dominated by
            mountains and sea.
          </p>
          <a
            href="#"
            className="flex items-center text-gray-900 hover:text-gray-700 group"
          >
            <span className="text-sm uppercase tracking-wider mr-2">READ</span>
          </a>
        </div>
      </div>

      {/* Second block */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-8">
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 relative mt-8 md:mt-20 order-1 md:order-1">
          <div className="flex items-center mb-4 md:absolute md:right-[-13%] static">
            <span className="text-sm text-gray-500 mr-4">2009</span>
            <div className="w-16 md:w-24 h-[1px] bg-gray-400"></div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 mt-4 md:mt-10 md:ms-[30%]">
            Poolscape Villa
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-md md:ms-[30%]">
            The Seascape Villas project constitutes one of the first urban
            interventions in this very unique context, a landscape dominated by
            mountains and sea.
          </p>
          <a
            href="#"
            className="flex items-center text-gray-900 hover:text-gray-700 group md:ms-[80%]"
          >
            <span className="text-sm uppercase tracking-wider mr-2">READ</span>
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-2">
          <img
            src={image3}
            alt="Modern villa with a pool"
            width={700}
            height={500}
            className="object-cover w-full h-auto max-w-full"
          />
        </div>
      </div>

      {/* Third block */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
          <img
            src={image3}
            alt="Modern villa with a pool"
            width={700}
            height={500}
            className="object-cover w-full h-auto max-w-full"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 relative mt-8 md:mt-20 order-1 md:order-2">
          <div className="flex items-center mb-4 md:absolute md:left-[-13%] static">
            <div className="w-16 md:w-24 h-[1px] bg-gray-400"></div>
            <span className="text-sm text-gray-500 ml-4">2012</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 mt-4 md:mt-10">
            Poolscape Villa
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-md">
            The Seascape Villas project constitutes one of the first urban
            interventions in this very unique context, a landscape dominated by
            mountains and sea.
          </p>
          <a
            href="#"
            className="flex items-center text-gray-900 hover:text-gray-700 group"
          >
            <span className="text-sm uppercase tracking-wider mr-2">READ</span>
          </a>
        </div>
      </div>
    </section>
  );
}
