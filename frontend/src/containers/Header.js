import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function getActive(path) {
  if (path === window.location.pathname) {
    console.log(path+' is active')
    return "active"
  }
  return "inactive"
}

function Header() {
  const [name, setName] = useState('Anonymous')
  const [email, setEmail] = useState('example@example.com')
  const [imageUrl, setImageUrl] = useState('https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg')

  const menus = [
    { to: "/home", text: "Home" },
    { to: "/analytics", text: "Analytics" },
    { to: "/news", text: "News" },
    { to: "/volunteer", text: "Volunteer" },
    { to: "/organizations", text: "Organizations" },
    { to: "/profile", text: "Profile" },
  ];

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('userData'));
    if (user != undefined) {
      setName(user.name);
      setEmail(user.email);
      setImageUrl(user.imageUrl);
    }
  }, []);

  return (
    <div className="header">
      <div className="header__left">
        {menus.map((menu) => (
            <Link to={menu.to} className={getActive(menu.to)}>{menu.text}</Link>
        ))}
      </div>

      <div className="header__right">

        <i className="fas fa-bell"></i>
        <img
          src={imageUrl}
        />
        
        <div className="header__user">

            <span>{name}</span>
            <i className="fas fa-caret-down"></i>
        </div>

      </div>
    </div>
  );
}

export default Header;
