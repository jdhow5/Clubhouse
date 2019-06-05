import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="main-header">
      <div className="logo-wpr">
        <div className="logo-img"><img src="https://www.rbc.com/dvl/assets/images/logos/rbc-logo-shield.svg" alt="" /></div>
      </div>
      <div className="header-content">
        <nav className="">
          <NavLink to="/" className="" activeStyle={activeStyle} exact>
            Home
          </NavLink>
          {" | "}
          <NavLink to="/courses" className="" activeStyle={activeStyle}>
            Courses
          </NavLink>
          {" | "}
          <NavLink to="/about" className="" activeStyle={activeStyle}>
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
