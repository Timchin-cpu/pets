import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Ads from "./components/Ads/Ads";
import Services from "./components/Services/Services";
import Main from "./components/Main/Main";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}
export default App;
