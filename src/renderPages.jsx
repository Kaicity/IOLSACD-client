import AboutPage from "./pages/About/AboutPage";
import TeamPage from "./pages/About/TeamPage/TeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CatalogueOnlinePage from "./pages/About/CatalogueOnlinePage/CatalogOnlinePage";

export default function getPageComponent(path) {
  console.log(path);

  switch (path) {
    case "/":
      return <HomePage />;

    case "/tong-quan":
      return <AboutPage />;
    case "/tong-quan/doi-ngu-nhan-su":
      return <TeamPage />;
    case "/tong-quan/catalogue-online":
      return <CatalogueOnlinePage />;
    case "/tong-quan/linh-vuc-hoat-dong":
      return <></>;
    case "/tong-quan/gioi-thieu":
      return <></>;

    case "/dich-vu":
      return <></>;
    case "/dich-vu/dich-vu-cho-thue-phong-phap-che-ben-ngoai":
      return <></>;
    case "/dich-vu/dich-vu-dai-dien-to-tung":
      return <></>;
    case "/dich-vu/dich-vu-dai-dien-ngoai-to-tung":
      return <></>;
    case "/dich-vu/dich-vu-luat-su-gia-dinh":
      return <></>;
    case "/dich-vu/dich-vu-tu-van-xay-dung-he-thong-quan-tri-noi-bo-cong-ty":
      return <></>;

    case "/tin-tuc":
      return <></>;

    case "/kien-thuc-ve-luat":
      return <></>;

    case "/lien-he":
      return <ContactPage />;
    default:
      return <NotFoundPage />;
  }
}
