import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authenticateUserActions";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import "./Header.css";
import { Nav } from "react-bootstrap";
import { toast } from "react-toastify";

const Header = ({ isAuthenticated, logoutUser, history }) => {

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Log out successful");
        history.push("/login");
      })
      .catch(error => {
        alert("User authentication failed: " + error);
      });
  }

  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="main-header">
      <div className="logo-wpr">
        <div className="logo-img"></div>
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
          {" | "}
          {console.log(isAuthenticated)}
          {

            isAuthenticated ?
              <>
                <NavLink to="/profile" className="" activeStyle={activeStyle}>
                  Profile
                </NavLink>
                {" | "}
                <Nav.Item onClick={handleLogout}>
                  Logout
                </Nav.Item>
              </>
              :
              <NavLink to="/login" className="" activeStyle={activeStyle}>
                Login
              </NavLink>
          }

        </nav>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
