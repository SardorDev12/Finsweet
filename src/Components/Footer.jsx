import { memo, useEffect, useState } from "react";
import "../styles/footer.scss";
import Header from "./Header";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Button from "./Button";

function Footer() {
  const [year, setYear] = useState();
  useEffect(() => {
    const currentDate = new Date();
    setYear(currentDate.getFullYear());
  });
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__map">
          <div className="map-infos">
            <div className="map-info">
              <h3>Working Hour</h3>
              <p>Sunday to Saturday</p>
              <p>09:00 AM to 11:00 PM</p>
            </div>
            <div className="map-info">
              <h3>Location</h3>
              <p>Street - 127, New York</p>
              <p>United States</p>
            </div>
            <div className="map-info">
              <h3>Contact Us</h3>
              <p>+123456789</p>
              <p>hey@domain.com</p>
            </div>
          </div>
          <div className="map">
            <iframe
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0864134319418!2d69.2808043751199!3d41.30698370098001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad59297d1cf%3A0xda0402847aed7b96!2sWestminster%20International%20University%20in%20Tashkent!5e0!3m2!1sen!2s!4v1695790849856!5m2!1sen!2s"
            ></iframe>
          </div>
        </div>
        <div className="footer-info">
          <Header location={"footer"} hideBtn={true} />
          <div className="footer__social-links">
            <div className="footer-column">
              <p>
                © <span className="year">{year}</span> Finsweet | All rights
                reserved.
              </p>
            </div>
            <div className="footer-column">
              <ul className="social-links">
                <li className="social-link">
                  <a href="">
                    <FaFacebook />
                  </a>
                </li>
                <li className="social-link">
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li className="social-link">
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li className="social-link">
                  <a href="">
                    <FaTelegram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <Button
                title={"Contact Us"}
                where="contact"
                clas={"contact-btn"}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
