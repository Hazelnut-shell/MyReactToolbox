import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Splash Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/progressbar">Progress Bar</NavLink>
      </li>
      <li>
        <NavLink to="/todolist">To-Do List</NavLink>
      </li>
      <li>
        <NavLink to="/form">Form</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
