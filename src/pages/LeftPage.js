import React from "react";
import {Link} from 'gatsby'

const LeftPage = () => (
  <header className="main-column header">
        <h1 className="logo">PROOF</h1>
        <div className="big-tagline w-hidden-small w-hidden-tiny">
          Explore.
          <br />
          Shoot.
          <br />
          Write.
        </div>
        <div className="info-wrapper">
          <div className="tagline">A Nature Photography Magazine</div>
          <div className="byline">By Billy Rogers</div>
        </div>
        <div className="footer-wrapper w-clearfix">
          <Link to="/" className="footer-nav-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115155b1478c16e_home-icon.svg"
              alt=""
            />
          </Link>
          <a
            href="http://www.twitter.com/webflowapp"
            className="footer-nav-link w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515404378c176_twitter-icon.svg"
              alt=""
            />
          </a>
          <a
            href="http://www.facebook.com/webflow"
            className="footer-nav-link w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515a91d78c17c_facebook-icon.svg"
              alt=""
            />
          </a>
          <Link to="/subscribe" className="footer-nav-link w-inline-block">
            <div className="subscribe">Subscribe</div>
          </Link>
        </div>
      </header>
)

export default LeftPage
