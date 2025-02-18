import { Mail, Phone } from "lucide-react";
import { VietnamFlag, UKFlag, ChinaFlag } from "../assets/index";

import React from "react";

function Banner() {
  return (
    <div className="relative isolate flex flex-wrap lg:flex-row items-center gap-4 lg:gap-6 overflow-hidden bg-brandPrimary px-10 py-3 sm:px-6 text-white lg:justify-end">
      {/* Chữ chạy (marquee) */}
      <div className="w-[380px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite]">
          <p className="text-xl font-semibold text-white">
            CÔNG TY LUẬT TNHH BẾN THÀNH
          </p>
        </div>
      </div>

      {/* Phần thông tin chính */}
      <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
        {/* Email */}
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-5 h-5" />
          <span className="hidden sm:inline">Email:</span>
          <span className="truncate">info@benthanhlawllc.vn</span>
        </div>

        {/* Số điện thoại */}
        <div className="flex items-center gap-2 text-sm">
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Phone:</span>
          <span>0934 121 183</span>
        </div>

        {/* Chọn ngôn ngữ */}
        <div className="flex gap-2">
          <a href="ngon-ngu/vi/">
            <img
              src={VietnamFlag}
              alt="Vietnam"
              width={35}
              className="sm:w-10"
            />
          </a>
          <a href="ngon-ngu/en/">
            <img src={UKFlag} alt="UK" width={35} className="sm:w-10" />
          </a>
          <a href="ngon-ngu/en/">
            <img src={ChinaFlag} alt="UK" width={35} className="sm:w-10" />
          </a>
        </div>
      </div>

      <div className="w-[300px]"></div>
    </div>
  );
}

export default Banner;
