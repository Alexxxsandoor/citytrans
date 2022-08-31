import React from "react";
import { useState } from "react";
import "./popup-style.scss";
import menuIcon from "../../image/icon_menu.png";
import Popup from "./Popup";

const Menu = () => {
  const [popup, setPopup] = useState(false);

  const handleOpen = () => setPopup(!popup);

  // const handleClose = () => {
  //   setPopup(false);
  // };

  return (
    <div className="popup">
      <img
        className="menu"
        src={menuIcon}
        alt="menu"
        onClick={() => handleOpen()}
      />
      {popup ? <Popup handleOpen={handleOpen} /> : null}
    </div>
  );
};

export default Menu;
