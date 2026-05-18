import React from "react";
import SuccessStories from "../components/SuccessStories";
import Testimonials from "../components/Testimonials";
import Ready from "../components/Ready";
import ImpactNumbers from "../components/ImpactNumbers";
import ImpactPartners from "../components/ImpactPartners";
import QuotesSection from "../components/QuotesSection";


const Home = () => {
  return (
    <div className="about-div">
      <SuccessStories />
      <QuotesSection />
      <Testimonials />
      <ImpactNumbers />
      <ImpactPartners />
      <Ready />
    </div>
  );
};

export default Home;
