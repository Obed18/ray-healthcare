import React from "react";
import VolunteerSection from "../components/VolunteerSection";
import PartnerSection from "../components/PartnerSection";
import RequestVisit from "../components/RequestVisit";
import IconHovers from "../components/IconHovers";


const Home = () => {
  return (
    <div className="involved-div">
      <VolunteerSection />
        <PartnerSection />
        <RequestVisit />
        <IconHovers />
    </div>
  );
};

export default Home;
