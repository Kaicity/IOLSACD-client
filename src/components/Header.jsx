import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import clsx from "clsx";
import { Menu, Search } from "lucide-react";
import navLinks from "../constants/navLinks";

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
  );
};

export default Header;
