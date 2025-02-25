import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import navLinks from "../../constants/navLinks.js";

// Hàm hỗ trợ: trả về label cho các route tĩnh (có trong navLinks)
function findNavLinkLabel(path) {
  for (const item of navLinks) {
    if (item.path === path) return item.label;
    if (item.children) {
      const child = item.children.find((c) => c.path === path);
      if (child) return child.label;
    }
  }
  // Nếu không tìm thấy, trả về null
  return null;
}

// Hàm tách slug động của "/tong-quan/"
function parseTongQuanSlug(path) {
  // Bỏ phần "/tong-quan/" để lấy slug
  let slug = path.replace("/tong-quan/", "");

  // Giải mã URL (trường hợp chứa ký tự %xx)
  slug = decodeURIComponent(slug);

  // Loại bỏ tiền tố "article." nếu có
  if (slug.startsWith("article.")) {
    slug = slug.replace("article.", "");
  }

  // Tách phần title với ID (nếu format kiểu "title=ID")
  const [titlePart] = slug.split("=");

  // Thay thế dấu "--" bằng khoảng trắng (nếu bạn quy ước 2 dấu "-" là khoảng trắng)
  slug = titlePart.replace(/--/g, " ");

  slug = titlePart.replace(/-/g, " ");

  return slug.trim();
}

// Hàm chính tìm label hiển thị cho breadcrumb
function findLabelByPath(path) {
  // Nếu đúng "/tong-quan" => "Tổng quan" (tìm trong navLinks)
  if (path === "/tong-quan") {
    const label = findNavLinkLabel(path);
    return label || "Tổng quan";
  }

  // Nếu là "/tong-quan/..." => parse slug để lấy title
  if (path.startsWith("/tong-quan/")) {
    return parseTongQuanSlug(path);
  }

  // Các route khác: cố gắng tìm label trong navLinks
  const label = findNavLinkLabel(path);
  if (label) return label;

  // Nếu không tìm thấy, trả về chính path (fallback)
  return path;
}

const BreadcrumbDynamic = () => {
  const location = useLocation();
  const { pathname } = location;

  // Tách URL thành từng phần (bỏ dấu slash đầu/cuối)
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="bg-gray-200 w-full">
      <div className="md:w-3/4 mx-auto md:p-4 p-2 z-50 text-black">
        <nav className="text-black text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {/* Link về trang chủ */}
            <li>
              <Link to="/" className="text-black hover:underline">
                Trang Chủ
              </Link>
            </li>

            {pathnames.map((_, index) => {
              // Tạo đường dẫn cho từng cấp
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const label = findLabelByPath(routeTo);
              const isLast = index === pathnames.length - 1;

              return (
                <li key={routeTo} className="flex items-center">
                  <ChevronRightIcon className="w-4 h-4 text-black mx-2" />
                  {isLast ? (
                    <span className="text-black font-bold">{label}</span>
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
      </div>
    </div>
  );
};

export default BreadcrumbDynamic;
