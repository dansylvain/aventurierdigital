import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Suggest = () => (
  <Layout>
    <SEO title="Suggest" />
    <div className="section" data-component="ContentSuggest">
      <h1>Suggest an article</h1>
      <p>
        Proof magazine is a community effort. No one person writes or creates
        awesome stuff. We all play a role people!
      </p>
      <div className="form-wrapper w-form">
        <form name="wf-form-suggest" data-name="Suggest">
          <input
            type="text"
            name="name"
            data-name="Name"
            placeholder="Full Name"
            maxLength="256"
            required=""
            className="field w-input"
          />
          <input
            type="email"
            name="email"
            data-name="Email"
            placeholder="Email Address"
            maxLength="256"
            required=""
            className="field w-input"
          />
          <input
            type="text"
            name="subject"
            data-name="Subject"
            placeholder="What&#x27;s the subject?"
            maxLength="256"
            required=""
            className="field w-input"
          />
          <textarea
            placeholder="What&#x27;s the story?"
            maxLength="5000"
            name="comments"
            data-name="Comments"
            required=""
            className="field big w-input"
          ></textarea>
          <input
            type="submit"
            value="Send Suggestion"
            data-wait="Please wait..."
            className="button w-button"
          />
        </form>
        <div className="success-message w-form-done">
          <h2>Thanks! You&#x27;re awesome</h2>
          <p>
            Your submission has been received and we&#x27;ll get back to you as
            soon as we can. If it&#x27;s a great idea we&#x27;ll feature you in
            PROOF!
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
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className="w-nav"
    ></div>
  </Layout>
)

export default Suggest
