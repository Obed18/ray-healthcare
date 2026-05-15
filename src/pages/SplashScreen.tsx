import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Progress animation (0 → 100 in 3 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / 30; // smooth fill
      });
    }, 100);

    // Navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="splash-container">
      {/* Eye Loader */}
      <span className="loader" />

      {/* Line Loader */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default SplashScreen;
