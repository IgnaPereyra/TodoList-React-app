import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export function Nav() {
  return (
    <header className="navbar">
      <div>
      <NavLink exact to='/'>TODOS</NavLink>
      </div>
      <nav>
        <NavLink to='/add'>Add Todo</NavLink>
      </nav>
    </header>
  )
};

export default Nav;