import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
  <div>
    <nav className="nav-bar">
    <Link to="/" className="text-2xl text-white text-left px-2.5 py-2.5 font-bold">G3</Link>    
    <Link to="/" className=" opacity-75 text-white text-right px-2.5 py-2.5 font-semibold">Home</Link>
    <Link to="/team" className="opacity-75 text-white text-right px-2.5 py-2.5 font-semibold">Team</Link>
    <Link to="/visit" className="opacity-75 text-white text-right px-2.5 py-2.5 font-semibold">Visit</Link>
    </nav>
    </div>
    );
};

export default Nav;
