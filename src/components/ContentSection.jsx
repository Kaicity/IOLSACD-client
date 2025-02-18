import React from "react";

export default function ContentSection({ header, content }) {
  return (
    <div className="max-w-7xl mx-auto text-black md:w-1/2 w-full text-center px-2">
      <h2 className="text-4xl font-extrabold text-brandSecondary mb-2">
        {header}
      </h2>
      <span className="text-neutralDGrey text-base">{content}</span>

      {/* Nếu muốn icon nằm giữa 2 đường kẻ */}
      <div className="flex items-center">
        <hr className="flex-1 mx-2 border-t-2 border-neutralGrey" />
        <div className=" text-5xl text-gray-500">⚖</div>
        <hr className="flex-1 mx-2 border-t-2 border-neutralGrey" />
      </div>
    </div>
  );
}
