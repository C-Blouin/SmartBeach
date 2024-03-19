// Global React Imports.
import React from "react";
import { useState, useEffect, useContext } from "react";

// Hero Forecast Widget Icon Imports.
import thunderstorm from "../images/landing/forecast-icons/thunderstorms.svg";
import windSpeed from "../images/landing/forecast-icons/wind.svg";
import rainChance from "../images/landing/forecast-icons/umbrella.svg";

// Indicators Imports.
import safeIndicator from "../images/landing/safety-indicators/safe.svg";
import cautionIndicator from "../images/landing/safety-indicators/caution.svg";
import dangerIndicator from "../images/landing/safety-indicators/danger.svg";

// Why Section Icon Imports
import reasonIcon from "../images/landing/reason-icons/reason-icon.svg";

// About Image Imports
import aboutImage from "../images/landing/about/about-image.svg";

// Review Images Imports
import reviewImage from "../images/landing/reviews/laura.png";

// FAQS Image Imports
import lifeBuoy from "../images/landing/faq/life-buoy.png";

function Home() {
  // Setting Document Title for the Home Page.
  useEffect(() => {
    document.title = "Smart Beach | Home";
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Start of Hero Wrapper */}
      <div className="hero-wrapper">
        {/* Start of Hero Section */}
        <div id="hero">
          {/* Start of Hero Content */}
          <section className="hero-content">
            <h1>
              Station Beach <br /> Kincardine
            </h1>
            <p>Transitioning current data into safe swimming.</p>
          </section>
          {/* End of Hero Content */}

          {/* Start of Hero Forecast */}
          <div className="hero-forecast">
            {/* Primary Card */}
            <div className="primary-card">
              <img src={thunderstorm} alt="Thunderstorm" />
              <div className="primary-card-content">
                <article>
                  <h3>24°</h3>
                  <p>Thunderstorms</p>
                </article>
                <div className="temperature-container">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                      />
                    </svg>
                    <p>34°</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                      />
                    </svg>
                    <p>22°</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Card One */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Wind Speed</p>
                <img
                  src={dangerIndicator}
                  alt="Danger Indicator"
                  className="safety-indicators"
                />
              </div>
              <img src={windSpeed} alt="Wind Speed Icon" />
              <p>
                103 <small>km/h</small>
              </p>
            </article>

            {/* Sub Card Two */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Wind Gust</p>
                <img
                  src={cautionIndicator}
                  alt="Caution Indicator"
                  className="safety-indicators"
                />
              </div>
              <img src={windSpeed} alt="Wind Gust Icon" />
              <p>
                54 <small>km/h</small>
              </p>
            </article>

            {/* Sub Card Three */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Rain Chance</p>
                <img
                  src={safeIndicator}
                  alt="Safe Indicator"
                  className="safety-indicators"
                />
              </div>
              <img src={rainChance} alt="Rain Chance Icon" />
              <p>20%</p>
            </article>

            {/* Sub Card Four */}
            <article className="widget-card">
              <div className="widget-top">
                <p>Rain Chance</p>
                <img
                  src={dangerIndicator}
                  alt="Danger Indicator"
                  className="safety-indicators"
                />
              </div>
              <img src={rainChance} alt="Rain Chance Icon" />
              <p>80%</p>
            </article>

            {/* Forecast Call to Action */}
            <a href="/dashboard" id="forecast-cta">
              Get Full Forecast
            </a>
          </div>
          {/* End of Hero Forecast */}
        </div>
        {/* End of Hero Section */}
      </div>
      {/* End of Hero Wrapper */}

      {/* Start of Why Section */}
      <section id="why">
        {/* Start of Why Section Primary Content */}
        <article className="why-container">
          <h2>Why Station Beach</h2>
          <div className="why-contents">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium.
            </p>
            <a href="/about">Read More</a>
          </div>
        </article>
        {/* End of Why Section Primary Content */}

        {/* Start of Reasons Container */}
        <div className="reasons">
          {/* Reason One Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>

          {/* Reson Two Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>

          {/* Reason Three Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>

          {/* Reason Four Card */}
          <article>
            <img src={reasonIcon} alt="Reason" />
            <div>
              <h3 className="reason-heading">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, saepe.
              </p>
            </div>
          </article>
        </div>
        {/* End of Reasons Container */}
      </section>
      {/* End of Why Section */}

      {/* Start of About Section */}
      <div className="about-wrapper">
        <div id="about">
          <img src={aboutImage} alt="About the Project Graphic" />
          <article>
            <h2>About the Project</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <a href="#">Read More</a>
          </article>
        </div>
      </div>
      {/* End of About Section */}

      {/* Start of Reviews Wrapper */}
      <div className="reviews-wrapper">
        {/* Start of Reviews Section */}
        <section id="reviews">
          <h2>Visitor Reviews</h2>
          {/* Start of Reviews Carousel */}
          <div id="reviewsCarousel" className="carousel slide">
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            {/* Start of Inner Carousel Content */}
            <div className="carousel-inner">
              {/* Start of First Carousel Item, Each Item Holds Two Cards. */}
              <div className="carousel-item active">
                <div className="row justify-content-center reviews-container">
                  <div className="col-lg-6 mx-auto">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Laura Ingraham</h3>
                          <p>Connecticut, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto d-none d-lg-block">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>John Doe</h3>
                          <p>New York, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of First Carousel Item */}

              {/* Start of Second Carousel Item */}
              <div className="carousel-item">
                <div className="row reviews-container">
                  <div className="col-lg-6 mx-auto">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Jane Doe</h3>
                          <p>California, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto d-none d-lg-block">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Chris Smith</h3>
                          <p>Texas, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Second Carousel Item */}

              {/* Start of Third Carousel Item */}
              <div className="carousel-item">
                <div className="row reviews-container">
                  <div className="col-lg-6 mx-auto">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Jeffrey Rehal</h3>
                          <p>Newmarket, Ontario</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto d-none d-lg-block">
                    <div className="review">
                      <div>
                        <img src={reviewImage} alt="Review Portrait Image" />
                        <article>
                          <h3>Monica Decabre</h3>
                          <p>Ohio, United States</p>
                        </article>
                      </div>
                      <p className="review-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus vitae, suscipit perferendis ipsum,
                        cumque soluta in quae, distinctio alias sint est
                        blanditiis commodi delectus fuga consequatur quis
                        dolorem eaque porro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Third Carousel Item */}
            </div>
            {/* End of Inner Carousel Content */}

            {/* Carousel Control Buttons, Next & Previous, Can always customize the icons to use SVGs of our choosing. */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* End of Reviews Carousel */}
        </section>
        {/* End of Reviews Section */}
      </div>
      {/* End of Reviews Wrapper */}

      {/* Start of FAQS Wrapper */}
      <div className="faq-wrapper">
        {/* Start of FAQS Section */}
        <section id="faq">
          <h2>Frequently Asked Questions</h2>

          {/* Start of Accordion Container */}
          <div className="accordion accordion-flush" id="faq-accordion">
            {/* Question 1 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is SmartBeach and how does it work?
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>

            {/* Question 2 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What type of information does SmartBeach provide about beach
                  facilities?
                </button>
              </h2>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    SmartBeach not only focuses on water conditions but also
                    offers detailed information about beach facilities. You can
                    find details about amenities such as restrooms, lifeguard
                    availability, beach equipment rentals, and more. This
                    ensures you have all the information you need for a
                    comfortable and enjoyable day at the beach.
                  </p>
                </div>
              </div>
            </article>

            {/* Question 3 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can Smart Beach help me plan activities at the beach?
                </button>
              </h2>

              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>

            {/* Question 4 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Are there any safety alerts provided by SmartBeach?
                </button>
              </h2>

              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>

            {/* Question 5 Accordion Item */}
            <article className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How can I contribute to Smart Beach and share my experiences?
                </button>
              </h2>

              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis unde consequatur sunt fugiat voluptatibus voluptatem
                    doloremque adipisci nemo, veniam, velit qui! Neque nihil
                    consequuntur repellendus est suscipit doloremque
                    voluptatibus minima tenetur illum assumenda excepturi
                    tempore, laboriosam commodi saepe sunt! Accusamus eius animi
                    dolore dignissimos mollitia? A fugiat corporis explicabo
                    sapiente!
                  </p>
                </div>
              </div>
            </article>
          </div>
          {/* End of Accordion Container */}

          {/* Life Buoy Image to be Positioned Absolutely, Relative to the Accordion Container */}
          <img src={lifeBuoy} alt="Life Buoy" className="life-buoy" />
        </section>
        {/* End of FAQS Section */}
      </div>
      {/* End of FAQS Wrapper */}
    </div>
  );
}
export default Home;
