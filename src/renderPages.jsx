import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/AboutPage/TeamPage/TeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CatalogueOnlinePage from "./pages/AboutPage/CatalogueOnlinePage/CatalogOnlinePage";
import IntroductionPage from "./pages/AboutPage/Introduction/IntroductionPage";
import IndustryPage from "./pages/AboutPage/Industry/IndustryPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import LegalRentalPage from "./pages/ServicePage/LegalRental/LegalRentalPage";
import LitigationPage from "./pages/ServicePage/Litigation/LitigationPage";
import OutLitigationPage from "./pages/ServicePage/OutLitigation/OutLitigation";
import FamilyLawyerPage from "./pages/ServicePage/FamilyLawyer/FamilyLawyerPage";
import ConsultingPage from "./pages/ServicePage/Consulting/ConsultingPage";

export default function getPageComponent(path) {
  console.log(path);

  switch (path) {
    case "/":
      return <HomePage />;

    case "/tong-quan":
      return <AboutPage />;
    case "/tong-quan/doi-ngu-nhan-su":
      return <TeamPage  />;
    case "/tong-quan/catalogue-online":
      return <CatalogueOnlinePage />;
    case "/tong-quan/linh-vuc-hoat-dong":
      return <IndustryPage/>;
    case "/tong-quan/gioi-thieu":
      return <IntroductionPage/>;

    case "/dich-vu":
      return <ServicePage/>;
    case "/dich-vu/dich-vu-cho-thue-phong-phap-che-ben-ngoai":
      return <LegalRentalPage/>;
    case "/dich-vu/dich-vu-dai-dien-to-tung":
      return <LitigationPage/>;
    case "/dich-vu/dich-vu-dai-dien-ngoai-to-tung":
      return <OutLitigationPage/>;
    case "/dich-vu/dich-vu-luat-su-gia-dinh":
      return <FamilyLawyerPage/>;
    case "/dich-vu/dich-vu-tu-van-xay-dung-he-thong-quan-tri-noi-bo-cong-ty":
      return <ConsultingPage/>;

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
