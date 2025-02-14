import React, { useState, useEffect } from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const cardArray = [
    {
      img: "https://picsum.photos/200?random=1",
      header: "Tiêu đề Demo 1",
      content: "Chưa có nội dung",
    },
    {
      img: "https://picsum.photos/200?random=2",
      header: "Tiêu đề Demo 2",
      content: "Chưa có nội dung",
    },
    {
      img: "https://picsum.photos/200?random=3",
      header: "Tiêu đề Demo 3",
      content: "Chưa có nội dung",
    },
    {
      img: "https://picsum.photos/200?random=4",
      header: "Tiêu đề Demo 4",
      content: "Chưa có nội dung",
    },
    {
      img: "https://picsum.photos/200?random=5",
      header: "Tiêu đề Demo 5",
      content: "Chưa có nội dung",
    },
    {
      img: "https://picsum.photos/200?random=6",
      header: "Tiêu đề Demo 6",
      content: "Chưa có nội dung",
    },
    {
      img: "https://picsum.photos/200?random=7",
      header: "Tiêu đề Demo 7",
      content: "Chưa có nội dung",
    },
  ];

  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: 1 card
        setCardsPerView(1);
      } else if (width < 768) {
        // Tablet nhỏ: 2 card
        setCardsPerView(2);
      } else if (width < 1024) {
        // Tablet lớn: 3 card
        setCardsPerView(3);
      } else {
        // Desktop: 4 card
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < cardArray.length - cardsPerView) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-11/12 relative overflow-hidden py-10">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(activeIndex * 100) / cardsPerView}%)`,
        }}
      >
        {cardArray.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2"
            style={{ width: `${100 / cardsPerView}%` }}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
      {/* Nút điều hướng Prev */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-brandSecondary rounded-full h-12 w-12 text-white"
        onClick={handlePrev}
        disabled={activeIndex === 0}
      >
        <div className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </div>
      </button>
      {/* Nút điều hướng Next */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-brandSecondary rounded-full h-12 w-12 text-white"
        onClick={handleNext}
        disabled={activeIndex >= cardArray.length - cardsPerView}
      >
        <div className="p-3">
          <ChevronRight className="w-6 h-6" />
        </div>
      </button>
    </div>
  );
};

export default Carousel;
