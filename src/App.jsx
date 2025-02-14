import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import SharingContact from "./components/SharingContact";
import Contact from "./pages/Contact";
import Banner from "./components/Banner";
import SubFooter from "./components/SubFooter";

function App() {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<></>} />
        <Route path="/contact" element={<Contact />} />

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
