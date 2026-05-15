import React from "react";
import VolunteerSection from "../components/VolunteerSection";
import PartnerSection from "../components/PartnerSection";
import RequestVisit from "../components/RequestVisit";

const Home = () => {
  return (
    <div className="involved-div">
      <VolunteerSection />
        <PartnerSection />
        <RequestVisit />
    </div>
  );
};

export default Home;
