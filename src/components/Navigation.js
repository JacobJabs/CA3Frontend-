import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Navigation = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="Welcome"></Link>
        </li>
        <li>
          {" "}
          <Link to="login">log in</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Navigation;
