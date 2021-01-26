import React from 'react';

const Navbar = () => {
    return (
        <div>
           <nav>
    <div className="nav-wrapper light-blue lighten-3">
      <a href="/" className="brand-logo center">Justin A. Sykes</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="about me.html">About Me</a></li>
      </ul>
    </div>
  </nav>
        </div>
    );
};

export default Navbar;