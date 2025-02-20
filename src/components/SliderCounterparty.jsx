import React, {useState, useEffect} from "react";

const SliderCounterparty = ({servicesArray}) => {
  const [imagesPerPage, setImagesPerPage] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cập nhật imagesPerPage dựa theo kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setImagesPerPage(2);
      } else if (width < 1024) {
        // Tablet
        setImagesPerPage(4);
      } else {
        // Desktop
        setImagesPerPage(6);
      }
    };

    // Gọi ngay khi mount để set giá trị ban đầu
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tính tổng số slide: mỗi slide chuyển dịch 1 ảnh
  const totalSlides = servicesArray.length - imagesPerPage + 1;

  // Tự động chuyển slide mỗi 3 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className=" md:w-3/4  max-w-7xl w-full mx-auto py-16 relative">
      {/* Khung hiển thị slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerPage)}%)`,
          }}
        >
          {servicesArray.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer flex-shrink-0"
              style={{width: `calc(100% / ${imagesPerPage})`}}
            >
              <img
                src={service.img}
                alt={service.alt || `Slide ${index + 1}`}
                className="p-2 w-full md:h-[150px] h-auto object-cover mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Điều hướng bằng dot cho từng slide */}
      <div className="flex justify-center mt-4">
        {Array.from({length: totalSlides}).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
              currentIndex === slideIndex
                ? "bg-gray-800 w-6 transition-transform duration-300"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderCounterparty;
