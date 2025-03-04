import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { User_1, User_2, User_3, User_4, User_6, pvt } from "../assets";
import CardAvatar from "./CardAvatar";
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
    id: 1,
    title: "Fullstack Next.js/Nest.js với TypeScript",
    img: "https://i.ytimg.com/vi/Sklc_fQBmcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDB36t3OPjX6fzEWigqBkR7kdsSQQ",
    url: "https://www.youtube.com/watch?v=otDdLEScHNk",
  },
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
  { img: "https://picsum.photos/200?random=1" },
  { img: "https://picsum.photos/200?random=2" },
  { img: "https://picsum.photos/200?random=3" },
  { img: "https://picsum.photos/200?random=4" },
  { img: "https://picsum.photos/200?random=5" },
  { img: "https://picsum.photos/200?random=6" },
  { img: "https://picsum.photos/200?random=7" },
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
        setCardsPerView(1);
      } else if (width < 768) {
        setCardsPerView(2);
      } else if (width < 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Gom active index và direction vào 1 state duy nhất
  const [sliderState, setSliderState] = useState({ index: 0, direction: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderState((prev) => {
        let nextIndex = prev.index + prev.direction;
        let newDirection = prev.direction;

        // Nếu đã đạt đến cuối mảng (lưu ý: cardArray.length - cardsPerView là giới hạn index)
        if (nextIndex >= cardArray.length - cardsPerView) {
          newDirection = -1;
          nextIndex = prev.index - 1;
        }
        // Nếu đã đạt đến đầu mảng
        else if (nextIndex <= 0) {
          newDirection = 1;
          nextIndex = prev.index + 1;
        }
        return { index: nextIndex, direction: newDirection };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const handlePrev = () => {
    setSliderState((prev) => {
      const newIndex = Math.max(prev.index - 1, 0);
      return { index: newIndex, direction: -1 };
    });
  };

  const handleNext = () => {
    setSliderState((prev) => {
      const newIndex = Math.min(prev.index + 1, cardArray.length - cardsPerView);
      return { index: newIndex, direction: 1 };
    });
  };

  const [dragStartX, setDragStartX] = useState(null);
  const [dragDelta, setDragDelta] = useState(0);
  const containerRef = useRef(null);

  const handleDragStart = (e) => {
    setDragStartX(e.clientX);
  };

  const handleDragMove = (e) => {
    if (dragStartX !== null) {
      setDragDelta(e.clientX - dragStartX);
    }
  };

  const handleDragEnd = () => {
    if (dragDelta > 50) {
      // Kéo sang phải: slider quay về trước
      setSliderState((prev) => {
        const newIndex = Math.max(prev.index - 1, 0);
        return { index: newIndex, direction: -1 };
      });
    } else if (dragDelta < -50) {
      // Kéo sang trái: slider chuyển về sau
      setSliderState((prev) => {
        const newIndex = Math.min(prev.index + 1, cardArray.length - cardsPerView);
        return { index: newIndex, direction: 1 };
      });
    }
    setDragStartX(null);
    setDragDelta(0);
  };

  return (
    <div className="max-w-7xl mx-auto w-full md:w-3/4 relative overflow-hidden py-10">
      {isCard && (
        <div
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out select-none"
            style={{
              transform: `translateX(-${(sliderState.index * 100) / cardsPerView}%)`,
            }}
          >
            {cardArray.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      )}

      {isCardAvatar && (
        <div
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out select-none"
            style={{
              transform: `translateX(-${(sliderState.index * 100) / cardsPerView}%)`,
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
        </div>
      )}

      {isCardVideo && (
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(sliderState.index * 100) / cardsPerView}%)`,
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
            transform: `translateX(-${(sliderState.index * 100) / cardsPerView}%)`,
          }}
        >
          {servicesArray.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:px-2"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <CardService {...card} />
            </div>
          ))}
        </div>
      )}

      {isPrevNextBtn && (
        <div>
          <button
            className="absolute md:left-0 left-2 z-10 top-1/2 transform -translate-y-1/2 bg-brandSecondary rounded-full h-12 w-12 text-white focus:bg-neutralDGrey"
            onClick={handlePrev}
            disabled={sliderState.index === 0}
          >
            <div className="p-2">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </button>
          <button
            className="absolute md:right-0 right-2 top-1/2 transform -translate-y-1/2 bg-brandSecondary rounded-full h-12 w-12 text-white focus:bg-neutralDGrey"
            onClick={handleNext}
            disabled={sliderState.index >= cardArray.length - cardsPerView}
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
