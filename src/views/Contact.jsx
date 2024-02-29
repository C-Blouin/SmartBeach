import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Smart Beach | Contact Us";
  }, []);

  return (
    <div className="contact-us">
      <section className="contact-us-header row"></section>
      <div className="container">
        <section className="contact-us-info row">
          <div className="contact-info col-lg-6 col-md-10">
            <h1>Get in Touch</h1>
            <p>
              Feel free to reach out to us with any questions or concerns! Lorem
              ipsum dolor sit amit consectetur. Dapibus at urna neque.
            </p>
            <ul>
              <li>
                <img
                  src="icons/email-icon.svg"
                  width="35px"
                  height="35px"
                  alt="icon"
                />
                <p>smartbeach@gmail.com</p>
              </li>
              <li>
                <img
                  src="icons/phone-icon.svg"
                  width="35px"
                  height="35px"
                  alt="icon"
                />
                <p>(519)764-0000</p>
              </li>
              <li>
                <img
                  src="icons/mail-icon.svg"
                  width="35px"
                  height="35px"
                  alt="icon"
                />
                <p>200 Station Beach Road Kincardine, Ontario</p>
              </li>
            </ul>
          </div>
          <div className="contact-us-form col-lg-4 col-sm-4">
            <form action="#" method="post">
              <fieldset>
                <label for="contact-name">Name:</label>
                <input
                  type="text"
                  name="contact-name"
                  id="contact-name"
                  placeholder="Your Name"
                  required
                ></input>
              </fieldset>
              <fieldset>
                <label for="contact-phone">Phone:</label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="contact-phone"
                  id="contact-phone"
                  placeholder="Contact Phone (123-456-7890)"
                  required
                ></input>
              </fieldset>
              <fieldset>
                <label for="contact-message">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                ></input>
              </fieldset>
              <button type="submit">Receive Assistance</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
