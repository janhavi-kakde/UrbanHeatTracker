import React from "react";
import splashImage from "../assets/splash_screen.jpeg";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-container animate-fade">
      <img src={splashImage} alt="Splash" className="splash-image" />
      <div className="splash-text">Welcome to Urban Heat Tracker</div>
    </div>
  );
};

export default SplashScreen;
