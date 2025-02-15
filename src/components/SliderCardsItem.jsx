import React, { useState, useEffect } from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { User_1, User_2, User_3, User_4, User_6, pvt } from "../assets";
import CardAvatar from "./CardAvatar";
import clsx from "clsx";
import CardVideo from "./CardVideo";
import CardService from "./CardService";

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

const userAvatarsArray = [
  {
    id: 1,
    img: User_6,
    name: "VIỆN TRƯỞNG",
    title: "VIỆN TRƯỞNG",
  },
  {
    id: 2,
    img: pvt,
    name: "PHÓ VIỆN TRƯỞNG",
    title: "PHÓ VIỆN TRƯỞNG",
  },
  {
    id: 3,
    img: User_3,
    name: "LÊ ĐÔ THỨ",
    title: "CTO Cozwork",
  },
  {
    id: 4,
    img: User_4,
    name: "HOÀNG ĐÌNH THẢO",
    title: "Nhân Viên IT Devops",
  },
  {
    id: 5,
    img: User_6,
    name: "Viện Trưởng",
    title: "Lập Trình Viên Front-end",
  },
  {
    id: 6,
    img: User_1,
    name: "NGUYỄN MINH THÔNG",
    title: "Lập Trình Viên Front-end",
  },
  {
    id: 7,
    img: User_2,
    name: "NGUYỄN QUANG TIẾN",
    title: "Lập Trình Viên Front-end",
  },
];

const videosArray = [
  {
    id: 1,
    title: "Fullstack Next.js/Nest.js với TypeScript",
    img: "https://i.ytimg.com/vi/Sklc_fQBmcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDB36t3OPjX6fzEWigqBkR7kdsSQQ",
    url: "https://www.youtube.com/watch?v=otDdLEScHNk",
  },
  {
    id: 2,
    img: "https://i.ytimg.com/vi/r7TytTlTED4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAF0iWyJiu9w_GGUnIlUdc11rI3Bw",
    title: "JWT (JSON web token), sử dụng ngôn ngữ TypeScript",
    url: "https://www.youtube.com/watch?v=otDdLEScHNk",
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/N2_PE9_k3G8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCiVz7SQgBfPMeUJnxsArS_9XLA4g",
    title: "Donate hay mua cho mình cốc cà phê",
    url: "https://www.youtube.com/watch?v=otDdLEScHNk",
  },
  {
    id: 4,
    img: "https://i.ytimg.com/vi/0s96dQCQox8/hq720.jpg?v=67b026cf&sqp=CKiOwb0G-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA2mpkqr7Gu0MeeX_Q-qT0yr0oeYgQQ",
    title: "CHAT GPT 2025",
    url: "https://www.youtube.com/watch?v=otDdLEScHNk",
  },
];

const servicesArray = [
  {
    img: "https://picsum.photos/200?random=1",
  },
  {
    img: "https://picsum.photos/200?random=2",
  },
  {
    img: "https://picsum.photos/200?random=3",
  },
  {
    img: "https://picsum.photos/200?random=4",
  },
  {
    img: "https://picsum.photos/200?random=5",
  },
  {
    img: "https://picsum.photos/200?random=6",
  },
  {
    img: "https://picsum.photos/200?random=7",
  },
];

const SliderCardsItem = ({
  isCard,
  isCardAvatar,
  isCardVideo,
  isCardService,
  isPrevNextBtn,
}) => {
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
      {isCard && (
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
      )}

      {isCardAvatar && (
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(activeIndex * 100) / cardsPerView}%)`,
          }}
        >
          {userAvatarsArray.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <CardAvatar {...card} />
            </div>
          ))}
        </div>
      )}

      {isCardVideo && (
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(activeIndex * 100) / cardsPerView}%)`,
          }}
        >
          {videosArray.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <CardVideo {...card} />
            </div>
          ))}
        </div>
      )}

      {isCardService && (
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(activeIndex * 100) / cardsPerView}%)`,
          }}
        >
          {servicesArray.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <CardService {...card} />
            </div>
          ))}
        </div>
      )}

      {isPrevNextBtn && (
        <div>
          {/* Nút điều hướng Prev */}
          <button
            className={clsx(
              "absolute left-0 top-1/2 transform -translate-y-1/2 bg-brandSecondary rounded-full h-12 w-12 text-white focus:bg-neutralDGrey",
              activeIndex === 0 && "cursor-not-allowed"
            )}
            onClick={handlePrev}
            disabled={activeIndex === 0}
          >
            <div className="p-2">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </button>
          {/* Nút điều hướng Next */}
          <button
            className={clsx(
              "absolute right-0 top-1/2 transform -translate-y-1/2 bg-brandSecondary rounded-full h-12 w-12 text-white focus:bg-neutralDGrey",
              activeIndex === cardArray.length - cardsPerView &&
                "cursor-not-allowed"
            )}
            onClick={handleNext}
            disabled={activeIndex >= cardArray.length - cardsPerView}
          >
            <div className="p-3">
              <ChevronRight className="w-6 h-6" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderCardsItem;
