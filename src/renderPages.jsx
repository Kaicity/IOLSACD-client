import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/AboutPage/DetailPage/DetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import KnowledgePage from "./pages/KnowledgePage/KnowledgePage";

// Object mapping các route tĩnh và mẫu route động
const pageComponents = {
  "/": HomePage,
  "/tong-quan": AboutPage,
  "/tong-quan/:slug": DetailPage, // Dành cho các route có slug sau "/tong-quan/"
  "/dich-vu": ServicePage,
  "/dich-vu/:slug": DetailPage, // Dành cho các route có slug sau "/dich-vu/"
  "/tin-tuc": NewsPage,
  "/kien-thuc-ve-luat": KnowledgePage,
  "/lien-he": ContactPage,
};

export default function getPageComponent(path) {
  // Kiểm tra xem path có khớp chính xác với các key trong object không
  if (pageComponents[path]) {
    const Component = pageComponents[path];
    return <Component />;
  }

  // Xử lý các route động cho "/tong-quan/:slug"
  if (path.startsWith("/tong-quan/")) {
    console.log("path", path);
    const Component = pageComponents["/tong-quan/:slug"];
    return <Component />;
  }

  // Xử lý các route động cho "/dich-vu/:slug"
  if (path.startsWith("/dich-vu/")) {
    const Component = pageComponents["/dich-vu/:slug"];
    return <Component />;
  }

  // Nếu không khớp, trả về trang NotFound
  return <NotFoundPage />;
}
