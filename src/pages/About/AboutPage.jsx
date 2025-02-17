import React from "react";
import BreadcrumbDynamic from "../../components/Breadcrumb ";
import { div } from "framer-motion/client";
import CardKnowledge from "../../components/KnowledgeSection/CardKnowledge";
import ContentSection from "../../components/ContentSection";

export default function AboutPage() {
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
    {
      img: "https://picsum.photos/200?random=5",
      header: "Tiêu đề Card 5",
      content: "Nội dung cho card thứ 5.",
    },
  ];

  return (
    <div className="bg-white w-full">
      <div className="bg-gray-200 w-full">
        <div className="w-5/6 mx-auto p-4 z-50 text-black">
          <BreadcrumbDynamic />
        </div>
      </div>

      <div className="w-3/4 mx-auto p-4 z-50 text-black">
        <ContentSection header={"Tin Tức"} />.
        <div className="grid grid-cols-3 gap-5 bg-white">
          {cardData.map((item, index) => (
            <CardKnowledge key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
