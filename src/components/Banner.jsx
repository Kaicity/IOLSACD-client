import { Mail, Phone } from "lucide-react";
import { VietnamFlag, UKFlag } from "../assets/index";

import React from "react";

function Banner() {
  return (
    <div className="relative isolate flex flex-wrap items-center gap-x-6 overflow-hidden bg-brandPrimary px-6 py-5 sm:px-3.5 sm:before:flex-1 text-white">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      ></div>

      {/* Phần thông tin chính */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 w-full sm:w-auto">
        <p className="text-sm text-white flex flex-wrap items-center gap-4">
          {/* Tên công ty */}
          <strong className="font-semibold w-full sm:w-auto">
            CÔNG TY KHOA HỌC CÔNG NGHỆ PHẦN MỀM
          </strong>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Email:</span>
            <span className="truncate">nguyenminhthongitmix@gmail.com</span>
          </div>

          {/* Số điện thoại */}
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Phone:</span>
            <span>07033384580</span>
          </div>

          {/* Chọn ngôn ngữ */}
          <div className="flex gap-2">
            <a href="/">
              <img
                src={VietnamFlag}
                alt="Vietnam"
                width={30}
                className="sm:w-10"
              />
            </a>
            <a href="/">
              <img src={UKFlag} alt="UK" width={30} className="sm:w-10" />
            </a>
          </div>
        </p>
      </div>

      {/* Nút bên phải */}
      <div className="flex flex-1 justify-end mt-4 sm:mt-0">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Tìm hiểu thêm</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
