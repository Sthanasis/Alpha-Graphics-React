import React from "react";
import { Link } from "react-router-dom";

import "./Social.css";

const social = () => (
  <div className="Social">
    <Link to="#" data-icon="behance" />
    <Link to="#" data-icon="instagram" />
    <Link to="#" data-icon="facebook" />
    <Link to="#" data-icon="linkedin" />
  </div>
);

export default social;
