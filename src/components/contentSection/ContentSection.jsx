import React from "react";

export default function ContentSection({ header, content }) {
  return (
    <div className="max-w-7xl mx-auto text-black w-1/2 text-center px-2">
      <h3 className="text-brandSecondary font-bold text-3xl">{header}</h3>
      <span className="text-neutralDGrey text-base">{content}</span>

      {/* Nếu muốn icon nằm giữa 2 đường kẻ */}
      <div className="flex items-center pb-16">
        <hr className="flex-1 mx-2" />
        <div className=" text-5xl " >⚖</div>
        <hr className="flex-1 mx-2" />
      </div>
    </div>
  );
}
