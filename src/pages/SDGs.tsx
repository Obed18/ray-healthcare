import React from "react";
import ImpactSDGs from "../components/ImpactSDGs";
import SDGMeasurement from "../components/SDGMeasurement";
import IconHovers from "../components/IconHovers";


    const Home = () => {
    return (
        <div className="sdg-div">
            <ImpactSDGs />
            <SDGMeasurement />
            <IconHovers />
        </div>
    );
    };

export default Home;
