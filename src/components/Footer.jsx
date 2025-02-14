import React from "react";
import { Logo } from "../assets";

const Footer = () => {
  const companyLinks = [
    { text: "Về chúng tôi", href: "#" },
    { text: "Bài viết", href: "#" },
    { text: "Liên hệ chúng tôi", href: "#" },
    { text: "Tiêu điểm", href: "#" },
    { text: "Đánh giá", href: "#" },
  ];

  const supportLinks = [
    { text: "Hỗ trợ khách hàng", href: "#" },
    { text: "Điều khoản và dịch vụ", href: "#" },
    { text: "Tư vấn nhanh", href: "#" },
    { text: "Chính sách an toàn", href: "#" },
    { text: "Hoạt động", href: "#" },
  ];

  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98011fa7b6954b38308ac43b77bed6671caff34918de459957ce80f3efc56180?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37c6c258905673ae11392618a6790b21163a2915c34073a534cb62ad5074a0c5?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/918f0713b545abd86ca478c16ba5246d9f6d11b1c6a754deab189831102a7a6e?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7b22d30d1243051bb008c93f600436e6fa895ad14f6cd9d77c46259d2d84d3a?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="flex gap-10 items-center justify-center px-40 py-16 bg-brandPrimary max-md:px-5">
      <div className="flex overflow-hidden flex-wrap gap-8 items-start min-w-[240px] max-md:max-w-full">
        {/* Cột 1: Công Ty */}
        <div className="flex overflow-hidden flex-col w-48">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Công Ty
          </h2>
          <nav className="flex overflow-hidden flex-col mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
            {companyLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-3 first:mt-0 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Cột 2: Hỗ Trợ */}
        <div className="flex overflow-hidden flex-col w-48">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Hỗ Trợ
          </h2>
          <nav className="flex overflow-hidden flex-col mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
            {supportLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-3 first:mt-0 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Cột 3: Dịch Vụ */}
        <div className="flex overflow-hidden flex-col w-40">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Dịch Vụ
          </h2>
          <nav className="flex overflow-hidden flex-col mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
            {supportLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-3 first:mt-0 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Cột 5: Nhận Thông Tin Mới & Bản Đồ */}
        <div className="flex overflow-hidden flex-col w-60">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Nhận Thông Tin Mới
          </h2>
          <form
            className="flex mt-6 w-full max-w-[500px] gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4">
              <input
                type="email"
                id="emailInput"
                placeholder="Nhập email của bạn"
                className="w-full px-3 py-2 text-sm bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button className="bg-white text-black font-semibold py-2 px-4 w-full">
                Đăng Ký
              </button>
            </div>
          </form>
        </div>

        {/* Cột 5: bản đồ */}
        <div className="flex overflow-hidden flex-col w-72">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Bản đồ
          </h2>
          <div className="mt-6 w-full h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31358.792693348132!2d106.637999!3d10.746112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7cff633fdd%3A0x85ee85db9cb263ba!2zUXXhuq1uIDYsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1739501886661!5m2!1svi!2sus"
              width={400}
              height={300}
              style={{ border: 0 }} // ✅ Correct usage in React
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
