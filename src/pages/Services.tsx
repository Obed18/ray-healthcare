import React from "react";
import HowWeWork from "../components/HowWeWork";
import ServicesSection from "../components/ServicesSection";
import BookScreening from "../components/BookScreening";

const Home = () => {
  return (
<div className="home">
    <ServicesSection />
    <HowWeWork />
    <BookScreening />
</div>
  );
};

export default Home;
