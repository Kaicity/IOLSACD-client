import React from "react";
import ContentSection from "../ContentSection";
import CardKnowledge from "./CardKnowledge";
import ItemKnowledge from "./ItemKnowledge";
import SearchKnowledge from "./SearchKnowledge";

const ILCKnowledgeSection = () => {
  const img = {
    img: "https://picsum.photos/200?random=1",
    header: "Quy định về người đại diện hợp pháp trong tố tụng dân sự - ILC",
    content:
      "Cơ quan, tổ chức, cá nhân khởi kiện để bảo vệ quyền và lợi ích hợp pháp của người khác cũng là người đại diện theo pháp luật trong tố tụng dân sự của người được bảo vệ. Người đại diện trong tố tụng dân sự bao gồm người đại diện theo pháp luật và người đại diện theo ủy quyền. Dưới đây là các thông tin cần thiết giúp bạn đọc hiểu rõ hơn về vai trò của đại diện tố tụng. Hãy cùng Ben Thanh Law tìm hiểu nhé!",
  };
  return (
    <div className="max-w-7xl mx-auto w-11/12 py-10">
      <div className="grid md:grid-cols-[35%_40%_25%]  gap-3">
        <div>
          <CardKnowledge {...img} />
        </div>
        <div className="grid md:grid-rows-4 grid-grid-cols-1 gap-4">
          <div>
            <ItemKnowledge {...img} />
          </div>
          <div>
            <ItemKnowledge {...img} />
          </div>
          <div>
            <ItemKnowledge {...img} />
          </div>
          <div>
            <ItemKnowledge {...img} />
          </div>
        </div>
        <div>
          <SearchKnowledge />
        </div>
      </div>
    </div>
  );
};

export default ILCKnowledgeSection;
