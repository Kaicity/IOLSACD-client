import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import navLinks from "../constants/navLinks";

// Hàm tìm label dựa vào path
const findLabelByPath = (path) => {
  for (const item of navLinks) {
    if (item.path === path) return item.label;
    if (item.children) {
      const child = item.children.find((c) => c.path === path);
      if (child) return child.label;
    }
  }
  return path; // Nếu không tìm thấy, dùng path làm fallback
};

const BreadcrumbDynamic = () => {
  const location = useLocation();
  const { pathname } = location;

  // Tách URL thành từng phần
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="text-black text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-black hover:underline">
            Trang Chủ
          </Link>
        </li>
        {pathnames.map((_, index) => {
          // Tạo đường dẫn từng cấp
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = findLabelByPath(routeTo);
          const isLast = index === pathnames.length - 1;
          return (
            <li key={routeTo} className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-black mx-2" />
              {isLast ? (
                <span className="text-brandSecondary font-medium">{label}</span>
              ) : (
                <Link to={routeTo} className="text-black hover:underline">
                  {label}
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
