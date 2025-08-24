import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BiChevronRight } from "react-icons/bi";
import image1 from "../../assets/imgs/jan-antonin-kolar-1683252-unsplash_bw_compressed.png";
import image2 from "../../assets/imgs/modern-essentials-790188-unsplash_bw_compressed.png";
import image3 from "../../assets/imgs/image3.png";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiMvAiLine } from "react-icons/ri";
import { MdMail } from "react-icons/md";

const blogPosts = [
  {
    id: 1,
    category: "THE HOW BRANDS",
    title: "HOW BRANDS a of brand",
    description: "",
    image: image1,
  },
  {
    id: 2,
    category: "HOW BRANDS",
    title: "COMPete and win",
    description: "",
    image: image2,
  },
  {
    id: 3,
    category: "THE ONE",
    title: "COMPETitor marketers understated",
    description: "",
    image: image3,
  },
  {
    id: 4,
    category: "HOW BRANDS CAN",
    title: "avoid culturally flammable ideas",
    description: "",
    image: image1,
  },
  {
    id: 5,
    category: "BRAND MANAGEMENT",
    title: "age of ai",
    description: "",
    image: image2,
  },
  {
    id: 6,
    category: "THE ONE",
    title: "COMPETitor marketers understated",
    description: "",
    image: image3,
  },

  {
    id: 7,
    category: "THE ONE",
    title: "COMPETitor marketers understated",
    description: "",
    image: image2,
  },
];

export default function PostsSlider() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase">
          ALL POSTS
        </h2>
      </div>

      {/* Posts Slider */}
      <Swiper
        slidesPerView={1.5} // show 4 full + half on right
        centeredSlides={false} // center slides
        initialSlide={1} // so left edge also shows half
        spaceBetween={24}
        grabCursor={true}
        breakpoints={{
          480: { slidesPerView: 1.5, spaceBetween: 16 }, // small devices
          640: { slidesPerView: 2, spaceBetween: 20 }, // tablets
          768: { slidesPerView: 2.5, spaceBetween: 20 }, // tablets landscape
          1024: { slidesPerView: 3.5, spaceBetween: 24 }, // small laptops
          1280: { slidesPerView: 5, spaceBetween: 24 }, // desktops (your current design)
        }}
        modules={[Pagination]}
        className="posts-swiper !pb-12"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={post.id}>
            <article
              className={`group cursor-pointer transition-all duration-500`}
              style={{
                marginTop: index % 2 === 0 ? "0px" : "80px", // stagger effect
              }}
            >
              <div className="text-xs font-medium tracking-wider text-gray-500">
                19.04.2023
              </div>
              {/* Image */}
              <div className="aspect-[2/3] mb-4 overflow-hidden bg-gray-100  shadow-md">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  {post.category}
                </div>
                <h3 className="text-sm font-medium text-gray-900 leading-tight">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {post.description}
                  </p>
                )}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" bg-white flex flex-col items-center justify-center px-4 relative">
        <div className="w-full max-w-md space-y-8">
          {/* Main heading */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-normal text-gray-900 tracking-wide">
              JOIN THE VIP List
            </h1>
            <p className="text-gray-500 text-sm">
              Sign up to get exclusive content stright into your email!
            </p>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative flex items-center">
              <MdMail className="absolute left-4 h-5 w-5 " />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@website.com"
                className="w-full pl-12 pr-12 py-3 border-b-2  bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-2 p-2  hover:text-gray-900 transition-colors"
              >
                <BiChevronRight className="h-8 w-8" />
              </button>
            </div>
          </form>
        </div>

        {/* Footer navigation */}
        <div className="absolute bottom-[-40px] flex space-x-8">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
          >
            work
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
          >
            blog
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
          >
            about
          </a>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-[-70px]">
          <p className="text-gray-400 text-xs">
            Copyright ©{" "}
            <a
              href="https://www.gadaou.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 cursor-pointer transition-colors"
            >
              Gadaou.AI
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
