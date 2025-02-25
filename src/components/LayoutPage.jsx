import React from "react";
import ContentSection from "./ContentSection";
import CardKnowledge from "./KnowledgeSection/CardKnowledge";

export default function LayoutPage({ data, header }) {
  console.log("Data nhận được:", data);
  return (
    <div>
      <div className="md:w-3/4 w-full mx-auto md:px-4 px-2 py-10 z-50 text-black">
        <ContentSection header={header} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-5 bg-white">
          {Array.isArray(data) ? data.map((item, index) => (
            <CardKnowledge key={index} {...item} />
          )) : <p>Dữ liệu không phải mảng</p>}
        </div>
      </div>
    </div>
  );
}

