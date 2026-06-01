import React from "react";
import SuccessStories from "../components/SuccessStories";
import Testimonials from "../components/Testimonials";
import Ready from "../components/Ready";
import ImpactNumbers from "../components/ImpactNumbers";
import ImpactPartners from "../components/ImpactPartners";
import QuotesSection from "../components/QuotesSection";
import IconHovers from "../components/IconHovers";


const Home = () => {
  return (
    <div className="about-div">
      <SuccessStories />
      <QuotesSection />
      <Testimonials />
      <ImpactNumbers />
      <ImpactPartners />
      <Ready />
      <IconHovers />
    </div>
  );
};

export default Home;
