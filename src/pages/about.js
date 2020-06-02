import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="section" data-component="ContentAbout">
      <h1>The Team</h1>
      <div className="w-row">
        <div className="team-column w-col w-col-4 w-col-small-4">
          <img
            src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515ab8d78c177_team1.jpg"
            width="150"
            alt=""
          />
          <h5>Rob Thomas</h5>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515190c78c169_twitter-icon_black.svg"
              alt=""
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115155fcb78c168_instagram-icon-black.svg"
              alt=""
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115154ea578c16d_facebook-icon_black.svg"
              alt=""
            />
          </a>
        </div>
        <div className="team-column w-col w-col-4 w-col-small-4">
          <img
            src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115157d7578c16f_team3.jpg"
            width="150"
            alt=""
          />
          <h5>Jen Jillians</h5>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515190c78c169_twitter-icon_black.svg"
              alt=""
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115155fcb78c168_instagram-icon-black.svg"
              alt=""
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115154ea578c16d_facebook-icon_black.svg"
              alt=""
            />
          </a>
        </div>
        <div className="team-column w-col w-col-4 w-col-small-4">
          <img
            src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115158bee78c174_team2.jpg"
            width="150"
            alt=""
          />
          <h5>Tommy Tikes</h5>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515190c78c169_twitter-icon_black.svg"
              alt=""
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115155fcb78c168_instagram-icon-black.svg"
              alt=""
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115154ea578c16d_facebook-icon_black.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
