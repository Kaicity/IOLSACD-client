import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SharingContact from "./components/SharingContact";
import Banner from "./components/Banner";
import SubFooter from "./components/SubFooter";
import LogoWrapper from "./components/LogoWrapper";
import navLinks from "./constants/navLinks";
import getPageComponent from "./renderPages";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <Banner />
      <LogoWrapper />
      <Header />
      <Routes>
        {navLinks.map((link) => (
          <Route
            key={link.id}
            path={link.path}
            element={getPageComponent(link.path)}
          >
            {link.children &&
              link.children.map((child) => (
                <Route
                  key={child.id}
                  path={child.path}
                  element={getPageComponent(child.path)}
                />
              ))}
          </Route>
        ))}
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
