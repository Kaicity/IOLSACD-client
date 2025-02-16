import React from "react";

export default function Card({ img, header, content }) {
  return (
    <div className="text-center cursor-pointer">
      <img
        src={img}
        alt={header}
        className=" p-2 h-[220px] w-full mx-auto rounded-3xl hover:scale-90 duration-300 "
      />
      <div className="p-2">
        <h1 className="text-base font-semibold p-1 hover:text-brandSecondary">
          {header}
        </h1>
        <p className="text-[14px] p-1 line-clamp-3">{content}</p>
        <a
          href=""
          className="text-[14px] p-1 text-brandSecondary font-semibold hover:text-base hover:text-red-600"
        >
          Xem Thêm
        </a>
      </div>
    </div>
  );
}
