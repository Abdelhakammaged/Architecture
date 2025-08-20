"use client";
import { VscTriangleLeft } from "react-icons/vsc";
import { useState } from "react";

const testimonials = [
  {
    id: "1",
    name: "Mark Eganberg",
    quote:
      "The team at Dome Architects delivered beyond our expectations. Their attention to detail and innovative designs transformed our space into a masterpiece. Highly recommended!",
  },
  {
    id: "2",
    name: "Jennifer Hilbertson",
    quote:
      "Incredible as always. This guys have excellent taste, modeling, texturing & rendering skills. The design fits in with what I would perceive as being Icelandic, the high wooden roof design and linear slatted interior elements and colours.",
  },
  {
    id: "3",
    name: "Lesley Grand",
    quote:
      "Working with Dome Architects was a seamless experience. They truly understood our vision and brought it to life with creativity and professionalism. We couldn't be happier with the outcome.",
  },
  {
    id: "4",
    name: "John Frick",
    quote:
      "Their architectural solutions are both functional and aesthetically pleasing. The project was completed on time and within budget, exceeding all our requirements. A truly talented team!",
  },
];

export default function TestimonialsSection() {
  const [activeTestimonialId, setActiveTestimonialId] = useState("2");
  const activeTestimonial = testimonials.find(
    (t) => t.id === activeTestimonialId
  );

  const darkTextColor = "#333333";
  const lightGrayText = "#7D7D7D";

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center md:text-left">
          <p
            className="text-xs sm:text-sm uppercase whitespace-nowrap mb-2 tracking-widest"
            style={{ color: lightGrayText }}
          >
            TESTIMONIALS
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold"
            style={{ color: darkTextColor }}
          >
            They love us.
          </h2>
        </div>

        {/* Testimonials Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Names List */}
          <div className="relative w-full md:w-1/5 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] md:border-r md:border-b border-gray-200">
            <div className="flex flex-row md:flex-col flex-wrap justify-center md:justify-start items-center md:items-start gap-4 md:gap-0 mb-6 md:mb-20">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex items-center cursor-pointer py-1 ${
                    activeTestimonialId === testimonial.id
                      ? "font-bold text-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTestimonialId(testimonial.id)}
                >
                  {activeTestimonialId === testimonial.id && (
                    <div className="rotate-30 me-2">
                      <VscTriangleLeft className="text-gray-500" />
                    </div>
                  )}
                  <span className="text-sm sm:text-base">
                    {testimonial.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative borders (desktop only) */}
            <div className="hidden md:block w-35 border-b border-gray-300 absolute top-[76.5%] left-[-27%] rotate-90"></div>
            <div className="hidden md:block w-30 border-b border-gray-300 absolute top-[0%] right-[0%]"></div>
          </div>

          {/* Testimonial Card */}
          <div className="w-full md:w-3/4 bg-white text-center p-6 sm:p-8 md:p-12 shadow-xl rounded-lg relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
            <div className="text-3xl sm:text-4xl absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center justify-center w-full font-bold">
              ,,
            </div>
            {activeTestimonial && (
              <>
                <p
                  className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 mt-6 sm:mt-8"
                  style={{ color: darkTextColor }}
                >
                  {activeTestimonial.quote}
                </p>
                <p
                  className="font-bold text-center text-base sm:text-lg md:text-xl"
                  style={{ color: darkTextColor }}
                >
                  -{activeTestimonial.name}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
