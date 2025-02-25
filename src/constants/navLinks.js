const navLinks = [
  {id: 1, label: "Trang chủ", path: "/"},
  {
    id: 2,
    label: "Tổng quan",
    path: "/tong-quan",
    children: [
      {id: 21, label: "Đội ngũ nhân sự", path: "/tong-quan/:slug"},
      {
        id: 22,
        label: "Catalogue Online",
        path: "/tong-quan/:slug",
      },
      {
        id: 23,
        label: "Giới Thiệu",
        path: "/tong-quan/:slug",
      },
      {
        id: 24,
        label: "Lĩnh Vực Hoạt động",
        path: "/tong-quan/:slug",
      },
    ],
  },
  {
    id: 3,
    label: "Dịch vụ",
    path: "/dich-vu",
    children: [
      {
        id: 31,
        label: "Cho Thuê Phòng Pháp Chế Bên Ngoài",
        path: "/dich-vu/:slug",
      },
      {
        id: 32,
        label: "Dịch Vụ Đại Diện Tổ Tụng",
        path: "/dich-vu/:slug",
      },
      {
        id: 33,
        label: "Dịch Vụ Đại Diện Ngoài Tổ Tụng",
        path: "/dich-vu/:slug",
      },
      {
        id: 34,
        label: "Dịch Vụ Luật Sư Gia Đình",
        path: "/dich-vu/:slug",
      },
      {
        id: 35,
        label: "Tư Vấn Xây Dựng Hệ Thống Quản Trị Nội Bộ Công Ty",
        path: "/dich-vu/:slug",
      },
    ],
  },
  {id: 4, label: "Tin tức", path: "/tin-tuc"},
  {id: 5, label: "Kiến thức về luật", path: "/kien-thuc-ve-luat"},
  {id: 6, label: "Liên hệ", path: "/lien-he"},
];

export default navLinks;
