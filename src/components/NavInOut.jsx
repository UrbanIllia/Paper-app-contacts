import React from "react";
import { NavLink } from "react-router-dom";

const NavInOut = ({ styledLink }) => {
  return (
    <ul className="flex flex-row items-center gap-5">
      <li>
        <NavLink to="/login" className={styledLink}>
          Log IN
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={styledLink}>
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavInOut;
