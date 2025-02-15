import React from "react";
import {FaSearch} from "react-icons/fa";
import img from "../../assets/knowledge/bob1.jpg";
const SearchKnowledge = () => {
  return (
    <div className="border-2 box-border  border-brandSecondary w-full h-full  md:block hidden">
      <h1 className=" bg-brandSecondary w-full p-4 text-white font-semibold text-lg text-center">
        {" "}
        Tìm Kiếm
      </h1>
      <div className=" p-3 flex justify-center">
        {" "}
        <input type="text" className="w-3/4 border-2 border-brandSecondary" />
        <button className=" bg-brandSecondary text-white p-3.5">
          {" "}
          <FaSearch />
        </button>
      </div>
      <img src={img} alt="" className="h-[220px] w-3/4 mx-auto" />
      <div className="text-center font-bold text-red-800">
        <h1 className="text-lg px-0.5 text-brandSecondary ">
          Tổng đài tư vấn Pháp luật
        </h1>
        <h1 className="p-0.5 text-2xl text- ">0482 110 223</h1>
        <h1 className="mb-2">24/7</h1>
        <a
          href=""
          className="bg-red-800 text-white p-2 my-2  inline-block rounded-md hover:opacity-80"
        >
          Gọi Ngay
        </a>
      </div>
    </div>
  );
};

export default SearchKnowledge;
