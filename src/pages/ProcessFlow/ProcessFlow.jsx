export default function ProcessFlow() {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin by meticulously planning and setting up, ensuring efficiency and comfort.",
      icon: (
        <svg
          className="w-12 h-12 text-[#b8b3a4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      position: "top",
    },
    {
      number: "02",
      title: "Schematic Design",
      description:
        "Our expert designers work closely with you to bring life, combining aesthetic appeal.",
      icon: (
        <svg
          className="w-12 h-12 text-[#b8b3a4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      position: "bottom",
    },
    {
      number: "03",
      title: "Initial Consultation",
      description:
        "We begin by meticulously planning and setting up, ensuring efficiency and comfort.",
      icon: (
        <svg
          className="w-12 h-12 text-[#b8b3a4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      position: "top",
    },
    {
      number: "04",
      title: "Schematic Design",
      description:
        "Our expert designers work closely with you to bring life, combining aesthetic appeal.",
      icon: (
        <svg
          className="w-12 h-12 text-[#b8b3a4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      position: "bottom",
    },
    {
      number: "05",
      title: "Initial Consultation",
      description:
        "We begin by meticulously planning and setting up, ensuring efficiency and comfort.",
      icon: (
        <svg
          className="w-12 h-12 text-[#b8b3a4]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      position: "top",
    },
  ];

  return (
    <div className="bg-[#f7f7f7] p-10">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
        {/* Header */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center lg:text-left">
          <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wider uppercase mb-3 sm:mb-4">
            OUR PROCESS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Project Implementation Process
          </h2>
        </div>

        {/* Process Flow */}
        <div className="relative w-full">
          {/* Horizontal line (desktop) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-[#b8b3a4] hidden lg:block"></div>
          </div>

          {/* Vertical line (mobile/tablet) */}

          {/* Steps */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-14 md:gap-16 lg:gap-8 ">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >
                  {step.position === "top" ? (
                    <>
                      {/* Text above */}
                      <div className="max-w-xs mb-6 sm:mb-8 lg:mb-12 order-2 lg:order-1 px-2 sm:px-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                        <div className="block text-2xl sm:text-3xl lg:text-4xl font-light text-[#b8b3a4] mt-3 sm:mt-4 relative">
                          {step.number}
                          {/* hide decorative mini-line on mobile */}
                          <div className="hidden lg:block w-1/5 h-px bg-[#b8b3a4] absolute bottom-[17%] rotate-90 left-[20%]"></div>
                        </div>
                      </div>

                      {/* Icon Box */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 border-2 border-[#b8b3a4] bg-white flex items-center justify-center relative z-10 order-1 lg:order-2 flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 text-[#b8b3a4]">
                          {step.icon}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Icon Box */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 border-2 border-[#b8b3a4] bg-white flex items-center justify-center relative z-10 mb-6 sm:mb-8 lg:mb-12 flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 text-[#b8b3a4]">
                          {step.icon}
                        </div>
                      </div>

                      {/* Text below */}
                      <div className="max-w-xs px-2 sm:px-0">
                        <div className="block text-2xl sm:text-3xl lg:text-4xl font-light text-[#b8b3a4] mb-3 sm:mb-4 relative">
                          {step.number}
                          {/* hide decorative mini-line on mobile */}
                          <div className="hidden lg:block w-1/5 h-px bg-[#b8b3a4] absolute top-[17%] rotate-90 right-[20%]"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-14 md:gap-16 lg:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center text-center `}
                >
                  <>
                    <div className="block text-2xl sm:text-3xl lg:text-4xl font-light text-[#b8b3a4] mb-3 sm:mb-4 relative">
                      {step.number}
                      {/* hide decorative mini-line on mobile */}
                      <div className="hidden lg:block w-1/5 h-px bg-[#b8b3a4] absolute top-[17%] rotate-90 right-[20%]"></div>
                    </div>
                    {/* Icon Box */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 border-2 border-[#b8b3a4] bg-white flex items-center justify-center relative z-10 mb-6 sm:mb-8 lg:mb-12 flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 text-[#b8b3a4]">
                        {step.icon}
                      </div>
                    </div>

                    {/* Text below */}
                    <div className={`max-w-xs px-2 sm:px-0 `}>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
