import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Impact from "./pages/Impact";
import SDGs from "./pages/SDGs";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Article from "./pages/Article";
import GetInvolved from "./pages/GetInvolved";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.css";

const AppLayout: React.FC = () => {
  const location = useLocation();
  const isSplashRoute = location.pathname === "/";

  return (
    <>
      {!isSplashRoute && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/impact-sdgs" element={<SDGs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
      {!isSplashRoute && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
