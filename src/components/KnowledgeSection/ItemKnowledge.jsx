import React from "react";

export default function ItemKnowledge({img, header, content}) {
  return (
    <div className=" text-start  grid lg:grid-cols-[1fr_2fr]  gap-3 cursor-pointer">
      <img
        src={img}
        alt={header}
        className=" w-full aspect-square md:aspect-[4/3] object-cover mx-auto "
      />
      <div className="mx-auto w-full">
        <h1 className=" text-lg font-semibold  hover:text-brandSecondary line-clamp-1">
          {header}
        </h1>
        <p className="text-base line-clamp-2">{content}</p>
      </div>
    </div>
  );
}
