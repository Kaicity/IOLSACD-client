import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import clsx from "clsx";
import { ChevronDown, ChevronRight, Menu, Search, X } from "lucide-react";
import navLinks from "../constants/navLinks";
import { Logo } from "../assets";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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

  return (
    <setion>
      <div className="h-16 xl:px-32 2xl:px-32 sticky top-0 bg-white z-40 shadow-lg">
        {/* MOBILE MENU */}
        <div className="h-full flex items-center xl:hidden bg-brandPrimary w-full px-2">
          <button className="mr-2" onClick={() => setIsOpen(true)}>
            <Menu className="object-contain w-12 h-12 text-white" />
          </button>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Nhập từ khóa..."
              className="border border-gray-300 px-4 py-3 text-sm w-full rounded-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2">
              <Search className="w-5 h-5 text-neutralDGrey" />
            </button>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={clsx(
            "hidden xl:flex items-center h-full",
            scrollY > 120 ? "justify-center" : "justify-end mr-[240px]"
          )}
        >
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={clsx(link.children ? "relative group" : "")}
              >
                <Link
                  to={link.path}
                  className="text-md font-medium transition hover:text-gray-600"
                >
                  {link.label.toUpperCase()}
                </Link>

                {/* Nếu có submenu */}
                {link.children && (
                  <ul
                    className="absolute left-0 top-11 w-80 bg-white shadow-lg opacity-0 invisible translate-y-3 
                     group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                     transition-all duration-300 ease-in-out delay-150"
                  >
                    {link.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.path}
                          className="block px-4 py-2 hover:bg-brandSecondary hover:text-white text-sm text-neutralGrey font-semibold"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

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

      {/* MOBILE SIDEBAR */}
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={clsx(
          "fixed left-0 top-0 h-full w-3/4 bg-white shadow-lg transform transition-transform z-[100] duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          <a href="/" className="mx-auto">
            <img
              src={Logo}
              alt="CÔNG TY LUẬT BẾN THÀNH LAW"
              className="w-full h-[126px] object-contain"
            />
          </a>
        </div>

        <div className="relative w-full px-2">
          <input
            type="text"
            placeholder="Nhập từ khóa..."
            className="border border-gray-300 px-4 py-3 text-sm w-full rounded-md"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2">
            <Search className="w-5 h-5 text-neutralDGrey" />
          </button>
        </div>

        <ul className="p-3 space-y-2">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <div className="relative">
                <Link
                  to={link.path}
                  className="block text-md font-medium text-black hover:bg-gray-200 w-full p-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>

                {link.children && (
                  <button
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === index ? null : index)
                    }
                    className="absolute text-neutralGrey top-2 right-0"
                  >
                    {openSubmenu === index ? <ChevronDown /> : <ChevronRight />}
                  </button>
                )}
              </div>

              {link.children && openSubmenu === index && (
                <ul className="mt-2 space-y-2">
                  {link.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        to={child.path}
                        className="block text-sm text-gray-600 hover:bg-gray-200 w-full p-2 transition-all duration-150"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </setion>
  );
};

export default Header;
