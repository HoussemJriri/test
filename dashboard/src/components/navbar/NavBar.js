import "./NavBar.css";
import avatar from "../../assets/avatar.svg";
import React from "react";

export const NavBar = ({ sidebarOpen, opensideBar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => opensideBar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <a href="#">Subscribes</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o"></i>
        </a>
        <a href="#">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};
