import React, {useEffect, useState} from "react";
import BreadcrumbDynamic from "../../components/layouts/Breadcrumb";
import {Outlet, useLocation} from "react-router-dom";
import LayoutPage from "../../components/LayoutPage";
import {getArticles} from "../../api/Article/article";

export default function AboutPage() {
  const location = useLocation();
  const isRootPath = location.pathname === "/tong-quan";

  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  // Tạm thời searchQuery = "" (mặc định)
  const searchQuery = "";

  useEffect(() => {
    setLoading(true);
    getArticles(searchQuery) // Nếu searchQuery = "" hoặc "Lập trình" tùy trường hợp
      .then((res) => {
        // Giả sử API trả về tất cả bài viết
        const {articles, pagination} = res.data.data;

        // Nếu API không lọc theo type, bạn có thể tự lọc ở đây:
        const filteredArticles = articles.filter(
          (article) => article.type === "Lập trình"
        );

        setArticles(filteredArticles);
        setPagination(pagination);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <div className="bg-white w-full">
      <BreadcrumbDynamic />

      {/* Nếu path là "/tong-quan", hiển thị LayoutPage */}
      {isRootPath && <LayoutPage header={"Tổng Quan"} data={articles} />}

      {/* Hiển thị nội dung của route con (nếu có) */}
      <Outlet />
    </div>
  );
}
