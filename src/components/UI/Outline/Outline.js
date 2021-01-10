import React from "react";

import "./Outline.css";

const outline = (props) => (
  <React.Fragment>
    <div className="Close" onClick={props.close}>
      x
    </div>
    <div className="darkbackdrop"></div>
  </React.Fragment>
);

export default outline;
