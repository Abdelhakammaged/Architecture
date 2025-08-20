import image1 from "../../assets/imgs/jan-antonin-kolar-1683252-unsplash_bw_compressed.png";
import image2 from "../../assets/imgs/modern-essentials-790188-unsplash_bw_compressed.png";
import image3 from "../../assets/imgs/image3.png";

export default function ImageGridSection() {
  const items = [
    {
      imageSrc: image1,
      altText: "Hallway with arched ceilings",
      label: "Photography",
    },
    {
      imageSrc: image2,
      altText: "T-shirts on hangers",
      label: "Apparel Design",
    },
    {
      imageSrc: image3,
      altText: "Branding Design",
      label: "Branding Design",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col ">
            <img
              src={item.imageSrc || "/placeholder.svg"}
              alt={item.altText}
              width={400}
              height={400}
              className="object-cover w-full h-auto mb-6"
            />

            <div className="  h-full">
              <h3 className="text-xl font-light text-gray-800 tracking-widest uppercase font-serif ">
                {item.label}
              </h3>
              <div className="w-[35%] border-t border-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
