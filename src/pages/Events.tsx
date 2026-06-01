import React from "react";
import LatestEvents from "../components/LatestEvents";
import IconHovers from "../components/IconHovers";


const Home = () => {
  return (
    <div className="events-div">
      <LatestEvents />
      <IconHovers />
    </div>
  );
};

export default Home;
