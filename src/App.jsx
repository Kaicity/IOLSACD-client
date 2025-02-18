import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer.jsx";
import Header from "./components/layouts/Header.jsx";
import SharingContact from "./components/layouts/SharingContact.jsx";
import Banner from "./components/layouts/Banner.jsx";
import SubFooter from "./components/layouts/SubFooter.jsx";
import LogoWrapper from "./components/layouts/LogoWrapper";
import navLinks from "./constants/navLinks";
import getPageComponent from "./renderPages";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoadingScreenSlash from "./components/layouts/LoadingScreenSlash.jsx";

function App() {
  return (
    <Router>
      <Banner />
      <LogoWrapper />
      <Header />
      <LoadingScreenSlash />
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
