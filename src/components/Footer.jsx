import clsx from "clsx";
import { MoveRight } from "lucide-react";
import React from "react";

const Footer = () => {
  const companyLinks = [
    {
      text: "Nhà số 32, Khu nhà ở Park Riverside, số 130 Bưng Ông Thoàn, Phường Phú Hữu, TP. Thủ Đức, TP. HCM",
      id: 1,
      name: "Địa chỉ:",
    },
    { text: "0934 121 183", id: 2, name: "Hotline:" },
    {
      text: "thongular@gmail.com",
      id: 3,
      name: "Email:",
    },
    {
      text: "Thứ 2 - Thứ 7: Từ 7:30 đến 18:00",
      id: 4,
      name: "Thời gian làm việc:\n",
    },
  ];

  const supportLinks = [
    { text: "Cho Thuê Phòng Pháp Chế Bên Ngoài", href: "#" },
    { text: "Dịch vụ Đại Diện Tố Tụng", href: "#" },
    { text: "Dịch vụ Đại Diện Ngoài Tố Tụng", href: "#" },
    { text: "Dịch vụ Luật Sư Gia Đình", href: "#" },
    { text: "Tư Vấn Xây Dựng Hệ Thống Quản Trị Nội Bộ Công Ty", href: "#" },
  ];

  return (
    <footer className="flex gap-10 items-center justify-center px-40 py-16 bg-brandPrimary max-md:px-5">
      <div className="flex overflow-hidden flex-wrap gap-12 items-start min-w-[240px] max-md:max-w-full">
        {/* Cột 1: Công Ty */}
        <div className="flex overflow-hidden flex-col w-80">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Liên hệ với chúng tôi
          </h2>
          <hr className="flex-1 border-t-2 mt-2" />
          <nav className="flex overflow-hidden flex-col mt-6 w-80 whitespace-normal text-md leading-snug text-slate-100">
            {companyLinks.map((link, index) => (
              <p
                key={index}
                href={link.href}
                className="mt-3 first:mt-0 focus:ring-2 focus:ring-blue-300 rounded"
              >
                <span
                  className={clsx("mr-2", {
                    "font-bold whitespace-pre-line": link.id == 4,
                  })}
                >
                  {link.name}
                </span>
                {link.text}
              </p>
            ))}
          </nav>
        </div>

        {/* Cột 2: Hỗ Trợ */}
        <div className="flex overflow-hidden flex-col w-80">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Hỗ Trợ
          </h2>
          <hr className="flex-1 border-t-2 mt-2" />
          <nav className="flex overflow-hidden flex-col mt-6 w-80 whitespace-normal text-md leading-snug text-slate-100">
            {supportLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 mb-2 hover:translate-x-2 duration-300 hover:text-brandSecondary"
              >
                <MoveRight className="shrink-0" />
                <a
                  href={link.href}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </nav>
        </div>

        {/* Cột 3: Nhận Thông Tin Mới */}
        <div className="flex overflow-hidden flex-col w-80">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Đăng ký tư vấn
          </h2>
          <hr className="flex-1 border-t-2 mt-2" />
          <form
            className="flex mt-6 w-full max-w-[500px] gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                id="name"
                placeholder="Họ tên"
                className="w-80 px-3 py-2 text-sm bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                id="phone"
                placeholder="Số điện thoại"
                className="w-80 px-3 py-2 text-sm bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                id="date"
                placeholder="Ngày tư vấn"
                className="w-80 px-3 py-2 text-sm bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                id="content"
                placeholder="Nội dung"
                className="w-80 h-24 px-3 py-2 text-sm bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button className="bg-white text-black font-semibold py-2 px-4 w-40">
                Đăng Ký ngay
              </button>
            </div>
          </form>
        </div>

        {/* Cột 4: Bản đồ */}
        <div className="flex overflow-hidden flex-col w-80">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Bản đồ
          </h2>
          <hr className="flex-1 border-t-2 mt-2" />
          <div className="mt-6 w-[300px] h-[280px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31358.792693348132!2d106.637999!3d10.746112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7cff633fdd%3A0x85ee85db9cb263ba!2zUXXhuq1uIDYsIEjhu5MgQ2jDrCBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1739501886661!5m2!1svi!2sus"
              width={400}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
