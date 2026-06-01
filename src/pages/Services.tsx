import React from "react";
import HowWeWork from "../components/HowWeWork";
import ServicesSection from "../components/ServicesSection";
import BookScreening from "../components/BookScreening";
import IconHovers from "../components/IconHovers";


const Home = () => {
  return (
<div className="services-div">
    <ServicesSection />
    <HowWeWork />
    <BookScreening />
    <IconHovers />
</div>
  );
};

export default Home;
