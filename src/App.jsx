import React from "react";
import Home from "./components/Home";
import Team from "./components/Team";
import OTPPage from "./components/OTPPage";

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
        <Route path="/otppage" element={<OTPPage />} />
      </Routes>
    </div>
  );
};

export default App;
