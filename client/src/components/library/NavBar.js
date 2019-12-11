import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li className="nav-link">Library</li>
        </Link>
      </ul>
    </div>
  );
};
