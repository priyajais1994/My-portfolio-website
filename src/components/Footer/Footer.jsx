import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { UilLinkedin } from '@iconscout/react-unicons'
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="mailto: kumaripriyanka271439@gmail.com">kumaripriyanka271439@gmail.com</a></span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/priyanka-kumari-7582b6116/">
          <UilLinkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/priyajais1994">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
