import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home Page
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
      <li>
        <NavLink to="/game">Game</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
