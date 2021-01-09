import React from "react";

import "./Backdrop.css";

const backdrop = (props) => (
  <React.Fragment>
    <div className="Background">
      {props.backdrop && <div className="Backdrop"></div>}
    </div>
  </React.Fragment>
);

export default backdrop;
