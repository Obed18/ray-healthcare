import React from "react";
import TeamMembers from "../components/TeamMembers";
import JoinMissionCard from "../components/JoinMissionCard";
import VolunteerImpact from "../components/VolunteerImpact";
import CoreValues from "../components/CoreValues";
import AboutSection from "../components/AboutSection";
import AboutInfo from "../components/AboutInfo";

const Home = () => {
  return (
    <div className="about-div">
      <AboutSection />
      <AboutInfo />
      <CoreValues />
      <TeamMembers />
      <VolunteerImpact />
      <JoinMissionCard />
    </div>
  );
};

export default Home;
