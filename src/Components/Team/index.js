import React from "react";
import "./index.scss";
import Alex from "../../Assets/Images/alex.jpg";
import Tyler from "../../Assets/Images/tyler.jpg";
import Kevin from "../../Assets/Images/kevin.jpg";
import { AnimatePresence, motion } from "framer-motion";

const Team = () => {
  return (
    <div className="team">
      <h1 className="meet">Meet the team!</h1>
      <div className="face-cards">
        <div className="face-card">
          <div className="face-container">
            <img className="headshot" src={Tyler} alt="" />
          </div>
          <span className="name">Tyler Van Buren</span>
          <span className="job-title">President</span>
          <div className="socials">
            <img src="" alt="" href="" />
          </div>
        </div>
        <div className="face-card">
          <div className="face-container">
            <img className="headshot" src={Alex} alt="" />
          </div>
          <span className="name">Alexander Crespo</span>
          <span className="job-title">Vice President</span>
          <div className="socials">
            <img src="" alt="" href="" />
          </div>
        </div>
        <div className="face-card">
          <div className="face-container">
            <img className="headshot" src={Kevin} alt="Photo of Kevin Calle" />
          </div>
          <span className="name">Kevin Calle</span>
          <span className="job-title">Web Developer/Treasurer</span>
          <div className="socials">
            <img src="" alt="" href="" />
          </div>
        </div>
      </div>

      <a
        className="terms"
        rel="noopener noreferrer"
        target="_blank"
        href="/HawkHack_Terms.pdf"
      >
        Rules and Code of Conduct
      </a>
    </div>
  );
};

export default Team;
