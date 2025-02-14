import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SharingContact from "./components/SharingContact";
import Banner from "./components/Banner";
import SubFooter from "./components/SubFooter";
import HomePage from "./pages/HomePage/Homepage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ContentSection from "./components/contentSection/ContentSection";
import Card from "./components/serviceComponents/Card";
import Caurousel from "./components/serviceComponents/Caurousel";

function App() {
  const cardData = {
    img: "https://picsum.photos/200", // Đường dẫn ảnh demo
    header: "Tiêu đề Demo", // Tiêu đề
    content: "Nội dung ngắn gọn ở đây Nội dung ngắn gọn ở đây Nội dung ngắn gọn ở đâyNội dung ngắn gọn ở đây", // Nội dung
  };
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<></>} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Route cho trang lỗi */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SharingContact />
      <ContentSection
        header={"Dịch vụ luật sư"}
        content={
          "Tiên phong cung cấp giải pháp pháp lý tổng thể và đồng hành cùng doanh nghiệp"
        }
      />
      <Caurousel/>
       <Footer />
      <SubFooter />
    </Router>
  );
}

export default App;
