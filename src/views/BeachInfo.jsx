import React, { useEffect } from "react";

import reasonIcon from "../images/info/reason-icons/reason-icon.svg";
import safetySign from "../images/info/rectangle-safety-signs.png";
import lifeBuoy from "../images/info/life-buoy.png";

function BeachInfo() {
  useEffect(() => {
    document.title = "Smart Beach | Beach Info";
  }, []);

  return (
    <div className="beach-info-container">
      <div className="beach-info">
        <section className="beach-info-header row"></section>
        <div className="container">
          <h1>Beach Information</h1>
          <section className="our-services">
            <h2>Our Services</h2>
            <div className="services">
              <div className="row">
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
              </div>
              <div className="row">
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-3">
                  <img src={reasonIcon} alt="Reason" />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="safety-signs">
            <h2>Safety Signs</h2>
            <div className="safety-signs-signs">
              <div className="row">
                <article className="col-lg-6 col-md-6">
                  <img
                    src={safetySign}
                    width="166"
                    height="158"
                    alt="Safety Sign"
                  />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-6 col-md-6">
                  <img
                    src={safetySign}
                    width="166"
                    height="158"
                    alt="Safety Sign"
                  />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
              </div>
              <div className="row">
                <article className="col-lg-6 col-md-6">
                  <img
                    src={safetySign}
                    width="166"
                    height="158"
                    alt="Safety Sign"
                  />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
                <article className="col-lg-6 col-md-6">
                  <img
                    src={safetySign}
                    width="166"
                    height="158"
                    alt="Safety Sign"
                  />
                  <div>
                    <h3 className="reason-heading">Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="fag-section">
            <h3>F.A.Q.</h3>
            <div className="fag">
              <section className="faq">
                <div className="accordion accordion-flush" id="faq-accordion">
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
                          Quis unde consequatur sunt fugiat voluptatibus
                          voluptatem doloremque adipisci nemo, veniam, velit qui!
                          Neque nihil consequuntur repellendus est suscipit
                          doloremque voluptatibus minima tenetur illum assumenda
                          excepturi tempore, laboriosam commodi saepe sunt!
                          Accusamus eius animi dolore dignissimos mollitia? A
                          fugiat corporis explicabo sapiente!
                        </p>
                      </div>
                    </div>
                  </article>
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
                        What type of information does SmartBeach provide about
                        beach facilities?
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
                          offers detailed information about beach facilities. You
                          can find details about amenities such as restrooms,
                          lifeguard availability, beach equipment rentals, and
                          more. This ensures you have all the information you need
                          for a comfortable and enjoyable day at the beach.
                        </p>
                      </div>
                    </div>
                  </article>
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
                          Quis unde consequatur sunt fugiat voluptatibus
                          voluptatem doloremque adipisci nemo, veniam, velit qui!
                          Neque nihil consequuntur repellendus est suscipit
                          doloremque voluptatibus minima tenetur illum assumenda
                          excepturi tempore, laboriosam commodi saepe sunt!
                          Accusamus eius animi dolore dignissimos mollitia? A
                          fugiat corporis explicabo sapiente!
                        </p>
                      </div>
                    </div>
                  </article>
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
                          Quis unde consequatur sunt fugiat voluptatibus
                          voluptatem doloremque adipisci nemo, veniam, velit qui!
                          Neque nihil consequuntur repellendus est suscipit
                          doloremque voluptatibus minima tenetur illum assumenda
                          excepturi tempore, laboriosam commodi saepe sunt!
                          Accusamus eius animi dolore dignissimos mollitia? A
                          fugiat corporis explicabo sapiente!
                        </p>
                      </div>
                    </div>
                  </article>
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
                        How can I contribute to Smart Beach and share my
                        experiences?
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
                          Quis unde consequatur sunt fugiat voluptatibus
                          voluptatem doloremque adipisci nemo, veniam, velit qui!
                          Neque nihil consequuntur repellendus est suscipit
                          doloremque voluptatibus minima tenetur illum assumenda
                          excepturi tempore, laboriosam commodi saepe sunt!
                          Accusamus eius animi dolore dignissimos mollitia? A
                          fugiat corporis explicabo sapiente!
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <img src={lifeBuoy} alt="Life Buoy" className="life-buoy" />
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BeachInfo;
