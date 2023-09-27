import { FaArrowRight } from "react-icons/fa";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import Button from "../Components/Button";

function AboutUsInfo({ img1, img2 }) {
  return (
    <section className="about-us">
      <div className="about-us-info">
        <Link className="about-subtitle" to="aboutUs">
          KNOW MORE ABOUT US
          <FaArrowRight className="about-subtitle__icon" />
        </Link>
        <h2 className="about-title">
          We source sustainable & line caught Foods
        </h2>
        <p className="about-text">
          Edit this text to make it your own. To edit, simply click directly on
          the text to start adding your own words. You can move the text by
          dragging and dropping the text anywhere on the page.
        </p>
        <div className="stats">
          <div className="stat">
            <div className="stat-heading">
              <h3>
                <FaChartBar className="stat-icon" />
                10+ People
              </h3>
              <p>We are Small Team</p>
            </div>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
          <div className="stat">
            <div className="stat-heading">
              <h3>
                <FaChartBar className="stat-icon" />
                2014
              </h3>
              <p>We are From</p>
            </div>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
          <div className="stat">
            <div className="stat-heading">
              <h3>
                <FaChartBar className="stat-icon" />
                200k
              </h3>
              <p>We Served</p>
            </div>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
        </div>
        <Button
          title={"View Menu"}
          clas={"contact-btn about-btn"}
          where={"menu"}
        />
      </div>
      <div className="about-images">
        <div className="about-image">
          <img src={img1} alt="about img" />
        </div>
        <div className="about-image">
          <img src={img2} alt="about img" />
        </div>
      </div>
    </section>
  );
}
export default AboutUsInfo;
