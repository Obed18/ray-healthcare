import React from "react";
import TeamMembers from "../components/TeamMembers";
import JoinMissionCard from "../components/JoinMissionCard";
import VolunteerImpact from "../components/VolunteerImpact";
import CoreValues from "../components/CoreValues";
import AboutSection from "../components/AboutSection";
import AboutInfo from "../components/AboutInfo";
import FounderSection from "../components/FounderSection";
import IconHovers from "../components/IconHovers";


const Home = () => {
  return (
    <div className="about-div">
      <AboutSection />
      <AboutInfo />
      <CoreValues />
      <FounderSection />
      <TeamMembers />
      <VolunteerImpact />
      <JoinMissionCard />
      <IconHovers />
    </div>
  );
};

export default Home;
