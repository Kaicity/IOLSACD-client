import { useEffect, useState } from "react";

function SharingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-4">
      <button
        onClick={scrollToTop}
        href="#"
        className={`flex items-center justify-center w-11 h-11 bg-neutralGrey text-white rounded-full shadow-md hover:bg-brandPrimary focus:ring-2 transition ${
          isVisible ? "flex" : "hidden"
        } `}
        title="Lên đầu trang"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      <ul className="space-y-4">
        <li>
          <a
            href="tel:0703338458"
            rel="nofollow"
            className="group flex flex-col items-center"
          >
            <img
              src="//bizweb.dktcdn.net/100/472/913/themes/888429/assets/addthis-phone.svg?1725935235961"
              alt="Gọi ngay cho chúng tôi"
              className="w-11 h-11 rounded-full shadow-md transition-transform group-hover:scale-110"
            />
          </a>
        </li>

        <li>
          <a
            href="https://zalo.me/0703338458"
            target="_blank"
            rel="nofollow"
            className="group flex flex-col items-center"
          >
            <img
              src="//bizweb.dktcdn.net/100/472/913/themes/888429/assets/addthis-zalo.svg?1725935235961"
              alt="Chat với chúng tôi qua Zalo"
              className="w-11 h-11 rounded-full shadow-md transition-transform group-hover:scale-110"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SharingContact;
