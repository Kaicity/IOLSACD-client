import React from "react";

export default function CardKnowledge({ img, header, content }) {
  return (
    <div className="group text-start cursor-pointer">
      {/* Container ảnh với overflow-hidden */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={header}
          className="h-[310px] w-full mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-2">
        <h1 className="text-base font-semibold p-1 hover:text-brandSecondary">
          {header}
        </h1>
        <p className="text-[14px] p-1 line-clamp-3">{content}</p>
        <a
          href=""
          className="text-[14px] w-full inline-block p-4 mx-2 text-end text-brandSecondary font-semibold hover:mx-1 hover:text-red-600"
        >
          Xem Thêm
        </a>
      </div>
    </div>
  );
}
