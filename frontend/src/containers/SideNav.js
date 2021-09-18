import React from "react";
import "./SideNav.css";
import Logo from './Logo.jpeg';

import { Link } from "react-router-dom";

function SideNav() {
  const menus = [
    { to: "/analytics", text: "Analytics" },
    { to: "/profile", text: "Team" },
    { to: "/news", text: "Random" },
  ];

  const subreddits = [
    "#teamRocket",
    '#teamLigma',
    "#teamTrees",
    '#teamMagma',
    '#teamAqua',
    "#teamEarth",
    "#teamBlue",
    "#teamGreen",
    "#teamGeo",
    "#teamNeo",
    "#teamPlanets",
    '#teamPlant',
    '#teamSustainability', 
    '#teamEnv'
  ];
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img src={Logo} />
      </div>

      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search" />
        <i className="fas fa-search"></i>
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
        <h2>LeaderBoard</h2>
        <ul className="sidenav__subreddit">
          {subreddits.map(subreddit => (
              <li><Link to={`/r/${subreddit}`}>{subreddit}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
