import React, { useEffect, useState } from "react";
import BreadcrumbDynamic from "../../components/layouts/Breadcrumb";
import { Outlet, useLocation } from "react-router-dom";
import LayoutPage from "../../components/LayoutPage";
import { getArticles } from "../../api/Article/article";

export default function NewsPage() {
  const location = useLocation();
  const isRootPath = location.pathname === "/tin-tuc";

  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Tạm thời searchQuery = "" (mặc định)
  const searchQuery = "";
  const type="Lập trình";
  useEffect(() => {
    setLoading(true);

    getArticles(searchQuery, currentPage, 6,type)
      .then((res) => {
        // res.data.data chứa { articles, pagination }
        const { articles, pagination } = res.data.data;
        console.log("articles", articles);
        setArticles(articles);
        setPagination(pagination);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, currentPage]);

  // Hàm thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white w-full">
      <BreadcrumbDynamic />

      {/* Nếu path là "/tong-quan", hiển thị LayoutPage */}
      {isRootPath && (
        <LayoutPage
          header={"Tổng Quan"}
          data={articles}
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      )}

      {/* Hiển thị nội dung của route con (nếu có) */}
      <Outlet />
    </div>
  );
}
