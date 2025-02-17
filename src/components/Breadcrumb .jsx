// BreadcrumbDynamic.jsx
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbDynamic = () => {
  const location = useLocation();
  // Lấy pathname (ví dụ: /products/electronics)
  const { pathname } = location;
  // Tách các phần của URL và loại bỏ phần rỗng
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="text-black text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-black hover:underline">
            Trang Chủ
          </Link>
        </li>
        {pathnames.map((name, index) => {
          // Xây dựng đường dẫn cho phần hiện tại
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          // Kiểm tra nếu là phần cuối thì không tạo link
          const isLast = index === pathnames.length - 1;
          return (
            <li key={routeTo} className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-black mx-2" />
              {isLast ? (
                <span className="text-black">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </span>
              ) : (
                <Link to={routeTo} className="text-black hover:underline">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbDynamic;
