import React from "react"
import { Link } from "gatsby"

import LayoutArticle from "../components/layoutArticle"
import SEO from "../components/seo"

const article = () => (
  <LayoutArticle>
    <div data-component="ArticlePage">
      <div className="header-image">
        <div className="header-container w-container">
          <Link to="" className="hollow-button">
            ❮ all STORIES
          </Link>
          <div className="credits">Photo credits</div>
        </div>
      </div>
      <div className="content-section">
        <div className="w-container">
          <div className="w-row">
            <div className="article-body-column w-col w-col-8">
              <h1 className="article-heading">
                Trekking and Documenting the Surreal Patagonia
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. .
              </p>
              <p className="quote">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.”
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. <em>Nunc ut sem vitae</em>{" "}
                risus tristique posuere. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
              <h2>Something new is coming</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. <em>Nunc ut sem vitae</em>{" "}
                risus tristique posuere.
              </p>
              <div className="images">
                <img
                  src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515354378c17a_thumb11.jpg"
                  width="109"
                  alt=""
                  className="thumbnail"
                />
                <img
                  src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515fe4978c16c_thumb14.jpg"
                  width="109"
                  alt=""
                  className="thumbnail"
                />
                <img
                  src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff41151548c278c178_thumb10.jpg"
                  width="109"
                  alt=""
                  className="thumbnail"
                />
                <img
                  src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515d9ca78c16a_thumb3.jpg"
                  width="109"
                  alt=""
                  className="thumbnail"
                />
                <img
                  src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff41151581a378c173_thumb7.jpg"
                  width="109"
                  alt=""
                  className="thumbnail"
                />
                <div className="image-text">
                  Here&#x27;s some text about this photo.
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. <em>Nunc ut sem vitae</em>{" "}
                risus tristique posuere. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
              <div className="images">
                <img
                  src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115153f9f78c17f_jeep.jpg"
                  srcSet="
                  https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115153f9f78c17f_jeep-p-1080x810.jpeg  1080w,
                  https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115153f9f78c17f_jeep-p-1600x1200.jpeg 1600w,
                  https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115153f9f78c17f_jeep-p-2000x1500.jpeg 2000w,
                  https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115153f9f78c17f_jeep.jpg              2048w
                "
                  sizes="(max-width: 767px) 96vw, (max-width: 991px) 478.65625px, 619.984375px"
                  alt=""
                  className="big-image"
                />
                <div className="image-text">
                  Here&#x27;s some text about this photo.
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
              <div className="share-article-wrapper w-clearfix">
                <h4>Loved it? Share it.</h4>
                <div className="share-btn w-widget w-widget-twitter">
                  <div className="w-widget-twitter-count-shim w--vertical">
                    <div className="w-widget-twitter-count-inner">...</div>
                  </div>
                  <div className="w-widget-twitter-count-clear"></div>
                  {/* <iframe
                    src="//platform.twitter.com/widgets/tweet_button.html#url=http%3A%2F%2Fwebflow.com&amp;counturl=webflow.com&amp;text=Check%20out%20this%20site&amp;count=vertical&amp;size=m&amp;dnt=true"
                    scrolling="no"
                    frameborder="0"
                    allowtransparency="true"
                    style="
                    border: none;
                    overflow: hidden;
                    width: 62px;
                    height: 21px;
                  "
                  ></iframe> */}
                </div>
                <div className="share-btn facebook w-widget w-widget-facebook">
                  {/* <iframe
                    src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fwebflow&amp;layout=box_count&amp;locale=en_US&amp;action=like&amp;show_faces=false&amp;share=false"
                    scrolling="no"
                    frameborder="0"
                    allowtransparency="true"
                    style="
                    border: none;
                    overflow: hidden;
                    width: 55px;
                    height: 65px;
                  "
                  ></iframe> */}
                </div>
                <div className="share-btn w-widget w-widget-gplus">
                  <div
                    className="g-plusone"
                    data-href="http://webflow.com"
                    data-size="tall"
                    data-annotation="bubble"
                    data-recommendations="false"
                  ></div>
                </div>
              </div>
            </div>
            <div className="author-column w-clearfix w-col w-col-4">
              <h4 className="w-hidden-main w-hidden-medium">
                About the Author
              </h4>
              <img
                src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515964378c170_Profile-pic.jpg"
                width="125"
                alt=""
                className="author-image"
              />
              <h2>Jimmy Huarez</h2>
              <p className="about-text">
                Jimmy started ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique
              </p>
              <div className="article-info-wrapper">
                <div className="article-info-text">March 2, 2014</div>
                <div className="article-info-text tag">Camera</div>
                <div className="article-info-text tag">Nature</div>
              </div>
              <div className="author-social-links">
                <div className="author-connect">Connect with the author</div>
                <a href="#" className="social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515190c78c169_twitter-icon_black.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115154ea578c16d_facebook-icon_black.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115155fcb78c168_instagram-icon-black.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-section">
        <div className="w-container">
          <h2 className="alternative-h2">
            Get the latest articles in your inbox
          </h2>
          <div className="form-wrapper w-form">
            <form
              name="wf-form-subscribe-via-article"
              data-name="Subscribe via Article"
              className="w-clearfix"
            >
              <input
                type="email"
                name="email"
                data-name="Email"
                placeholder="Enter your email address"
                maxLength="256"
                required=""
                className="sign-up-field w-input"
              />
              <input
                type="submit"
                value="Subscribe"
                data-wait="Please wait..."
                className="sign-up-button w-button"
              />
            </form>
            <div className="success-message on-dark w-form-done">
              <h2 className="alternative-h2">Awesome sauce!</h2>
              <p>Thank you! Your submission has been received!</p>
            </div>
            <div className="w-form-fail">
              <p>Oops! Something went wrong while submitting the form :(</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="w-container">
          <h2 className="alternative-h2 suggestions">Suggested Stories</h2>
          <Link to="article" className="article suggested w-inline-block w-clearfix">
            <div className="image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515659578c16b_thumb17.jpg"
                width="109"
                alt=""
                className="thumbnail"
              />
            </div>
            <section className="article-text-wrapper w-clearfix">
              <h2 className="arrow">❯</h2>
              <h2 className="thumbnail-title">Portugal, Here I Come</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="article-info-wrapper">
                <div className="article-info-text">March 2, 2013</div>
                <div className="article-info-text tag">Photography</div>
                <div className="article-info-text tag">Nature</div>
              </div>
            </section>
          </Link>
          <Link to="article" className="article suggested w-inline-block w-clearfix">
            <div className="image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff411515428078c172_thumb6.jpg"
                width="109"
                alt=""
                className="thumbnail"
              />
            </div>
            <section className="article-text-wrapper w-clearfix">
              <h2 className="arrow">❯</h2>
              <h2 className="thumbnail-title">Trees, Trees Everywhere</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="article-info-wrapper">
                <div className="article-info-text">March 2, 2013</div>
                <div className="article-info-text tag">Photography</div>
                <div className="article-info-text tag">Nature</div>
              </div>
            </section>
          </Link>
          <Link
            to="article"
            className="article suggested last w-inline-block w-clearfix"
          >
            <div className="image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/5ecf90ff0d06db6141fa10c3/5ecf90ff4115152ee578c17b_thumb19.jpg"
                width="109"
                alt=""
                className="thumbnail"
              />
            </div>
            <section className="article-text-wrapper w-clearfix">
              <h2 className="arrow">❯</h2>
              <h2 className="thumbnail-title">A Lonely Road from Russia</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="article-info-wrapper">
                <div className="article-info-text">March 2, 2013</div>
                <div className="article-info-text tag">Photography</div>
                <div className="article-info-text tag">Nature</div>
              </div>
            </section>
          </Link>
        </div>
      </div>
      <div className="content-section footer">
        <div className="w-container">
          <Link href="" className="footer-link proof">
            PROOF MAGAZINE
          </Link>
          <Link to="suggest" className="footer-link">
            suggest a story
          </Link>
          <Link to="about" className="footer-link">
            about
          </Link>
          <Link to="subscribe" className="footer-link">
            subscribe
          </Link>
        </div>
      </div>
    </div>
  </LayoutArticle>
)

export default article
