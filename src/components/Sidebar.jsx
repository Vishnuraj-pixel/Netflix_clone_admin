import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "../assets/styles/Sidebar";
import { navLinks } from "../services/constants/contants";

function Sidebar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // console.log('free')
    window.addEventListener("scroll", handleScroll);
    return () => {
      // console.log("clean-up");
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 92) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  let sidebar = [];
  if (scrolled) {
    sidebar.push("scrolled");
  } else {
    sidebar.pop();
  }

  return (
    <div>
      <Header className={sidebar.join(" ")}>
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
