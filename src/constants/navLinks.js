const navLinks = [
  { id: 1, label: "Trang chủ", path: "/" },
  {
    id: 2,
    label: "Giới thiệu",
    path: "/gioi-thieu",
    children: [
      { id: 21, label: "Về chúng tôi", path: "/gioi-thieu/ve-chung-toi" },
      { id: 22, label: "Lịch sử", path: "/gioi-thieu/lich-su" },
    ],
  },
  {
    id: 3,
    label: "Dịch vụ",
    path: "/dich-vu",
    children: [
      { id: 31, label: "Thiết kế web", path: "/dich-vu/thiet-ke-web" },
      { id: 32, label: "SEO Marketing", path: "/dich-vu/seo-marketing" },
    ],
  },
  { id: 4, label: "Liên hệ", path: "/lien-he" },
];

export default navLinks;
