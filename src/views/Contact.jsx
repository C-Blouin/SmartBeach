import React from "react";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    document.title = "Smart Beach | Contact Us";
  }, []);

  return (
    <div className="contact_us">
      <section className="contact_us_header"></section>
      <div className="container">
        <section className="contact_us_info">
          <div className="contact_info">
            <h1>Get in Touch</h1>
            <p>
              Feel free to reach out to us with any questions or concerns! Lorem
              ipsum dolor sit amit consectetur. Dapibus at urna neque.
            </p>
            <ul>
              <li>smartbeach@gmail.com</li>
              <li>(519)764-0000</li>
              <li>200 Station Beach Road Kincardine, Ontario</li>
            </ul>
          </div>
          <div className="contact_us_form">
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
                  name="contact-phone"
                  id="contact-phone"
                  placeholder="Contact Phone"
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
