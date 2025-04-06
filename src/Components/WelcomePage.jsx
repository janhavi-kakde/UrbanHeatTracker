import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <p className="welcome-paragraph">
        🌍 <strong>Our Cities Are Heating Up. It’s Time to Act.</strong><br />
        🔥 The streets are scorching.<br />
        🏙 The air feels heavier.<br />
        💧 Every summer gets worse.<br /><br />
        But what if there was a simple way to cool our cities, clean our air, and create a healthier future?<br /><br />
        🌱 Trees hold the answer.<br />
        🌳 Planted in the right places, they can lower temperatures by up to 5°C.<br />
        💚 They bring shade, fresh air, and life back to our streets.<br /><br />
        Your city needs you.<br />
        🌍 Be the change. Plant where it matters.
      </p>
      <div className="button-container">
        <button onClick={() => navigate("/map")} className="welcome-button">
          🌍 Explore HeatMap
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
