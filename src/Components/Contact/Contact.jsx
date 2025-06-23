import "./contact.css";
import contactbg from "../../assets/contact-bg.jpg";
import phoneicon from "../../assets/phone-icon.png";
import emailicon from "../../assets/email-icon.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={contactbg} alt="Contact Background" />

      <div className="touch-text">
        <p>| CONTACT US</p>
        <h1 className="h1-text">Get In Touch With Our Agents</h1>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.9300096346785!2d-80.1245788248423!3d25.950317777220523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acb68dc13f97%3A0x3d6e0c37fe5f7910!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2sin!4v1719149757063!5m2!1sen!2sin"
          width="80%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <form class="contact-form">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name..." />

        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your E-mail..."
        />

        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject..."
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info-container">
        <div className="phone-icon-container">
          <img src={phoneicon} alt="" className="picon" />
          <div className="contact-no">
            <h3>010-020-0340</h3>
            <p>Phone Number</p>
          </div>
        </div>
        <div className="email-icon-container">
          <img src={emailicon} alt="" className="picon" />
          <div className="contact-no" >
            <h3>info@villa.co</h3>
            <p>Business Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
