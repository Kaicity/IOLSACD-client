import { useEffect, useState } from "react";
import { Slider_1, Slider_2 } from "../../assets";

const slides = [
  {
    id: 1,
    title: "Dễ dàng sử dụng",
    description: "Giá rẻ",
    img: Slider_2,
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 2,
    title: "Lựa chọn tốt cho bạn",
    description: "Giảm giá đến 20% Black Friday",
    img: Slider_1,
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];

const CarouselBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative shadow-lg">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/3 xl:h-full flex flex-col items-center justify-center gap-8 text-center px-4">
              <h2 className="text-lg  md:text-2xl lg:text-3xl font-light">
                {slide.description}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brandSecondary">
                {slide.title}
              </h1>
              <a href={slide.url}>
                <button className=" bg-brandSecondary text-white py-3 px-6 transition hover:scale-105">
                  Mua ngay
                </button>
              </a>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="relative h-1/2 xl:w-2/3 xl:h-full">
              <img
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-3">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full bg-gray-400 cursor-pointer transition-all ${
              current === index ? "bg-white scale-125" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
