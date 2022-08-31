import React from "react";
import "./design-style.scss";
import whatsapp from "../../image/whatsapp.png";
import instagram from "../../image/instagram.png";
import facebook from "../../image/facebook.png";
import twitter from "../../image/twitter.png";

const Design = () => {
  const numberСrosses = 7;
  const crosses = [];
  for (let i = 0; i < numberСrosses; i++) crosses[i] = i;

  return (
    <>
      <div className="design">
        <div className="left-image"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
        <div className="strip"></div>
        <div className="crosses">
          {crosses.map((index) => (
            <div key={index} className="cross"></div>
          ))}
        </div>
      </div>
      <div className="social">
        <a
          href="https://www.flaticon.com/free-icons/twitter-social-badge"
          title="twitter social badge icons"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.flaticon.com/free-icons/facebook"
          title="facebook icons"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a
          href="https://www.flaticon.com/free-icons/instagram"
          title="instagram icons"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.flaticon.com/free-icons/whatsapp"
          title="whatsapp icons"
        >
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </>
  );
};

export default Design;
