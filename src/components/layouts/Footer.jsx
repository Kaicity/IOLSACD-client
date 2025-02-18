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
    { text: "thongular@gmail.com", id: 3, name: "Email:" },
    {
      text: "Thứ 2 - Thứ 7: Từ 7:30 đến 18:00",
      id: 4,
      name: "Thời gian làm việc:",
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
    <footer className="bg-brandPrimary text-white py-10 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap gap-8 md:gap-12">
        {/* Cột 1: Liên hệ */}
        <div className="w-full md:w-[45%] lg:w-[20%]">
          <h2 className="text-xl font-semibold">Liên hệ với chúng tôi</h2>
          <hr className="border-t-2 mt-2" />
          <nav className="mt-4 space-y-3 text-md">
            {companyLinks.map((link) => (
              <p key={link.id}>
                <span
                  className={clsx("font-bold", {
                    "whitespace-pre-line": link.id === 4,
                  })}
                >
                  {link.name}
                </span>{" "}
                {link.text}
              </p>
            ))}
          </nav>
        </div>

        {/* Cột 2: Hỗ trợ */}
        <div className="w-full md:w-[45%] lg:w-[20%]">
          <h2 className="text-xl font-semibold">Hỗ Trợ</h2>
          <hr className="border-t-2 mt-2" />
          <nav className="mt-4 space-y-3">
            {supportLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-2 hover:translate-x-2 duration-300 hover:text-brandSecondary"
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

        {/* Cột 3: Đăng ký tư vấn */}
        <div className="w-full md:w-[45%] lg:w-[20%]">
          <h2 className="text-xl font-semibold">Đăng ký tư vấn</h2>
          <hr className="border-t-2 mt-2" />
          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="name"
              placeholder="Họ tên"
              className="w-full px-3 py-2 text-sm bg-white text-black focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              id="phone"
              placeholder="Số điện thoại"
              className="w-full px-3 py-2 text-sm bg-white text-black focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              id="service"
              className="w-full px-3 py-2 text-sm bg-white text-black focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled selected>
                Chọn dịch vụ
              </option>
              <option value="consulting">Tư vấn</option>
              <option value="training">Đào tạo</option>
              <option value="support">Hỗ trợ kỹ thuật</option>
            </select>
            <textarea
              id="content"
              placeholder="Nội dung"
              className="w-full h-24 px-3 py-2 text-sm bg-white text-black focus:ring-2 focus:ring-blue-500"
              required
            />
            <button className="bg-white text-black font-semibold py-2 px-4 w-full">
              Đăng Ký ngay
            </button>
          </form>
        </div>

        {/* Cột 4: Bản đồ */}
        <div className="w-full md:w-[45%] lg:w-[20%]">
          <h2 className="text-xl font-semibold">Bản đồ</h2>
          <hr className="border-t-2 mt-2" />
          <div className="mt-4 w-full h-60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31358.792693348132!2d106.637999!3d10.746112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7cff633fdd%3A0x85ee85db9cb263ba!2zUXXhuq1uIDYsIEjhu5MgQ2jDrCBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1739501886661!5m2!1svi!2sus"
              width="100%"
              height="100%"
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
