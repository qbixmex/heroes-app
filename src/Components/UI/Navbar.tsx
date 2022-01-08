import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout= () => {
    navigate("/login", {
      replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient px-4 mb-4">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? "active" : ""}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? "active" : ""}`}
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav mr-auto">
          <li className='nav-item'>
            <button className="nav-link btn text-info">Daniel González</button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn"
              onClick={ handleLogout }
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}