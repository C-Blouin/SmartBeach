import React from "react";

function Contact() {
  return (
    <section className="container row">
      <div className="contact_info col">
        <h1>Contact Us</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <ul>
          {/* with pseudo-elements we will add icons for each li */}
          <li>contact_email@gmail.com</li>
          <li>(277)544-23-23</li>
          <li>767 New St, Barrie, ON</li>
        </ul>
      </div>
      <div className="form col">
        <form action="#" method="post">
          <fieldset>
            <label for="contact-name">Name</label>
            <input
              type="text"
              name="contact-name"
              id="contact-name"
              placeholder="Name"
              required
            ></input>
          </fieldset>
          <fieldset>
            <label for="contact-phone">Contact Phone</label>
            <input
              type="tel"
              name="contact-phone"
              id="contact-phone"
              placeholder="Tel"
              required
            ></input>
          </fieldset>
          <fieldset>
            <label for="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="contact-message"
              rows="5"
              maxLength="120"
              required
            ></textarea>
          </fieldset>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
