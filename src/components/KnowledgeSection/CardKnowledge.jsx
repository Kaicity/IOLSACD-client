import React from "react";
import {Link} from "react-router-dom";

export default function CardKnowledge({...props}) {
  var getID = (e) => {
    e.preventDefault();
    console.log("Prevent Default", props.id);
  };

  return (
    <div className="group text-start cursor-pointer">
      {/* Container ảnh với overflow-hidden */}
      <div className="overflow-hidden">
        <img
          src={props.preview_img}
          alt={props.title}
          className="md:h-[310px] aspect-[2/1] w-full mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="text-justify">
        <h1 className="text-lg font-semibold p-1 hover:text-brandSecondary">
          {props.title}
        </h1>
        <p className="text-base p-1 line-clamp-3">{props.summary}</p>
        <Link
          to={`/tong-quan/article.${
            props.title ? props.title.replace(/\s/g, "-") : "unknown"
          }=${props.id}`}
          className="text-base w-full inline-block p-4 mx-2 text-end text-brandSecondary font-semibold hover:mx-1 hover:text-red-600"
        >
          Xem Thêm
        </Link>
      </div>
    </div>
  );
}
