import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
           <nav>
    <div className="nav-wrapper light-blue lighten-3">
      <a href="/" className="brand-logo center">Justin A. Sykes</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="mailto:atlsykes1@att.net"><em>atlsykes1@att.net</em></a></li>
        <li><NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/home" className="nav-link" activeClassName="active">About Me</NavLink></li>
      </ul>
    </div>
  </nav>
        </div>
    );
};

export default Navbar;