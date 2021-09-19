import React from "react";
import "./SideNav.css";
import Logo from './Logo.jpeg';
import Leaderboard from "./Leaderboard/Leaderboard";

import { Link } from "react-router-dom";

function SideNav() {
  const menus = [
    { to: "/analytics", text: "Analytics" },
    { to: "/profile", text: "Team" },
    { to: "/news", text: "Random" },
  ];

  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img src={Logo} />
      </div>

      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search" />
        {/* <i className="fas fa-search"></i> */}
      </div>

      <div className="sidenav__link">
        <ul className="sidenav__menu">
          {menus.map((menu) => (
            <li>
              <Link to={menu.to}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="leaderboard-container">
          <h1 className="leaderboard-header">LeaderBoard</h1>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
