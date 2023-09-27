import "../styles/home.scss";
import Button from "../Components/Button";
import HeaderImage from "../assets/images/Header Image.png";
import AboutUsInfo from "../Components/AboutUsInfo";
import img1 from "../assets/images/Know more Image 1.png";
import img2 from "../assets/images/Know more Image 2.png";
function Home() {
  return (
    <section className="home page">
      <div className="container">
        <section className="hero">
          <div className="hero-info">
            <h2 className="section-title">
              We serve high quality foods of all kinds.
            </h2>
            <p>
              Edit this text to make it your own. To edit, simply click directly
              on the text to start adding your own words. You can move the text.
            </p>
            <Button
              title={"View Menu"}
              clas={"contact-btn view-menu"}
              where={"menu"}
            />
            <div>
              <h4>Opening Times</h4>
              <p>Sunday to Saturday | 09:00 AM to 11:00 PM</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>Master canteen, BBSR , Odisha 752054</p>
            </div>
            <div>
              <h4>Call us</h4>
              <a href="tel:+9776462441">+9776462441</a>
            </div>
          </div>
          <div>
            <div className="hero-image">
              <img src={HeaderImage} alt="hero-image" />
            </div>
          </div>
        </section>
        <section className="about">
          <AboutUsInfo img1={img1} img2={img2} />
        </section>
      </div>
    </section>
  );
}
export default Home;
