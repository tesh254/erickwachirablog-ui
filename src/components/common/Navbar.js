import React from "react";
import { NavLink } from "react-router-dom";
import myFunction from '../../assets/js/main';

const Navbar = () => (
  <div className="topnav" id="myTopnav">
    <NavLink to="/" id="link" className="active">
    😁 Explore
    </NavLink>
    <NavLink to="/about" id="link">About</NavLink>
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars" />
    </a>
  </div>
);

export default Navbar;