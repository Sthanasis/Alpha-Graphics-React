import React, { useEffect, useState } from "react";

import "./Logo.css";

const Logo = () => {
  const [fadeInClass, setFadeInClass] = useState("");
  const [fadeOutClass, setFadeOutClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFadeInClass("Fade-in");
      setFadeOutClass("Fade-out");
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <div className={`Logo ${fadeOutClass}`} data-icon="landing">
        <div className="LogoFooter">Graphics</div>
      </div>
      <div className={`ArtistName center ${fadeInClass}`}>
        <div className="name">
          <span className="firstName">Alexandros</span>
          <span className="lastName">Efthymiou</span>
        </div>
        <div className="description">
          <span className="redColor">Graphic Designer</span>
          <span className="separator">-</span>
          <span className="blueColor">
            <span>Concept Artist</span>
            <span data-icon="phone"></span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Logo;
