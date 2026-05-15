import React, { useState } from "react";
import "../styles/home.css";

import Hero from "../components/Hero";
import CoreValuesSection from "../components/CoreValuesSection";
import AboutHighlight from "../components/AboutHighlight";
import FeaturedArticle from "../components/FeaturedArticle";
// import HeroVideo from "../components/HeroVideo";
import Footer from "../components/Footer";
// import BotIcon from "../components/BotIcon";
// import ChatSupport from "../components/ChatSupport";
// import ConsultationSection from "../components/ConsultationSection";

const Home: React.FC = () => {
  //   const [showChat, setShowChat] = useState<boolean>(false);

  //   const toggleChat = (): void => {
  //     setShowChat((prev) => !prev);
  //   };

  return (
    <div className="home">
      {/* Background blur wrapper */}
      <div className="home">
        <Hero />
        <CoreValuesSection />
        <FeaturedArticle />
        <AboutHighlight />
        {/* 
        <ConsultationSection /> */}
      </div>
    </div>
  );
};

export default Home;
