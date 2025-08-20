"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/imgs/Image 8.png";
import image2 from "../../assets/imgs/image3.png";
import image3 from "../../assets/imgs/jan-antonin-kolar-1683252-unsplash_bw_compressed.png";
import image4 from "../../assets/imgs/Title - Transparent TXT image (1).png";

const services = [
  {
    id: "01",
    title: "Elegant And Sophisticated",
    contentTitle: "Elegant & Sophisticated Interiors",
    contentDescription:
      "Discover bespoke designs that blend luxury with comfort, creating spaces that reflect your unique style and refined taste.",
    image: image1,
  },
  {
    id: "02",
    title: "Cozy Bedroom Designs",
    contentTitle: "Cozy & Inviting Bedrooms",
    contentDescription:
      "Transform your bedroom into a serene sanctuary with our cozy and inviting designs, perfect for relaxation and rejuvenation.",
    image: image2,
  },
  {
    id: "03",
    title: "Modern Kitchen Experience",
    contentTitle: "Modern & Functional Kitchens",
    contentDescription:
      "Experience the future of cooking with our modern kitchen designs, combining sleek aesthetics with unparalleled functionality.",
    image: image3,
  },
  {
    id: "04",
    title: "Tailor-Made Dining Table",
    contentTitle: "Custom Tailor-Made Dining Tables",
    contentDescription:
      "Crafted to perfection, our tailor-made dining tables are the centerpiece of every meal, designed to fit your space and style.",
    image: image4,
  },
  {
    id: "05",
    title: "Elegant Home Setup",
    contentTitle: "Elegant & Seamless Home Setup",
    contentDescription:
      "From furniture arrangement to decor placement, we ensure every detail contributes to a harmonious and elegant living environment.",
    image: "/placeholder.svg?height=400&width=300&text=Home+Setup",
  },
  {
    id: "06",
    title: "Quality & Design",
    contentTitle: "Living & Modern",
    contentDescription:
      "Torquent congue luctus morbi consequat tempus at integer.",
    image: "/images/kitchen-interior.png",
  },
  {
    id: "07",
    title: "Web Ownership",
    contentTitle: "Seamless Web Ownership Experience",
    contentDescription:
      "We provide a comprehensive digital presence, ensuring your brand is beautifully represented online with a user-friendly and engaging website.",
    image: "/placeholder.svg?height=400&width=300&text=Web+Ownership",
  },
];

export default function InteriorSolutions() {
  const [activeServiceId, setActiveServiceId] = useState("06");

  const activeService = services.find(
    (service) => service.id === activeServiceId
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            OUR SERVICE
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            End-To-End Interior Solutions.
          </h2>
        </div>

        {/* Mobile (Vertical Cards) */}
        <div className="block lg:hidden space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveServiceId(service.id)}
              className={`p-4 rounded-lg border shadow-sm transition-all cursor-pointer ${
                activeServiceId === service.id
                  ? "bg-gray-50 border-gray-300"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-2xl font-bold ${
                    activeServiceId === service.id
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {service.id}
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>

              {activeServiceId === service.id && (
                <AnimatePresence>
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      {service.contentTitle}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {service.contentDescription}
                    </p>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop (No Horizontal Scroll) */}
        <div className="hidden lg:flex flex-row items-start justify-start w-full">
          {services.map((service) => (
            <div key={service.id} className="flex items-stretch">
              {/* Animated Content */}
              <AnimatePresence initial={false}>
                {activeServiceId === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6 p-8 bg-gray-50 rounded-lg shadow-sm 
              flex-1 min-w-[400px] h-auto relative z-10 border-l border-gray-200"
                  >
                    <div className="flex justify-center h-[250px] w-full">
                      <img
                        src={activeService.image || "/placeholder.svg"}
                        alt={activeService.contentTitle || activeService.title}
                        className="rounded-lg object-cover max-h-[250px] w-full"
                      />
                    </div>

                    <div className="w-full space-y-4 text-center">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {activeService.contentTitle}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {activeService.contentDescription}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Service Button */}
              <button
                onClick={() => setActiveServiceId(service.id)}
                className={`relative flex flex-col items-center justify-start py-4 px-2 group 
          min-w-[100px] lg:min-w-[150px] h-[450px] 
          transition-all duration-200 focus:outline-none ${
            activeServiceId !== service.id ? "border-r border-gray-200" : ""
          }`}
              >
                <span
                  className={`text-4xl font-bold transition-colors duration-200 ${
                    activeServiceId === service.id
                      ? "text-gray-900"
                      : "text-gray-300"
                  }`}
                >
                  {service.id}
                </span>
                <div className="relative flex-1 w-full flex justify-center items-start pt-4">
                  <span
                    className={`text-lg font-medium whitespace-nowrap transition-colors duration-200 
              absolute bottom-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 ${
                activeServiceId === service.id
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500"
              }`}
                  >
                    {service.title}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
