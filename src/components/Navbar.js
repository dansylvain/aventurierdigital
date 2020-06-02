import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <div>
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration={400}
    role="banner"
    className="w-nav"
  />
  <nav
    data-collapse="small"
    data-animation="default"
    data-duration={400}
    role="banner"
    className="navbar w-nav"
  >
    <nav role="navigation" className="nav-menu w-nav-menu">
      <Link to="" className="nav-link w-nav-link">
        Articles
      </Link>
      <Link to="suggest" className="nav-link w-nav-link">
        SUGGEST
      </Link>
      <Link
        to="subscribe"
        aria-current="page"
        className="nav-link w-nav-link"
      >
        Subscribe
      </Link>
      <Link to="about" className="nav-link w-nav-link">
        About
      </Link>
    </nav>
    <div className="menu-wrapper w-clearfix w-nav-button">
      <div className="menu">MENU</div>
      <div className="menu-icon w-icon-nav-menu" />
    </div>
  </nav>
</div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
