import image from "../../assets/imgs/Image 7.png";

export default function BeforeAfterSection({
  beforeAlt,

  description,
}) {
  return (
    <section className=" mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wide">
          Before and After
        </h2>
      </div>

      <div className="">
        {/* Before Image */}
        <div className="relative group overflow-hidden">
          <div className=" relative">
            <img
              src={image}
              alt={beforeAlt}
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

        {/* After Image */}
      </div>

      {description && (
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
      )}
    </section>
  );
}
