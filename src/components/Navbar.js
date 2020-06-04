import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';


const MyNavbar = ({ siteTitle }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

return (
  <div>

  <div
    data-collapse="medium"
    data-animation="default"
    data-duration={400}
    role="banner"
    className="w-nav"
  />
  <nav
  style={{padding: 0,
    justifyContent: "flex-start",
    }}
    data-collapse="medium"
    data-animation="default"
    data-duration={400}
    role="banner"
    className="navbar w-nav"
  >
    <nav role="navigation" className="nav-menu w-nav-menu">
      <Link to="/" className="nav-link w-nav-link">
        Articles
      </Link>
      <Link to="/suggest" className="nav-link w-nav-link">
        SUGGEST
      </Link>
      <Link
        to="/subscribe"
        aria-current="page"
        className="nav-link w-nav-link"
      >
        Subscribe
      </Link>
      <Link to="/about" className="nav-link w-nav-link">
        About
      </Link>
    </nav>
    <div className="menu-wrapper w-clearfix w-nav-button"
    style={{
      padding: 0,
      justifyContent: "center"}}>
      <div className="menu">MENU</div>
      <Navbar color="faded" light style={{boxShadow: "none"}}>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link style={{color: "#000000"}} to="/">ARTICLES</Link>
            </NavItem>
            <NavItem>
              <Link style={{color: "#000000"}} to="/suggest">SUGGEST</Link>
            </NavItem>
            <NavItem>
              <Link style={{color: "#000000"}} to="/subscribe">SUBSCRIBE</Link>
            </NavItem>
            <NavItem>
              <Link style={{color: "#000000"}} to="/about">ABOUT</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>    </div>
  </nav>
</div>
)
}

MyNavbar.propTypes = {
  siteTitle: PropTypes.string,
}

MyNavbar.defaultProps = {
  siteTitle: ``,
}

export default MyNavbar
