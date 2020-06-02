import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const subscribe = () => (
  <Layout>
    <SEO title="Subscribe" />
    <div className="section" data-component="ContentSubscribe">
      <h1>Subscribe to Proof</h1>
      <p>
        Want the latest articles in your inbox? Subscribe - it&#x27;s free! Just
        give us your contact info and you&#x27;re on your way.
      </p>
      <div className="form-wrapper w-form">
        <form name="wf-form-subscribe" data-name="Subscribe" className="w-clearfix">
          <input
            type="text"
            name="first-name"
            data-name="First Name"
            placeholder="First Name"
            maxLength="256"
            required=""
            className="field first w-input"
          />
          <input
            type="text"
            name="last-name"
            data-name="Last Name"
            placeholder="Last Name"
            maxLength="256"
            required=""
            className="field last w-input"
          />
          <input
            type="email"
            name="email"
            data-name="Email"
            placeholder="Email Address"
            maxLength="256"
            required=""
            className="field email w-input"
          />
          <input
            type="text"
            name="location"
            data-name="Location"
            placeholder="What&#x27;s you favorite location? (Optional)"
            maxLength="256"
            className="field w-input"
          />
          <input
            type="submit"
            value="Subscribe"
            data-wait="Sweet!!"
            wait="Sweet!!"
            className="button w-button"
          />
        </form>
        <div className="success-message w-form-done">
          <h2>Awesome sauce!</h2>
          <p>
            You&#x27;re subscribed to some awesome articles. Look out for weekly
            newsletters.
          </p>
          <a href="/" className="button blue">
            Proof Home
          </a>
        </div>
        <div className="w-form-fail">
          <p>Oops! Something went wrong while submitting the form :(</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default subscribe
