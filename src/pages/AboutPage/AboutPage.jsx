import React from "react";
import BreadcrumbDynamic from "../../components/layouts/Breadcrumb";
import { Outlet, useLocation } from "react-router-dom";
import LayoutPage from "../../components/LayoutPage";

export default function AboutPage() {
  const location = useLocation();
  const isRootPath = location.pathname === "/tong-quan";

  const cardData = [
    {
      img: "https://picsum.photos/200?random=1",
      header: "Quy định về người đại diện hợp pháp trong tố tụng dân sự - ILC",
      content:
        "Cơ quan, tổ chức, cá nhân khởi kiện để bảo vệ quyền và lợi ích hợp pháp của người khác cũng là người đại diện theo pháp luật trong tố tụng dân sự của người được bảo vệ. Người đại diện trong tố tụng dân sự bao gồm người đại diện theo pháp luật và người đại diện theo ủy quyền. Dưới đây là các thông tin cần thiết giúp bạn đọc hiểu rõ hơn về vai trò của đại diện tố tụng. Hãy cùng Ben Thanh Law tìm hiểu nhé!",
    },
    {
      img: "https://picsum.photos/200?random=2",
      header: "Tiêu đề Card 2",
      content: "Nội dung cho card thứ 2.",
    },
    {
      img: "https://picsum.photos/200?random=3",
      header: "Tiêu đề Card 3",
      content: "Nội dung cho card thứ 3.",
    },
    {
      img: "https://picsum.photos/200?random=4",
      header: "Tiêu đề Card 4",
      content: "Nội dung cho card thứ 4.",
    },
  ];

  return (
    <div className="bg-white w-full">
      <BreadcrumbDynamic />

      {/* Nội dung Route cha */}
      {isRootPath && <LayoutPage header={"Tổng Quan"} cardData={cardData} />}

      {/* Nội dung cho Route con */}
      <Outlet />
    </div>
  );
}
