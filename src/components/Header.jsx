import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import clsx from "clsx";
import { Menu, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
    <div className="h-16 px-4 md:px-8 lg:px-6 xl:px-32 2xl:px-32 sticky top-0 bg-white z-40 shadow-lg">
      {/* MOBILE MENU */}
      <div className="h-full flex items-center justify-between md:hidden">
        <button>
          <Menu className="object-contain w-[50px]" />
        </button>
      </div>

      {/* DESKTOP MENU */}
      <div
        className={clsx(
          "hidden md:flex items-center h-full",
          scrollY > 120 ? "justify-center" : "justify-end mr-[240px]"
        )}
      >
        <ul className="flex items-center gap-12">
          <li>
            <a
              className="text-md font-medium transition hover:text-gray-600"
              href="/"
            >
              TRANG CHỦ
            </a>
          </li>

          {/* Tổng quan */}
          <li className="relative group">
            <a
              href="/tong-quan"
              className="text-md font-medium transition hover:text-gray-600"
            >
              TỔNG QUAN
            </a>
            <ul
              className="absolute left-0 top-11 w-64 bg-white shadow-lg opacity-0 invisible translate-y-3 
                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                   transition-all duration-300 ease-in-out delay-150"
            >
              <li>
                <a
                  href="/doi-ngu-nhan-su"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Đội Ngũ Nhân Sự
                </a>
              </li>
              <li>
                <a
                  href="/catalogue-online"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="/linh-vuc-hoat-dong"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Lĩnh vực hoạt động
                </a>
              </li>
            </ul>
          </li>

          {/* Dịch vụ */}
          <li className="relative group">
            <a
              href="/dich-vu"
              className="text-md font-medium transition hover:text-gray-600"
            >
              DỊCH VỤ
            </a>
            <ul
              className="absolute left-0 top-11 w-64 bg-white shadow-lg opacity-0 invisible translate-y-3 
                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                   transition-all duration-300 ease-in-out delay-150"
            >
              <li>
                <a
                  href="/dich-vu-cho-thue-phong-phap-che-ben-ngoai"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Cho Thuê Phòng Pháp Chế Bên Ngoài
                </a>
              </li>
              <li>
                <a
                  href="/dich-vu-dai-dien-to-tung"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Dịch vụ Đại Diện Tố Tụng
                </a>
              </li>
              <li>
                <a
                  href="/dich-vu-dai-dien-ngoai-to-tung"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Dịch vụ Đại Diện Ngoài Tố Tụng
                </a>
              </li>
              <li>
                <a
                  href="/dich-vu-luat-su-gia-dinh"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Dịch vụ Luật Sư Gia Đình
                </a>
              </li>
              <li>
                <a
                  href="/dich-vu-tu-van-xay-dung-he-thong-quan-tri-noi-bo-cong-ty"
                  className="block px-4 py-2 hover:bg-brandPrimary hover:text-white"
                >
                  Tư Vấn Xây Dựng Hệ Thống Quản Trị Nội Bộ Công Ty
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              className="text-md font-medium transition hover:text-gray-600"
              href="/tin-tuc"
            >
              TIN TỨC
            </a>
          </li>

          <li>
            <a
              className="text-md font-medium transition hover:text-gray-600"
              href="/kien-thuc-ve-luat"
            >
              KIẾN THỨC VỀ LUẬT
            </a>
          </li>

          <li>
            <a
              className="text-md font-medium transition hover:text-gray-600"
              href="/lien-he"
            >
              LIÊN HỆ
            </a>
          </li>

          {/* Tổng quan */}
          <li className="relative group">
            <a onClick={() => setSearchOpen(!searchOpen)}>
              <Search
                className="text-lg font-medium transition text-neutralGrey cursor-pointer"
                size={24}
              />
            </a>

            <ul
              className="absolute right-0 top-10 w-max bg-white shadow-lg opacity-0 invisible translate-y-3 
                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                   transition-all duration-300 ease-in-out delay-150"
            >
              <li className="p-2 flex items-center">
                <input
                  type="text"
                  placeholder="Nhập từ khóa..."
                  className="border border-gray-300 px-2 py-1 rounded-l-md"
                />
                <button className="bg-transparent text-neutralGrey px-3 py-1 rounded-r-md">
                  <Search />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
