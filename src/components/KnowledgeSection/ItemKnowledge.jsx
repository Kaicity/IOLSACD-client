import React from "react";
import {Link} from "react-router-dom";

export default function ItemKnowledge({...props}) {
  var getID = (e) => {
    e.preventDefault();
    console.log("Prevent Default", props.id);
  };

  return (
    <Link
      to={`/tong-quan/article.${
        props.title ? props.title.replace(/\s/g, "-") : "unknown"
      }=${props.id}`}
    >
      <div className=" text-start  grid lg:grid-cols-[1fr_2fr]  gap-3 cursor-pointer">
        <img
          src={props.preview_img}
          alt={props.title}
          className=" w-full aspect-square md:aspect-[4/3] object-cover mx-auto "
        />
        <div className="mx-auto w-full">
          <h1 className=" text-lg font-semibold  hover:text-brandSecondary line-clamp-1">
            {props.title}
          </h1>
          <p className="text-base line-clamp-2">{props.summary}</p>
        </div>
      </div>
    </Link>
  );
}
