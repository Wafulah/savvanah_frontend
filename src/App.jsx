import React from "react";
import Home from "./components/Home";
import Team from "./components/Team";
import Visit from "./components/Visit";
import OTPPage from "./components/OTPPage";
import Bill from "./components/Bill";

import Nav from "./components/Nav";

import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/otppage" element={<OTPPage />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </div>
  );
};

export default App;
