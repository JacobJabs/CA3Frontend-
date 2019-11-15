import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container">
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Welcome;
