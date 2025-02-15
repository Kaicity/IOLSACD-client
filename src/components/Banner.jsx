import { Mail, Phone } from "lucide-react";
import { VietnamFlag, UKFlag } from "../assets/index";

import React from "react";

function Banner() {
  return (
    <div className="relative isolate flex flex-wrap items-center gap-x-6 overflow-hidden bg-brandPrimary px-10 py-5 sm:px-6 sm:before:flex-1 text-white">
      <div className="flex flex-1 justify-start mt-4 sm:mt-0"></div>

      {/* Chữ chạy từ phải sang trái nhưng chỉ trong khu vực của nó */}
      <div className="w-[480px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite]">
          <p className="text-xl font-semibold text-white">
            CÔNG TY KHOA HỌC CÔNG NGHỆ PHẦN MỀM
          </p>
        </div>
      </div>

      {/* Phần thông tin chính */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 w-full sm:w-auto ml-auto">
        <p className="text-sm text-white flex flex-wrap items-center gap-4">
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
                width={35}
                className="sm:w-10"
              />
            </a>
            <a href="/">
              <img src={UKFlag} alt="UK" width={35} className="sm:w-10" />
            </a>
          </div>
        </p>
      </div>

      {/* Nút bên phải */}
      <div className="flex flex-1 justify-end mt-4 sm:mt-0"></div>
    </div>
  );
}

export default Banner;
