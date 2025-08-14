import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          UserDash
        </Link>

        <div className={`menu-icon ${click ? 'is-active' : ''}`} onClick={handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/User" className="nav-links" onClick={closeMobileMenu}>
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ToDoList" className="nav-links" onClick={closeMobileMenu}>
              To Do List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;