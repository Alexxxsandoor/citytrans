import React from "react";

import Menu from "../popup/Menu";
import "./header-style.scss";

const Header = () => {
  const navbar = [
    {
      title: "HOME",
      link: "",
    },
    {
      title: "TRANSPORT",
      link: "",
    },
    {
      title: "BUS STOP",
      link: "",
    },
    {
      title: "ROUTE",
      link: "",
    },
    {
      title: "ABOUT US",
      link: "",
    },
  ];

  return (
    <header>
      <h1>
        city<span>trans</span>.
      </h1>
      <nav className="navbar">
        <div className="navbar-list">
          {navbar.map((el) => (
            <p key={el.title}>{el.title}</p>
          ))}
        </div>
      </nav>
      <Menu />
    </header>
  );
};

export default Header;
