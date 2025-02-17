import React from "react";

export default function ItemKnowledge({ img, header, content }) {
  return (
    <div className=" text-start grid grid-cols-[1fr_2fr] gap-3 cursor-pointer">
      <img src={img} alt={header} className="  w-full h-[110px] " />
      <div className="mx-auto w-full">
        <h1 className=" text-[15px] font-semibold  hover:text-brandSecondary line-clamp-2">
          {header}
        </h1>
        <p className="text-[14px] line-clamp-2">{content}</p>
      </div>
    </div>
  );
}
