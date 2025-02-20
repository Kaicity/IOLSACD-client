import React from "react";
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
    <div className="max-w-7xl md:mx-auto px-2 md:w-3/4 w-full py-10">
      <div className="grid lg:grid-cols-[35%_40%_25%] grid-rows-1 gap-3">
        <div>
          <CardKnowledge {...img} />
        </div>
        {/* Chỉnh grid cho ItemKnowledge: 1 cột trên mobile, 2 cột trên md và các breakpoint lớn hơn */}
        <div className="grid lg:grid-cols-1 grid-cols-2  gap-4 ">
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
        <div className="lg:block hidden">
          <SearchKnowledge />
        </div>
      </div>
    </div>
  );
};

export default ILCKnowledgeSection;
