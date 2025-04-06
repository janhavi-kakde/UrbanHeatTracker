import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import SplashScreen from "./Components/SplashScreen";
import WelcomePage from "./Components/WelcomePage";
import MapComponent from "./Components/MapComponent";

// Splash wrapper component inside App.jsx
const SplashWrapper = () => {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      navigate("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return null;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashWrapper />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
