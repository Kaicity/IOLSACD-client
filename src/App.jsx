import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SharingContact from "./components/SharingContact";
import Banner from "./components/Banner";
import SubFooter from "./components/SubFooter";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LogoWrapper from "./components/LogoWrapper";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <Router>
      <Banner />
      <Header />
      <LogoWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<></>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage/>} />

        {/* Route cho trang lỗi */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SharingContact />
      <Footer />
      <SubFooter />
    </Router>
  );
}

export default App;
