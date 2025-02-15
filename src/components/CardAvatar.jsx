import React from "react";

export default function CardAvatar({ img, name, title }) {
  return (
    <div className="text-center cursor-pointer">
      <img
        src={img}
        alt={name}
        className="p-2 w-[330px] h-auto mx-auto rounded-full object-cover transition-transform duration-300 hover:scale-90"
      />
      <div className="p-2">
        <h1 className="text-xl font-bold p-1 text-brandSecondary">{name}</h1>
        <p className="text-[14px] p-1 line-clamp-3 text-neutralDGrey font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}
