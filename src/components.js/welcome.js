import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container">
      <Link to="/login">Login</Link>
    </div>
  );
}
