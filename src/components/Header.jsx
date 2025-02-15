import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import clsx from "clsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //NavItem array cac muc route page
  const navItems = [
    { a: "Trang chủ", path: "home" },
    { a: "Cộng đồng", path: "community" },
    { a: "Đánh giá", path: "rating" },
    { a: "Sản phẩm", path: "/products" },
    { a: "Giới thiệu", path: "sale" },
    { a: "Bài viết", path: "blog" },
  ];

  return (
    <div className="h-16 px-4 md:px-8 lg:px-6 xl:32 2xl:px-32 sticky top-0 bg-white z-50 shadow-lg">
      <div className="h-full flex items-center justify-between md:hidden">
        {/* MOBILE */}
        <a href="/">
          <img
            src={Logo}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-[50px]"
          />
        </a>
        {/* <Menu /> */}
      </div>

      {/* DESKTOP */}
      <div
        className={clsx(
          "hidden md:flex items-center h-full",
          scrollY > 120 ? "justify-center" : "justify-end mr-40"
        )}
      >
        <div className="flex items-center gap-12">
          <a className="text-md font-medium" href="/sale">
            TRANG CHỦ
          </a>
          <div className="group relative">
            <a href="/list" className="hover:text-gray-600 text-md font-medium">
              TỔNG QUAN
            </a>
            {/* Dropdown Content */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg pt-5 py-2 w-64">
              <a
                href="/list/new-arrivals"
                className="text-sm block px-4 py-2 hover:bg-brandPrimary hover:text-white"
              >
                Hàng mới về
              </a>
              <a
                href="/list/best-sellers"
                className="text-sm block px-4 py-2 hover:bg-brandPrimary hover:text-white"
              >
                Bán chạy nhất
              </a>
              <a
                href="/list/trending"
                className="text-sm block px-4 py-2 hover:bg-brandPrimary hover:text-white"
              >
                Xu hướng
              </a>
            </div>
          </div>
          <a className="text-md font-medium" href="/about">
            DỊCH VỤ
          </a>
          <a className="text-md font-medium" href="/about">
            TIN TỨC
          </a>
          <a className="text-md font-medium" href="/contact">
            LIÊN HỆ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
