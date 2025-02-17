import { useEffect, useState } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContentSection from "../../components/ContentSection";
import BreadcrumbDynamic from "../../components/Breadcrumb ";
import { Link } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    subject: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Vui lòng nhập họ và tên";
    if (!formData.phone) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!formData.email) newErrors.email = "Vui lòng nhập địa chỉ email";
    if (!formData.address) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!formData.subject) newErrors.subject = "Vui lòng nhập chủ đề";
    if (!formData.message) newErrors.message = "Vui lòng nhập nội dung";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Dữ liệu gửi đi:", formData);
      // Xử lý gửi dữ liệu ở đây
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-gray-200 w-full">
        <div className="w-5/6 mx-auto p-4 z-50 text-black">
          <BreadcrumbDynamic />
        </div>
      </div>

      <div className="px-2 py-10 lg:px-14 lg:py-10 mb-12">
        <ContentSection header="LIÊN HỆ" />
        <div className="flex items-center justify-center">
          <div className="container mx-auto p-5 grid lg:grid-cols-1 xl:grid-cols-2 gap-10">
            {/* Google Map Section */}
            <div className="relative">
              {/* Contact Info Section */}
              <div className="col-span-2 mb-10 space-y-1">
                <h1 className="text-3xl font-bold text-brandSecondary mb-4">
                  {"ILC Platform".toUpperCase()}
                </h1>
                <div className="flex">
                  <MapPinIcon className="w-5 h-5 text-brandPrimary mr-2" />
                  <p className="text-black text-md mb-2 flex items-center">
                    Địa chỉ: Nhà số 32, Khu nhà ở Park Riverside, số 130 Bưng
                    Ông Thoàn, Phường Phú Hữu, TP. Thủ Đức, TP. HCM
                  </p>
                </div>
                <div className="flex">
                  <EnvelopeIcon className="w-5 h-5 text-brandPrimary mr-2" />
                  Email: info@benthanhlawllc.vn
                  <p className="text-neutralGrey text-md mb-2 flex items-center"></p>
                </div>
                <div className="flex">
                  <PhoneIcon className="w-5 h-5 text-brandPrimary mr-2" />
                  Hotline: 0934 121 183
                  <p className="text-neutralGrey text-md mb-2 flex items-center"></p>
                </div>
                <div className="flex">
                  <Link className="w-5 h-5 text-brandPrimary mr-2" />
                  Hotline: 0934 121 183
                  <p className="text-neutralGrey text-md mb-2 flex items-center"></p>
                </div>
              </div>
              <div className="relative w-full aspect-[21/9] overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.395286557141!2d106.62769921122445!3d10.746132411895305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7cff633fdd%3A0x85ee85db9cb263ba!2sDistrict%206%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1739783050295!5m2!1sen!2s"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form Section */}
            <form className="space-y-4 p-0 lg:p-0" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Họ tên"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none text-sm"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none text-sm"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none text-sm"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Chủ đề"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none text-sm"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Nội dung"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none text-sm h-32 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <label className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer">
                  Chọn file
                  <input
                    type="file"
                    name="file"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
                {formData.file && (
                  <p className="text-sm">{formData.file.name}</p>
                )}
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-brandSecondary text-white p-2 rounded hover:brightness-90"
                >
                  Gửi
                </button>
                <button
                  type="reset"
                  className="flex-1 bg-neutralGrey text-white p-2 rounded hover:brightness-90 transition"
                  onClick={() =>
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      address: "",
                      subject: "",
                      message: "",
                      file: null,
                    })
                  }
                >
                  Nhập lại
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
