import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <Link to="/home" className="active">Home</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/news">News</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/organizations">Organizations</Link>
          <Link to="/profile">Profile</Link>
        </ul>
      </div>

      <div className="header__right">

        <i className="fas fa-bell"></i>
        <img
          src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg"
        />
        
        <div className="header__user">

            <span>Ash Ketchum</span>
            <i className="fas fa-caret-down"></i>
        </div>

      </div>
    </div>
  );
}

export default Header;
