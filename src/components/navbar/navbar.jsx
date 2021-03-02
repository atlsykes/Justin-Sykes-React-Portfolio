import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav')
    var instances = M.Sidenav.init(elems)
  })
  return (
    <div>
      <nav className='nav-extended'>
        <div className='nav-wrapper light-blue lighten-3'>
          <a href='/' className='brand-logo center'>
            Justin A. Sykes
          </a>
          <a href='/' data-target='mobile-two' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='mobile-one' className='left hide-on-med-and-down'>
            <li>
              <a href='mailto:atlsykes1@att.net'>
                <em>atlsykes1@att.net</em>
              </a>
            </li>
            <li>
              <NavLink
                to='/portfolio'
                className='nav-link'
                activeClassName='active'
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className='nav-link'
                activeClassName='active'
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/home' className='nav-link' activeClassName='active'>
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <ul id='mobile-two' className='sidenav'>
        <li>
          <a href='mailto:atlsykes1@att.net'>
            <em>atlsykes1@att.net</em>
          </a>
        </li>
        <li>
          <NavLink
            to='/portfolio'
            className='nav-link'
            activeClassName='active'
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='nav-link' activeClassName='active'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='/home' className='nav-link' activeClassName='active'>
            About Me
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
