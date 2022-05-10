import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import Header from "../assets/styles/Sidebar";
import { navLinks } from "../services/constants/contants";

function Sidebar() {
  return (
    <div>
      <Header>
        <div className="subnav-center">
          <ul className="subnav-ul">
            {navLinks.map((link) => {
              const { id, name, path, icon } = link;
              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "nav-links active" : "nav-links";
                  }}
                >
                  <span className="icon">{icon}</span>
                  {name}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </Header>
      <Outlet />
    </div>
  );
}

export default Sidebar;
